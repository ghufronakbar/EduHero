import { SeedPuzzle } from "@/types/seed";

export const puzzleSequenceMatematikaEasy: SeedPuzzle[] = [
    // 1. Urutan Bilangan Bulat (Negatif ke Positif)
    {
        id: 'math_easy_seq_001',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Bilangan Bulat',
        questionText: 'Urutkan bilangan berikut dari yang TERKECIL hingga TERBESAR.',
        explanationText: 'Bilangan negatif makin besar angkanya makin kecil nilainya. Urutan: -10, -5, 0, 5.',
        pieces: [
            { id: 'puz_int_1', text: '-10', correctOrderIndex: 1, image: "/assets/images/num_min10.png" },
            { id: 'puz_int_2', text: '-5', correctOrderIndex: 2, image: "/assets/images/num_min5.png" },
            { id: 'puz_int_3', text: '0', correctOrderIndex: 3, image: "/assets/images/num_0.png" },
            { id: 'puz_int_4', text: '5', correctOrderIndex: 4, image: "/assets/images/num_5.png" },
        ],
    },

    // 2. Satuan Panjang (Tangga Meter)
    {
        id: 'math_easy_seq_002',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Pengukuran',
        questionText: 'Urutkan satuan panjang dari yang TERPENDEK ke TERPANJANG.',
        explanationText: 'Milimeter < Centimeter < Meter < Kilometer.',
        pieces: [
            { id: 'puz_unit_1', text: 'Milimeter (mm)', correctOrderIndex: 1, image: "/assets/images/ruler_mm.png" },
            { id: 'puz_unit_2', text: 'Centimeter (cm)', correctOrderIndex: 2, image: "/assets/images/ruler_cm.png" },
            { id: 'puz_unit_3', text: 'Meter (m)', correctOrderIndex: 3, image: "/assets/images/tape_measure.png" },
            { id: 'puz_unit_4', text: 'Kilometer (km)', correctOrderIndex: 4, image: "/assets/images/road_sign.png" },
        ],
    },

    // 3. Pecahan Sederhana
    {
        id: 'math_easy_seq_003',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Pecahan',
        questionText: 'Urutkan pecahan berikut dari nilai terkecil ke terbesar.',
        explanationText: '1/4 (0.25) -> 1/2 (0.5) -> 3/4 (0.75) -> 1 (1.0).',
        pieces: [
            { id: 'puz_frac_1', text: '1/4', correctOrderIndex: 1, image: "/assets/images/pie_quarter.png" },
            { id: 'puz_frac_2', text: '1/2', correctOrderIndex: 2, image: "/assets/images/pie_half.png" },
            { id: 'puz_frac_3', text: '3/4', correctOrderIndex: 3, image: "/assets/images/pie_three_quarter.png" },
            { id: 'puz_frac_4', text: '1', correctOrderIndex: 4, image: "/assets/images/pie_full.png" },
        ],
    },

    // 4. Pola Bangun Datar (Jumlah Sisi)
    {
        id: 'math_easy_seq_004',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Geometri',
        questionText: 'Urutkan bangun datar berdasarkan jumlah sisinya (Sedikit ke Banyak).',
        explanationText: 'Segitiga (3) -> Segiempat (4) -> Segilima (5) -> Segienam (6).',
        pieces: [
            { id: 'puz_shape_1', text: 'Segitiga', correctOrderIndex: 1, image: "/assets/images/triangle.png" },
            { id: 'puz_shape_2', text: 'Segiempat', correctOrderIndex: 2, image: "/assets/images/square.png" },
            { id: 'puz_shape_3', text: 'Segilima', correctOrderIndex: 3, image: "/assets/images/pentagon.png" },
            { id: 'puz_shape_4', text: 'Segienam', correctOrderIndex: 4, image: "/assets/images/hexagon.png" },
        ],
    },

    // 5. Bilangan Prima Pertama
    {
        id: 'math_easy_seq_005',
        type: 'puzzle_sequence',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Bilangan Prima',
        questionText: 'Susun 4 bilangan prima pertama secara berurutan.',
        explanationText: 'Bilangan prima adalah bilangan yang hanya bisa dibagi 1 dan dirinya sendiri: 2, 3, 5, 7.',
        pieces: [
            { id: 'puz_prime_1', text: '2', correctOrderIndex: 1, image: "/assets/images/num_2.png" },
            { id: 'puz_prime_2', text: '3', correctOrderIndex: 2, image: "/assets/images/num_3.png" },
            { id: 'puz_prime_3', text: '5', correctOrderIndex: 3, image: "/assets/images/num_5.png" },
            { id: 'puz_prime_4', text: '7', correctOrderIndex: 4, image: "/assets/images/num_7.png" },
        ],
    },
];