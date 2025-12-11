import { SeedPuzzle } from "@/types/seed";

export const puzzleSequenceMatematikaMedium: SeedPuzzle[] = [
    // 1. Operasi Hitung Campuran (BODMAS)
    {
        id: 'math_med_seq_006',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Bilangan Bulat',
        questionText: 'Susun langkah pengerjaan yang benar untuk: 5 + 3 x 4 - 2.',
        explanationText: 'Kali dulu (3x4=12), lalu Tambah (5+12=17), terakhir Kurang (17-2=15).',
        pieces: [
            { id: 'puz_op_1', text: '3 x 4 = 12', correctOrderIndex: 1, image: "/assets/images/op_mul.png" },
            { id: 'puz_op_2', text: '5 + 12 = 17', correctOrderIndex: 2, image: "/assets/images/op_add.png" },
            { id: 'puz_op_3', text: '17 - 2 = 15', correctOrderIndex: 3, image: "/assets/images/op_sub.png" },
            { id: 'puz_op_4', text: 'Hasil Akhir = 15', correctOrderIndex: 4, image: "/assets/images/op_res.png" },
        ],
    },

    // 2. Langkah Menyelesaikan PLSV
    {
        id: 'math_med_seq_007',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Aljabar',
        questionText: 'Urutkan langkah penyelesaian persamaan: 2x + 5 = 15.',
        explanationText: 'Pindahkan 5 ke ruas kanan (dikurang), lalu bagi dengan koefisien x (2).',
        pieces: [
            { id: 'puz_alj_1', text: '2x + 5 = 15', correctOrderIndex: 1, image: "/assets/images/eq_step1.png" },
            { id: 'puz_alj_2', text: '2x = 15 - 5', correctOrderIndex: 2, image: "/assets/images/eq_step2.png" },
            { id: 'puz_alj_3', text: '2x = 10', correctOrderIndex: 3, image: "/assets/images/eq_step3.png" },
            { id: 'puz_alj_4', text: 'x = 5', correctOrderIndex: 4, image: "/assets/images/eq_step4.png" },
        ],
    },

    // 3. Mengurutkan Berbagai Bentuk Pecahan
    {
        id: 'math_med_seq_008',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Bilangan Pecahan',
        questionText: 'Urutkan bilangan berikut dari yang TERKECIL hingga TERBESAR.',
        explanationText: '20% (0.2) -> 0.4 -> 1/2 (0.5) -> 0.8.',
        pieces: [
            { id: 'puz_mix_1', text: '20%', correctOrderIndex: 1, image: "/assets/images/num_20_percent.png" },
            { id: 'puz_mix_2', text: '0.4', correctOrderIndex: 2, image: "/assets/images/num_0_4.png" },
            { id: 'puz_mix_3', text: '1/2', correctOrderIndex: 3, image: "/assets/images/num_half.png" },
            { id: 'puz_mix_4', text: '0.8', correctOrderIndex: 4, image: "/assets/images/num_0_8.png" },
        ],
    },

    // 4. Pola Bilangan (Fibonacci)
    {
        id: 'math_med_seq_009',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Pola Bilangan',
        questionText: 'Lanjutkan urutan Pola Bilangan Fibonacci berikut.',
        explanationText: 'Bilangan berikutnya adalah hasil penjumlahan dua bilangan sebelumnya (1+1=2, 1+2=3, 2+3=5, 3+5=8).',
        pieces: [
            { id: 'puz_fib_1', text: '1, 1', correctOrderIndex: 1, image: "/assets/images/fib_start.png" },
            { id: 'puz_fib_2', text: '2', correctOrderIndex: 2, image: "/assets/images/fib_2.png" },
            { id: 'puz_fib_3', text: '3', correctOrderIndex: 3, image: "/assets/images/fib_3.png" },
            { id: 'puz_fib_4', text: '5', correctOrderIndex: 4, image: "/assets/images/fib_5.png" },
        ],
    },

    // 5. Urutan Besar Sudut
    {
        id: 'math_med_seq_010',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Garis dan Sudut',
        questionText: 'Urutkan jenis sudut dari yang ukurannya paling KECIL ke paling BESAR.',
        explanationText: 'Lancip (<90°) -> Siku-siku (90°) -> Tumpul (90°-180°) -> Lurus (180°).',
        pieces: [
            { id: 'puz_ang_1', text: 'Sudut Lancip', correctOrderIndex: 1, image: "/assets/images/angle_acute.png" },
            { id: 'puz_ang_2', text: 'Sudut Siku-siku', correctOrderIndex: 2, image: "/assets/images/angle_right.png" },
            { id: 'puz_ang_3', text: 'Sudut Tumpul', correctOrderIndex: 3, image: "/assets/images/angle_obtuse.png" },
            { id: 'puz_ang_4', text: 'Sudut Lurus', correctOrderIndex: 4, image: "/assets/images/angle_straight.png" },
        ],
    },
];