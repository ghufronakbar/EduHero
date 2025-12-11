import { SeedPuzzle } from "@/types/seed";

export const puzzleSequenceMatematikaHard: SeedPuzzle[] = [
    // 1. Menyelesaikan Persamaan Kuadrat (Melengkapkan Kuadrat Sempurna)
    {
        id: 'math_hard_seq_011',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Persamaan Kuadrat',
        questionText: 'Urutkan langkah mencari akar persamaan x² + 6x + 5 = 0 dengan melengkapkan kuadrat sempurna.',
        explanationText: 'Pindahkan konstanta -> Tambahkan kuadrat setengah koefisien x -> Faktorkan -> Akar kuadratkan.',
        pieces: [
            { id: 'puz_sq_1', text: 'x² + 6x = -5', correctOrderIndex: 1, image: "/assets/images/alg_sq_step1.png" },
            { id: 'puz_sq_2', text: 'x² + 6x + 9 = -5 + 9', correctOrderIndex: 2, image: "/assets/images/alg_sq_step2.png" },
            { id: 'puz_sq_3', text: '(x + 3)² = 4', correctOrderIndex: 3, image: "/assets/images/alg_sq_step3.png" },
            { id: 'puz_sq_4', text: 'x + 3 = ±2', correctOrderIndex: 4, image: "/assets/images/alg_sq_step4.png" },
        ],
    },

    // 2. Menghitung Luas Permukaan Kerucut
    // Melibatkan Pythagoras dulu baru rumus luas
    {
        id: 'math_hard_seq_012',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Bangun Ruang',
        questionText: 'Diketahui kerucut dengan r=3 dan t=4. Urutkan langkah menghitung luas permukaannya.',
        explanationText: 'Cari garis pelukis (s) dulu dengan Pythagoras -> Hitung Luas Alas -> Hitung Luas Selimut -> Jumlahkan.',
        pieces: [
            { id: 'puz_cone_1', text: 'Hitung s = √(3² + 4²) = 5', correctOrderIndex: 1, image: "/assets/images/cone_s.png" },
            { id: 'puz_cone_2', text: 'Luas Alas = π(3)² = 9π', correctOrderIndex: 2, image: "/assets/images/cone_base_area.png" },
            { id: 'puz_cone_3', text: 'Luas Selimut = π(3)(5) = 15π', correctOrderIndex: 3, image: "/assets/images/cone_side_area.png" },
            { id: 'puz_cone_4', text: 'Total = 9π + 15π = 24π', correctOrderIndex: 4, image: "/assets/images/cone_total.png" },
        ],
    },

    // 3. Menghitung Median Data Genap
    {
        id: 'math_hard_seq_013',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Statistika',
        questionText: 'Urutkan langkah mencari Median dari data acak: 8, 4, 6, 10.',
        explanationText: 'Data harus diurutkan dulu. Karena jumlah data genap, ambil rata-rata dua nilai tengah.',
        pieces: [
            { id: 'puz_stat_1', text: 'Urutkan: 4, 6, 8, 10', correctOrderIndex: 1, image: "/assets/images/data_sort.png" },
            { id: 'puz_stat_2', text: 'Ambil tengah: 6 dan 8', correctOrderIndex: 2, image: "/assets/images/data_middle.png" },
            { id: 'puz_stat_3', text: 'Hitung Rata-rata: (6+8) : 2', correctOrderIndex: 3, image: "/assets/images/data_avg.png" },
            { id: 'puz_stat_4', text: 'Median = 7', correctOrderIndex: 4, image: "/assets/images/data_result.png" },
        ],
    },

    // 4. Konstruksi Garis Bagi Sudut
    {
        id: 'math_hard_seq_014',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Lukis Geometri',
        questionText: 'Urutkan langkah melukis Garis Bagi Sudut menggunakan jangka.',
        explanationText: 'Buat busur memotong kaki sudut -> Buat busur dari titik potong tersebut di tengah -> Tarik garis.',
        pieces: [
            { id: 'puz_draw_1', text: 'Buat busur memotong kaki sudut (Titik A & B)', correctOrderIndex: 1, image: "/assets/images/draw_arc_1.png" },
            { id: 'puz_draw_2', text: 'Dari A, buat busur di tengah', correctOrderIndex: 2, image: "/assets/images/draw_arc_2.png" },
            { id: 'puz_draw_3', text: 'Dari B, buat busur memotong busur sebelumnya (Titik C)', correctOrderIndex: 3, image: "/assets/images/draw_arc_3.png" },
            { id: 'puz_draw_4', text: 'Tarik garis dari titik sudut ke C', correctOrderIndex: 4, image: "/assets/images/draw_line.png" },
        ],
    },

    // 5. Menyederhanakan Eksponen
    {
        id: 'math_hard_seq_015',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Bilangan Berpangkat',
        questionText: 'Urutkan langkah menyederhanakan bentuk (a² . a³) / a⁴.',
        explanationText: 'Kali pangkat (dijumlah) -> Bagi pangkat (dikurang).',
        pieces: [
            { id: 'puz_exp_1', text: 'Hitung pembilang: a² . a³', correctOrderIndex: 1, image: "/assets/images/exp_step1.png" },
            { id: 'puz_exp_2', text: 'Jumlahkan pangkat: a^(2+3) = a⁵', correctOrderIndex: 2, image: "/assets/images/exp_step2.png" },
            { id: 'puz_exp_3', text: 'Bagi dengan penyebut: a⁵ / a⁴', correctOrderIndex: 3, image: "/assets/images/exp_step3.png" },
            { id: 'puz_exp_4', text: 'Kurangkan pangkat: a^(5-4) = a', correctOrderIndex: 4, image: "/assets/images/exp_step4.png" },
        ],
    },
];