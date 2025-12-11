import { SeedMultipleChoice } from "@/types/seed";

export const multipleChoiceInggrisEasy: SeedMultipleChoice[] = [
    // 1. Greetings (Melengkapi Dialog)
    {
        id: 'ing_easy_greet_001',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'easy',
        topic: 'Greetings',
        questionText: 'Teacher: "How are you today?" \nStudent: "I am ..., thank you."',
        explanationText: 'Jawaban yang tepat untuk merespon kabar adalah "Fine" (Baik).',
        options: [
            { id: 'opt_ing_001_a', text: 'Fine', isCorrect: true },
            { id: 'opt_ing_001_b', text: 'Sorry', isCorrect: false },
            { id: 'opt_ing_001_c', text: 'Goodbye', isCorrect: false },
            { id: 'opt_ing_001_d', text: 'Thanks', isCorrect: false },
        ],
    },

    // 2. Grammar - To Be (Is, Am, Are)
    {
        id: 'ing_easy_gram_002',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'easy',
        topic: 'To Be',
        questionText: 'She ... a beautiful girl.',
        explanationText: 'Subjek "She" (Dia perempuan tunggal) menggunakan to be "is".',
        options: [
            { id: 'opt_ing_002_a', text: 'am', isCorrect: false },
            { id: 'opt_ing_002_b', text: 'are', isCorrect: false },
            { id: 'opt_ing_002_c', text: 'is', isCorrect: true },
            { id: 'opt_ing_002_d', text: 'were', isCorrect: false },
        ],
    },

    // 3. Vocabulary - Days (Nama Hari)
    {
        id: 'ing_easy_vocab_003',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'easy',
        topic: 'Time',
        questionText: 'Today is Monday. Tomorrow is ...',
        explanationText: 'Setelah hari Senin (Monday) adalah hari Selasa (Tuesday).',
        options: [
            { id: 'opt_ing_003_a', text: 'Sunday', isCorrect: false },
            { id: 'opt_ing_003_b', text: 'Tuesday', isCorrect: true },
            { id: 'opt_ing_003_c', text: 'Wednesday', isCorrect: false },
            { id: 'opt_ing_003_d', text: 'Friday', isCorrect: false },
        ],
    },

    // 4. Grammar - Subject Pronoun
    {
        id: 'ing_easy_gram_004',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'easy',
        topic: 'Pronouns',
        questionText: 'My name is Budi. ... am a student.',
        explanationText: 'Kata ganti untuk diri sendiri (My name...) adalah "I" (Saya).',
        options: [
            { id: 'opt_ing_004_a', text: 'You', isCorrect: false },
            { id: 'opt_ing_004_b', text: 'She', isCorrect: false },
            { id: 'opt_ing_004_c', text: 'He', isCorrect: false },
            { id: 'opt_ing_004_d', text: 'I', isCorrect: true },
        ],
    },

    // 5. Vocabulary - Translation (Warna)
    {
        id: 'ing_easy_vocab_005',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'easy',
        topic: 'Colors',
        questionText: 'What is the color of the sky? (Langit)',
        explanationText: 'Warna langit adalah Biru, dalam bahasa Inggris disebut "Blue".',
        options: [
            { id: 'opt_ing_005_a', text: 'Red', isCorrect: false },
            { id: 'opt_ing_005_b', text: 'Green', isCorrect: false },
            { id: 'opt_ing_005_c', text: 'Blue', isCorrect: true },
            { id: 'opt_ing_005_d', text: 'Yellow', isCorrect: false },
        ],
    },
];