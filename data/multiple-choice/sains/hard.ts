import { SeedMultipleChoice } from "@/types/seed";

export const multipleChoiceSainsHard: SeedMultipleChoice[] = [
    // 1. Biologi - Genetika (Persilangan Dihibrid)
    {
        id: 'bio_hard_gen_001',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'hard',
        topic: 'Pewarisan Sifat',
        questionText: 'Dalam persilangan dihibrid dominan penuh (AaBb x AaBb), berapakah perbandingan fenotip yang dihasilkan pada keturunan F2?',
        explanationText: 'Hukum Mendel II menyatakan perbandingan fenotip persilangan dihibrid heterozigot sempurna adalah 9:3:3:1.',
        options: [
            { id: 'opt_sci_hard_001_a', text: '1:2:1', isCorrect: false },
            { id: 'opt_sci_hard_001_b', text: '9:3:3:1', isCorrect: true },
            { id: 'opt_sci_hard_001_c', text: '3:1', isCorrect: false },
            { id: 'opt_sci_hard_001_d', text: '1:1:1:1', isCorrect: false },
        ],
    },

    // 2. Fisika - Listrik Dinamis (Menghitung Biaya Listrik)
    {
        id: 'fis_hard_elec_002',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'hard',
        topic: 'Listrik Dinamis',
        questionText: 'Sebuah lampu 50 Watt dinyalakan selama 10 jam sehari. Jika tarif listrik Rp1.000/kWh, berapa biaya yang harus dibayar selama 30 hari?',
        explanationText: 'Energi = 50W x 10 jam x 30 hari = 15.000 Wh = 15 kWh. Biaya = 15 kWh x Rp1.000 = Rp15.000.',
        options: [
            { id: 'opt_sci_hard_002_a', text: 'Rp15.000', isCorrect: true },
            { id: 'opt_sci_hard_002_b', text: 'Rp30.000', isCorrect: false },
            { id: 'opt_sci_hard_002_c', text: 'Rp150.000', isCorrect: false },
            { id: 'opt_sci_hard_002_d', text: 'Rp50.000', isCorrect: false },
        ],
    },

    // 3. Kimia - Struktur Atom (Konfigurasi Elektron Ion)
    {
        id: 'kim_hard_atom_003',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'hard',
        topic: 'Partikel Materi',
        questionText: 'Nomor atom Kalsium (Ca) adalah 20. Konfigurasi elektron yang benar untuk ion Kalsium (Ca²⁺) adalah...',
        explanationText: 'Ca (20) = 2, 8, 8, 2. Melepas 2 elektron menjadi Ca²⁺ stabil = 2, 8, 8.',
        options: [
            { id: 'opt_sci_hard_003_a', text: '2, 8, 8, 2', isCorrect: false },
            { id: 'opt_sci_hard_003_b', text: '2, 8, 10', isCorrect: false },
            { id: 'opt_sci_hard_003_c', text: '2, 8, 8', isCorrect: true },
            { id: 'opt_sci_hard_003_d', text: '2, 8, 18, 2', isCorrect: false },
        ],
    },

    // 4. Fisika - Hukum Archimedes (Gaya Apung)
    {
        id: 'fis_hard_arch_004',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'hard',
        topic: 'Tekanan Zat',
        questionText: 'Berat benda di udara adalah 50 N. Saat ditimbang di dalam air, beratnya menjadi 45 N. Berapakah besar Gaya Apung yang dialami benda?',
        explanationText: 'Gaya Apung (Fa) = Berat di Udara (Wu) - Berat di Air (Wa). Fa = 50 N - 45 N = 5 N.',
        options: [
            { id: 'opt_sci_hard_004_a', text: '5 N', isCorrect: true },
            { id: 'opt_sci_hard_004_b', text: '45 N', isCorrect: false },
            { id: 'opt_sci_hard_004_c', text: '50 N', isCorrect: false },
            { id: 'opt_sci_hard_004_d', text: '95 N', isCorrect: false },
        ],
    },

    // 5. Biologi - Sistem Ekskresi (Proses Ginjal)
    {
        id: 'bio_hard_kidney_005',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'hard',
        topic: 'Sistem Ekskresi',
        questionText: 'Proses pembentukan urine dimana terjadi penambahan zat sisa yang tidak dibutuhkan tubuh (augmentasi) terjadi di bagian...',
        explanationText: 'Filtrasi di Glomerulus. Reabsorpsi di Tubulus Proksimal. Augmentasi di Tubulus Distal.',
        options: [
            { id: 'opt_sci_hard_005_a', text: 'Glomerulus', isCorrect: false },
            { id: 'opt_sci_hard_005_b', text: 'Tubulus Kontortus Proksimal', isCorrect: false },
            { id: 'opt_sci_hard_005_c', text: 'Tubulus Kontortus Distal', isCorrect: true },
            { id: 'opt_sci_hard_005_d', text: 'Simpai Bowman', isCorrect: false },
        ],
    },
];