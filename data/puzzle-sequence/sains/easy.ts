import { SeedPuzzle } from "@/types/seed";

export const puzzleSequenceSainsEasy: SeedPuzzle[] = [
    // 1. Metamorfosis Kupu-kupu (Biologi)
    {
        id: 'bio_smp7_meta_001',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'easy',
        topic: 'Metamorfosis',
        questionText: 'Urutkan tahapan metamorfosis kupu-kupu dari awal hingga akhir!',
        explanationText: 'Urutan: Telur -> Ulat (Larva) -> Kepompong (Pupa) -> Kupu-kupu.',
        pieces: [
            { id: 'puz_meta_1', text: 'Telur', correctOrderIndex: 1, image: "/assets/images/butterfly_egg.png" },
            { id: 'puz_meta_2', text: 'Ulat', correctOrderIndex: 2, image: "/assets/images/caterpillar.png" },
            { id: 'puz_meta_3', text: 'Kepompong', correctOrderIndex: 3, image: "/assets/images/cocoon.png" },
            { id: 'puz_meta_4', text: 'Kupu-kupu', correctOrderIndex: 4, image: "/assets/images/butterfly.png" },
        ],
    },

    // 2. Siklus Air (Fisika/IPAS)
    {
        id: 'fis_smp7_siklus_002',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'easy',
        topic: 'Siklus Air',
        questionText: 'Susunlah tahapan siklus air (hujan) yang benar.',
        explanationText: 'Air laut menguap (Evaporasi) -> Membentuk awan (Kondensasi) -> Turun hujan (Presipitasi).',
        pieces: [
            { id: 'puz_water_1', text: 'Air Laut Menguap', correctOrderIndex: 1, image: "/assets/images/evaporation.png" },
            { id: 'puz_water_2', text: 'Membentuk Awan', correctOrderIndex: 2, image: "/assets/images/cloud_forming.png" },
            { id: 'puz_water_3', text: 'Turun Hujan', correctOrderIndex: 3, image: "/assets/images/rain.png" },
            { id: 'puz_water_4', text: 'Air Meresap ke Tanah', correctOrderIndex: 4, image: "/assets/images/groundwater.png" },
        ],
    },

    // 3. Rantai Makanan (Biologi)
    {
        id: 'bio_smp7_food_003',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'easy',
        topic: 'Rantai Makanan',
        questionText: 'Urutkan rantai makanan di ekosistem sawah dari Produsen ke Konsumen Puncak.',
        explanationText: 'Padi dimakan Tikus, Tikus dimakan Ular, Ular dimakan Elang.',
        pieces: [
            { id: 'puz_food_1', text: 'Padi', correctOrderIndex: 1, image: "/assets/images/rice_plant.png" },
            { id: 'puz_food_2', text: 'Tikus', correctOrderIndex: 2, image: "/assets/images/rat.png" },
            { id: 'puz_food_3', text: 'Ular', correctOrderIndex: 3, image: "/assets/images/snake.png" },
            { id: 'puz_food_4', text: 'Elang', correctOrderIndex: 4, image: "/assets/images/eagle.png" },
        ],
    },

    // 4. Urutan Planet (Fisika)
    {
        id: 'fis_smp7_planet_004',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'easy',
        topic: 'Tata Surya',
        questionText: 'Urutkan 4 planet terdekat dari Matahari.',
        explanationText: 'Merkurius -> Venus -> Bumi -> Mars.',
        pieces: [
            { id: 'puz_planet_1', text: 'Merkurius', correctOrderIndex: 1, image: "/assets/images/mercury.png" },
            { id: 'puz_planet_2', text: 'Venus', correctOrderIndex: 2, image: "/assets/images/venus.png" },
            { id: 'puz_planet_3', text: 'Bumi', correctOrderIndex: 3, image: "/assets/images/earth.png" },
            { id: 'puz_planet_4', text: 'Mars', correctOrderIndex: 4, image: "/assets/images/mars.png" },
        ],
    },

    // 5. Metode Ilmiah (Fisika/Umum)
    {
        id: 'fis_smp7_method_005',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'easy',
        topic: 'Metode Ilmiah',
        questionText: 'Susun langkah-langkah dasar metode ilmiah.',
        explanationText: 'Dimulai dari Observasi, lalu menyusun Hipotesis (dugaan), melakukan Eksperimen, dan menarik Kesimpulan.',
        pieces: [
            { id: 'puz_sci_1', text: 'Observasi / Masalah', correctOrderIndex: 1, image: "/assets/images/observation.png" },
            { id: 'puz_sci_2', text: 'Hipotesis', correctOrderIndex: 2, image: "/assets/images/hypothesis.png" },
            { id: 'puz_sci_3', text: 'Eksperimen', correctOrderIndex: 3, image: "/assets/images/experiment.png" },
            { id: 'puz_sci_4', text: 'Kesimpulan', correctOrderIndex: 4, image: "/assets/images/conclusion.png" },
        ],
    },
];