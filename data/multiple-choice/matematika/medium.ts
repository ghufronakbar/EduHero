
import { SeedMultipleChoice } from "@/types/seed";

export const multipleChoiceMatematikaMedium: SeedMultipleChoice[] = [
    // 1. Himpunan (Irisan)
    {
        id: 'math_med_set_001',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Himpunan',
        questionText: 'Diketahui A = {1, 2, 3, 4, 5} dan B = {2, 4, 6, 8}. Manakah anggota irisan A ∩ B?',
        explanationText: 'Irisan (∩) adalah anggota yang ada di kedua himpunan. Angka yang sama di A dan B adalah 2 dan 4.',
        options: [
            { id: 'opt_med_001_a', text: '{1, 2, 3, 4, 5, 6, 8}', isCorrect: false },
            { id: 'opt_med_001_b', text: '{2, 4}', isCorrect: true },
            { id: 'opt_med_001_c', text: '{1, 3, 5}', isCorrect: false },
            { id: 'opt_med_001_d', text: '{6, 8}', isCorrect: false },
        ],
    },

    // 2. Fungsi (Nilai Fungsi)
    {
        id: 'math_med_func_002',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Relasi dan Fungsi',
        questionText: 'Diketahui rumus fungsi f(x) = 2x - 3. Berapakah nilai dari f(5)?',
        explanationText: 'Ganti x dengan 5: f(5) = 2(5) - 3 = 10 - 3 = 7.',
        options: [
            { id: 'opt_med_002_a', text: '7', isCorrect: true },
            { id: 'opt_med_002_b', text: '13', isCorrect: false },
            { id: 'opt_med_002_c', text: '2', isCorrect: false },
            { id: 'opt_med_002_d', text: '-3', isCorrect: false },
        ],
    },

    // 3. Gradien Garis
    {
        id: 'math_med_grad_003',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Persamaan Garis Lurus',
        questionText: 'Gradien dari garis dengan persamaan y = 3x - 5 adalah...',
        explanationText: 'Untuk persamaan y = mx + c, gradien adalah m (koefisien x). Di sini m = 3.',
        options: [
            { id: 'opt_med_003_a', text: '5', isCorrect: false },
            { id: 'opt_med_003_b', text: '-5', isCorrect: false },
            { id: 'opt_med_003_c', text: '3', isCorrect: true },
            { id: 'opt_med_003_d', text: '-3', isCorrect: false },
        ],
    },

    // 4. Teorema Pythagoras (Mencari Sisi Miring)
    {
        id: 'math_med_pyth_004',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Teorema Pythagoras',
        questionText: 'Sebuah segitiga siku-siku memiliki sisi tegak 6 cm dan 8 cm. Berapakah panjang sisi miringnya?',
        explanationText: 'c = √(a² + b²) = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.',
        options: [
            { id: 'opt_med_004_a', text: '10 cm', isCorrect: true },
            { id: 'opt_med_004_b', text: '12 cm', isCorrect: false },
            { id: 'opt_med_004_c', text: '14 cm', isCorrect: false },
            { id: 'opt_med_004_d', text: '100 cm', isCorrect: false },
        ],
    },

    // 5. Luas Lingkaran
    {
        id: 'math_med_circ_005',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Lingkaran',
        questionText: 'Berapakah luas lingkaran yang memiliki jari-jari 7 cm? (π = 22/7)',
        explanationText: 'Luas = π x r² = 22/7 x 7 x 7 = 22 x 7 = 154 cm².',
        options: [
            { id: 'opt_med_005_a', text: '44 cm²', isCorrect: false },
            { id: 'opt_med_005_b', text: '88 cm²', isCorrect: false },
            { id: 'opt_med_005_c', text: '154 cm²', isCorrect: true },
            { id: 'opt_med_005_d', text: '616 cm²', isCorrect: false },
        ],
    },
];