import { SeedMultipleChoice } from "@/types/seed";

export const multipleChoiceMatematikaEasy: SeedMultipleChoice[] = [
    // 1. Aljabar Dasar (Persamaan Linear Satu Variabel)
    {
        id: 'math_easy_alj_001',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Aljabar Dasar',
        questionText: 'Jika 3x + 2 = 11, berapakah nilai x?',
        explanationText: 'Pindahkan 2 ke kanan: 3x = 11 - 2. Maka 3x = 9. Nilai x = 9 / 3 = 3.',
        options: [
            { id: 'opt_001_a', text: '2', isCorrect: false },
            { id: 'opt_001_b', text: '3', isCorrect: true },
            { id: 'opt_001_c', text: '4', isCorrect: false },
            { id: 'opt_001_d', text: '5', isCorrect: false },
        ],
    },

    // 2. Operasi Bilangan Bulat (Positif & Negatif)
    {
        id: 'math_easy_bil_002',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Bilangan Bulat',
        questionText: 'Hasil dari operasi -8 + 15 adalah...',
        explanationText: 'Ibarat hutang 8 dibayar 15, maka sisanya adalah positif 7.',
        options: [
            { id: 'opt_002_a', text: '-7', isCorrect: false },
            { id: 'opt_002_b', text: '7', isCorrect: true },
            { id: 'opt_002_c', text: '-23', isCorrect: false },
            { id: 'opt_002_d', text: '23', isCorrect: false },
        ],
    },

    // 3. Geometri (Keliling Persegi)
    {
        id: 'math_easy_geo_003',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Bangun Datar',
        questionText: 'Sebuah persegi memiliki panjang sisi 6 cm. Berapakah kelilingnya?',
        explanationText: 'Rumus Keliling Persegi = 4 x sisi. Maka 4 x 6 cm = 24 cm.',
        options: [
            { id: 'opt_003_a', text: '12 cm', isCorrect: false },
            { id: 'opt_003_b', text: '24 cm', isCorrect: true },
            { id: 'opt_003_c', text: '36 cm', isCorrect: false },
            { id: 'opt_003_d', text: '10 cm', isCorrect: false },
        ],
    },

    // 4. Menyederhanakan Pecahan
    {
        id: 'math_easy_frac_004',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Pecahan',
        questionText: 'Bentuk paling sederhana dari pecahan 12/16 adalah...',
        explanationText: 'Pembilang dan penyebut sama-sama dibagi 4. 12:4 = 3 dan 16:4 = 4. Jadi 3/4.',
        options: [
            { id: 'opt_004_a', text: '2/3', isCorrect: false },
            { id: 'opt_004_b', text: '3/4', isCorrect: true },
            { id: 'opt_004_c', text: '4/5', isCorrect: false },
            { id: 'opt_004_d', text: '6/8', isCorrect: false },
        ],
    },

    // 5. Perbandingan Bilangan (Tanda Matematika)
    {
        id: 'math_easy_comp_005',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Bilangan',
        questionText: 'Tanda yang tepat untuk mengisi titik-titik pada -5 ... 2 adalah?',
        explanationText: 'Bilangan negatif selalu lebih kecil (<) daripada bilangan positif.',
        options: [
            { id: 'opt_005_a', text: '>', isCorrect: false },
            { id: 'opt_005_b', text: '<', isCorrect: true },
            { id: 'opt_005_c', text: '=', isCorrect: false },
            { id: 'opt_005_d', text: '≥', isCorrect: false },
        ],
    },
];