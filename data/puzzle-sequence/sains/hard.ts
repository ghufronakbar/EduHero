import { SeedPuzzle } from "@/types/seed";

export const puzzleSequenceSainsHard: SeedPuzzle[] = [
    // 1. Peredaran Darah Besar (Sistemik)
    // Tingkat kesulitan: Hard karena siswa harus menghafal urutan ruang jantung dan pembuluh darah spesifik
    {
        id: 'bio_hard_blood_011',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'hard',

        topic: 'Sistem Peredaran Darah',
        questionText: 'Urutkan aliran darah pada Peredaran Darah Besar.',
        explanationText: 'Dimulai dari Bilik Kiri (O2) -> Seluruh Tubuh (Pertukaran O2/CO2) -> Serambi Kanan (CO2).',
        pieces: [
            { id: 'puz_blood_1', text: 'Bilik Kiri (Jantung)', correctOrderIndex: 1, image: "/assets/images/heart_left_ventricle.png" },
            { id: 'puz_blood_2', text: 'Aorta / Arteri', correctOrderIndex: 2, image: "/assets/images/aorta.png" },
            { id: 'puz_blood_3', text: 'Seluruh Tubuh', correctOrderIndex: 3, image: "/assets/images/human_body_circ.png" },
            { id: 'puz_blood_4', text: 'Serambi Kanan (Jantung)', correctOrderIndex: 4, image: "/assets/images/heart_right_atrium.png" },
        ],
    },

    // 2. Mekanisme Gerak Refleks
    // Tingkat kesulitan: Hard karena jalurnya berbeda dengan gerak sadar (tidak ke otak dulu)
    {
        id: 'bio_hard_nerve_012',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'hard',

        topic: 'Sistem Saraf',
        questionText: 'Urutkan jalannya rangsang pada Gerak Refleks (contoh: terkena api).',
        explanationText: 'Rangsang -> Reseptor -> Saraf Sensorik -> Sumsum Tulang Belakang (Bukan Otak!) -> Saraf Motorik -> Otot.',
        pieces: [
            { id: 'puz_ref_1', text: 'Rangsang (Panas)', correctOrderIndex: 1, image: "/assets/images/fire_finger.png" },
            { id: 'puz_ref_2', text: 'Saraf Sensorik', correctOrderIndex: 2, image: "/assets/images/neuron_sensory.png" },
            { id: 'puz_ref_3', text: 'Sumsum Tulang Belakang', correctOrderIndex: 3, image: "/assets/images/spinal_cord.png" },
            { id: 'puz_ref_4', text: 'Otot Bergerak', correctOrderIndex: 4, image: "/assets/images/muscle_move.png" },
        ],
    },

    // 3. Proses Pembentukan Urine
    // Tingkat kesulitan: Hard karena istilah teknis (Filtrasi, Reabsorpsi, Augmentasi)
    {
        id: 'bio_hard_kidney_013',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'hard',

        topic: 'Sistem Ekskresi',
        questionText: 'Urutkan tahapan pembentukan urine di dalam ginjal.',
        explanationText: 'Filtrasi (Penyaringan) -> Reabsorpsi (Penyerapan Kembali) -> Augmentasi (Penambahan Zat Sisa) -> Urine Jadi.',
        pieces: [
            { id: 'puz_urin_1', text: 'Filtrasi (Glomerulus)', correctOrderIndex: 1, image: "/assets/images/filtration.png" },
            { id: 'puz_urin_2', text: 'Reabsorpsi', correctOrderIndex: 2, image: "/assets/images/reabsorption.png" },
            { id: 'puz_urin_3', text: 'Augmentasi', correctOrderIndex: 3, image: "/assets/images/augmentation.png" },
            { id: 'puz_urin_4', text: 'Urine Sesungguhnya', correctOrderIndex: 4, image: "/assets/images/urine_cup.png" },
        ],
    },

    // 4. Mekanisme Mendengar
    // Tingkat kesulitan: Hard karena urutan bagian telinga dalam yang spesifik
    {
        id: 'fis_hard_ear_014',
        type: 'puzzle_sequence',
        category: 'sains', // Masuk fisika (Bunyi) atau sains (Indra)
        difficulty: 'hard',

        topic: 'Indra Pendengaran',
        questionText: 'Bagaimana urutan getaran suara hingga terdengar oleh otak?',
        explanationText: 'Daun telinga tangkap suara -> Gendang telinga bergetar -> Tulang pendengaran memperkuat -> Koklea (Rumah Siput) mengubah jadi sinyal saraf.',
        pieces: [
            { id: 'puz_ear_1', text: 'Gendang Telinga', correctOrderIndex: 1, image: "/assets/images/eardrum.png" },
            { id: 'puz_ear_2', text: 'Tulang Pendengaran', correctOrderIndex: 2, image: "/assets/images/ossicles.png" },
            { id: 'puz_ear_3', text: 'Rumah Siput (Koklea)', correctOrderIndex: 3, image: "/assets/images/cochlea.png" },
            { id: 'puz_ear_4', text: 'Saraf Pendengaran', correctOrderIndex: 4, image: "/assets/images/auditoy_nerve.png" },
        ],
    },

    // 5. Terjadinya Hujan Asam
    // Tingkat kesulitan: Hard karena melibatkan reaksi kimia lingkungan
    {
        id: 'kim_hard_rain_015',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'hard',

        topic: 'Pencemaran Lingkungan',
        questionText: 'Urutkan proses terjadinya Hujan Asam.',
        explanationText: 'Asap pabrik (SO2/NOx) naik -> Bereaksi dengan uap air di awan -> Membentuk Asam (H2SO4) -> Turun sebagai Hujan Asam.',
        pieces: [
            { id: 'puz_acid_1', text: 'Gas Belerang/Nitrogen', correctOrderIndex: 1, image: "/assets/images/factory_smoke.png" },
            { id: 'puz_acid_2', text: 'Bereaksi dengan Air', correctOrderIndex: 2, image: "/assets/images/cloud_reaction.png" },
            { id: 'puz_acid_3', text: 'Terbentuk Asam', correctOrderIndex: 3, image: "/assets/images/acid_molecule.png" },
            { id: 'puz_acid_4', text: 'Hujan Asam Turun', correctOrderIndex: 4, image: "/assets/images/acid_rain_tree.png" },
        ],
    },
];