import { SeedMultipleChoice } from "@/types/seed";

export const multipleChoiceMatematikaHard: SeedMultipleChoice[] = [
    // 1. Sistem Persamaan Linear Dua Variabel (SPLDV) - Soal Cerita
    {
        id: 'math_hard_spldv_001',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'SPLDV',
        questionText: 'Harga 2 buku dan 3 pensil adalah Rp19.000. Sedangkan harga 1 buku dan 4 pensil adalah Rp17.000. Berapakah harga 1 buku?',
        explanationText: 'Eliminasi: (2B + 3P = 19rb) dan (2B + 8P = 34rb [dikali 2]). Selisihnya 5P = 15rb, jadi Pensil = 3rb. Masukkan ke pers 2: 1B + 12rb = 17rb, maka Buku = 5rb.',
        options: [
            { id: 'opt_hard_001_a', text: 'Rp3.000', isCorrect: false },
            { id: 'opt_hard_001_b', text: 'Rp4.000', isCorrect: false },
            { id: 'opt_hard_001_c', text: 'Rp5.000', isCorrect: true },
            { id: 'opt_hard_001_d', text: 'Rp6.000', isCorrect: false },
        ],
    },

    // 2. Bangun Ruang (Perubahan Volume Tabung)
    {
        id: 'math_hard_vol_002',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Bangun Ruang',
        questionText: 'Sebuah tabung memiliki jari-jari r. Jika jari-jari tabung diperbesar menjadi 2 kali lipat namun tingginya tetap, maka volumenya menjadi...',
        explanationText: 'Volume awal = πr²t. Volume baru = π(2r)²t = π(4r²)t = 4πr²t. Jadi volumenya menjadi 4 kali lipat.',
        options: [
            { id: 'opt_hard_002_a', text: 'Tetap sama', isCorrect: false },
            { id: 'opt_hard_002_b', text: '2 kali lipat', isCorrect: false },
            { id: 'opt_hard_002_c', text: '4 kali lipat', isCorrect: true },
            { id: 'opt_hard_002_d', text: '8 kali lipat', isCorrect: false },
        ],
    },

    // 3. Peluang (Dua Dadu)
    {
        id: 'math_hard_prob_003',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Peluang',
        questionText: 'Dua buah dadu dilempar bersamaan. Peluang munculnya mata dadu berjumlah 8 adalah...',
        explanationText: 'Ruang sampel 2 dadu = 36. Kemungkinan jumlah 8: (2,6), (3,5), (4,4), (5,3), (6,2) ada 5 kejadian. Maka Peluang = 5/36.',
        options: [
            { id: 'opt_hard_003_a', text: '4/36', isCorrect: false },
            { id: 'opt_hard_003_b', text: '5/36', isCorrect: true },
            { id: 'opt_hard_003_c', text: '6/36', isCorrect: false },
            { id: 'opt_hard_003_d', text: '8/36', isCorrect: false },
        ],
    },

    // 4. Barisan Aritmatika
    {
        id: 'math_hard_seq_004',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Barisan Bilangan',
        questionText: 'Dalam gedung pertunjukan, baris terdepan ada 20 kursi, baris belakangnya selalu bertambah 4 kursi. Berapa kursi di baris ke-10?',
        explanationText: 'Rumus Un = a + (n-1)b. a=20, b=4, n=10. U10 = 20 + (9)4 = 20 + 36 = 56 kursi.',
        options: [
            { id: 'opt_hard_004_a', text: '56', isCorrect: true },
            { id: 'opt_hard_004_b', text: '60', isCorrect: false },
            { id: 'opt_hard_004_c', text: '52', isCorrect: false },
            { id: 'opt_hard_004_d', text: '40', isCorrect: false },
        ],
    },

    // 5. Fungsi Kuadrat (Akar-akar Persamaan)
    {
        id: 'math_hard_func_005',
        type: 'multiple_choice',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Persamaan Kuadrat',
        questionText: 'Salah satu akar penyelesaian dari persamaan kuadrat x² + 2x - 15 = 0 adalah...',
        explanationText: 'Faktorkan: cari dua angka dikali -15 dijumlah 2. Angkanya 5 dan -3. (x+5)(x-3)=0. Akar-akarnya x = -5 atau x = 3.',
        options: [
            { id: 'opt_hard_005_a', text: '2', isCorrect: false },
            { id: 'opt_hard_005_b', text: '3', isCorrect: true },
            { id: 'opt_hard_005_c', text: '5', isCorrect: false },
            { id: 'opt_hard_005_d', text: '-3', isCorrect: false }, // Hati-hati jebakan, x = 3 benar, tapi opsi D salah tanda
        ],
    },
];