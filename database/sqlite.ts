import * as SQLite from 'expo-sqlite';
import { DB_NAME } from '.';
import { seedDatabase } from './seeder';

// ==========================================
// SINGLETON DATABASE CONNECTION
// ==========================================
// Single database instance to prevent race conditions

let db: SQLite.SQLiteDatabase | null = null;
let isInitializing = false;
let initPromise: Promise<SQLite.SQLiteDatabase> | null = null;

/**
 * Get the database instance (singleton)
 * Waits for initialization if in progress
 */
export const getDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  // Already have a connection
  if (db) {
    return db;
  }

  // Already initializing - wait for it
  if (initPromise) {
    return initPromise;
  }

  // Start initialization
  initPromise = initializeDatabaseInternal();
  return initPromise;
};

/**
 * Internal function to initialize database
 */
const initializeDatabaseInternal = async (): Promise<SQLite.SQLiteDatabase> => {
  if (isInitializing) {
    // Wait for existing initialization
    while (isInitializing && !db) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    if (db) return db;
  }

  isInitializing = true;

  try {
    console.log('[DB] Opening database...');
    db = await SQLite.openDatabaseAsync(DB_NAME);
    console.log('[DB] Database opened successfully');

    await db.execAsync(`
      PRAGMA foreign_keys = ON;

      -- ============ QUESTIONS ============

      -- 1. Tabel Utama: Questions
      CREATE TABLE IF NOT EXISTS questions (
        id TEXT PRIMARY KEY NOT NULL,
        type TEXT NOT NULL,
        category TEXT NOT NULL,
        difficulty TEXT NOT NULL,
        topic TEXT NOT NULL,
        question_text TEXT NOT NULL,
        question_image TEXT,
        explanation_text TEXT,
        explanation_image TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      -- 2. Tabel Pilihan Ganda (Multiple Choice)
      CREATE TABLE IF NOT EXISTS question_choices (
        id TEXT PRIMARY KEY NOT NULL,
        question_id TEXT NOT NULL,
        text TEXT NOT NULL,
        image TEXT,
        is_correct INTEGER DEFAULT 0, -- SQLite pakai 0/1 untuk Boolean
        FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE
      );

      -- 3. Tabel Puzzle Sequence
      CREATE TABLE IF NOT EXISTS puzzle_pieces (
        id TEXT PRIMARY KEY NOT NULL,
        question_id TEXT NOT NULL,
        text TEXT NOT NULL,
        image TEXT,
        correct_order_index INTEGER NOT NULL,
        FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE
      );

      -- 4. Tabel Minigame Objects
      CREATE TABLE IF NOT EXISTS game_objects (
        id TEXT PRIMARY KEY NOT NULL,
        question_id TEXT NOT NULL,
        text TEXT NOT NULL,
        image TEXT,
        is_correct_target INTEGER DEFAULT 0,
        FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE
      );

      -- 5. Tabel Drag & Drop: ZONES
      CREATE TABLE IF NOT EXISTS drag_drop_zones (
        id TEXT PRIMARY KEY NOT NULL,
        question_id TEXT NOT NULL,
        label TEXT NOT NULL,
        FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE
      );

      -- 6. Tabel Drag & Drop: ITEMS
      CREATE TABLE IF NOT EXISTS drag_drop_items (
        id TEXT PRIMARY KEY NOT NULL,
        question_id TEXT NOT NULL,
        correct_zone_id TEXT NOT NULL,
        text TEXT NOT NULL,
        image TEXT,
        FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE,
        FOREIGN KEY (correct_zone_id) REFERENCES drag_drop_zones (id)
      );

      -- ============ USER ANSWER ============
      CREATE TABLE IF NOT EXISTS user_answers (
        id TEXT PRIMARY KEY NOT NULL,
        question_id TEXT NOT NULL,
        is_correct INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE
      );

      -- ============ USER PROFILE (Expected Only 1 Row) ============
      CREATE TABLE IF NOT EXISTS user_profile (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        email TEXT,
        image TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      -- ============ ADAPTIVE LEARNING SESSION ============
      -- Tracks user's learning session state for adaptive difficulty
      CREATE TABLE IF NOT EXISTS adaptive_session (
        id TEXT PRIMARY KEY NOT NULL,
        user_id TEXT NOT NULL,
        category TEXT NOT NULL,
        current_level INTEGER DEFAULT 1,
        correct_streak INTEGER DEFAULT 0,
        wrong_count INTEGER DEFAULT 0,
        total_score REAL DEFAULT 0,
        questions_answered INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, category)
      );

      -- ============ REMEDIAL MATERIALS ============
      -- Catalog of remedial content for struggling students
      CREATE TABLE IF NOT EXISTS remedial_materials (
        id TEXT PRIMARY KEY NOT NULL,
        category TEXT NOT NULL,
        topic TEXT NOT NULL,
        level INTEGER NOT NULL,
        material_type TEXT NOT NULL,
        title TEXT NOT NULL,
        content_url TEXT,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      -- ============ ADAPTIVE ANSWER LOG ============
      -- Extended answer log with timing and attempt data
      CREATE TABLE IF NOT EXISTS adaptive_answer_log (
        id TEXT PRIMARY KEY NOT NULL,
        session_id TEXT NOT NULL,
        question_id TEXT NOT NULL,
        is_correct INTEGER DEFAULT 0,
        answer_time REAL DEFAULT 0,
        attempt_count INTEGER DEFAULT 1,
        score_earned REAL DEFAULT 0,
        level_at_answer INTEGER DEFAULT 1,
        action_taken TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (session_id) REFERENCES adaptive_session (id) ON DELETE CASCADE
      );

    `);

    console.log('[DB] Database tables created');
    return db;
  } catch (error) {
    console.error('[DB] Error initializing database:', error);
    db = null;
    throw error;
  } finally {
    isInitializing = false;
  }
};

/**
 * Initialize database and seed data
 */
export const initDatabase = async () => {
  try {
    console.log('[DB] Initializing database...');
    await getDatabase();

    console.log('[DB] Seeding database...');
    await seedDatabase();
    console.log('[DB] Database ready');
  } catch (error) {
    console.error('[DB] Error in initDatabase:', error);
  }
};

/**
 * Reset database
 */
export const resetDatabase = async () => {
  const database = await getDatabase();

  await database.execAsync(`
      DROP TABLE IF EXISTS adaptive_answer_log;
      DROP TABLE IF EXISTS adaptive_session;
      DROP TABLE IF EXISTS remedial_materials;
      DROP TABLE IF EXISTS drag_drop_items;
      DROP TABLE IF EXISTS drag_drop_zones;
      DROP TABLE IF EXISTS game_objects;
      DROP TABLE IF EXISTS puzzle_pieces;
      DROP TABLE IF EXISTS question_choices;
      DROP TABLE IF EXISTS user_answers;
      DROP TABLE IF EXISTS questions;
   `);

  // Reset the singleton
  db = null;
  initPromise = null;

  console.log("[DB] Database reset.");
  await initDatabase();
};