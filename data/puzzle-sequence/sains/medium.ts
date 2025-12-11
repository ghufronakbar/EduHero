import { SeedPuzzle } from "@/types/seed";

export const puzzleSequenceSainsMedium: SeedPuzzle[] = [
    // 1. Urutan Jalur Pencernaan Makanan
    {
        id: 'bio_med_digest_006',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'medium',

        topic: 'Sistem Pencernaan',
        questionText: 'Urutkan alur makanan masuk ke dalam tubuh manusia.',
        explanationText: 'Makanan masuk lewat Mulut -> Kerongkongan -> Lambung -> Usus Halus (diserap) -> Usus Besar (pembusukan).',
        pieces: [
            { id: 'puz_dig_1', text: 'Mulut', correctOrderIndex: 1, image: "/assets/images/mouth.png" },
            { id: 'puz_dig_2', text: 'Lambung', correctOrderIndex: 2, image: "/assets/images/stomach.png" }, // Skip Kerongkongan agar puzzle ringkas
            { id: 'puz_dig_3', text: 'Usus Halus', correctOrderIndex: 3, image: "/assets/images/small_intestine.png" },
            { id: 'puz_dig_4', text: 'Usus Besar', correctOrderIndex: 4, image: "/assets/images/large_intestine.png" },
        ],
    },

    // 2. Tingkatan Organisasi Kehidupan
    {
        id: 'bio_med_org_007',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'medium',

        topic: 'Organisasi Kehidupan',
        questionText: 'Susun tingkatan organisasi kehidupan dari yang terkecil hingga terbesar.',
        explanationText: 'Sel (unit terkecil) -> Jaringan (kumpulan sel) -> Organ (kumpulan jaringan) -> Sistem Organ.',
        pieces: [
            { id: 'puz_org_1', text: 'Sel', correctOrderIndex: 1, image: "/assets/images/cell_animal.png" },
            { id: 'puz_org_2', text: 'Jaringan', correctOrderIndex: 2, image: "/assets/images/tissue.png" },
            { id: 'puz_org_3', text: 'Organ', correctOrderIndex: 3, image: "/assets/images/organ_heart.png" },
            { id: 'puz_org_4', text: 'Sistem Organ', correctOrderIndex: 4, image: "/assets/images/organ_system.png" },
        ],
    },

    // 3. Spektrum Warna Pelangi (Fisika - Cahaya)
    {
        id: 'fis_med_light_008',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'medium',

        topic: 'Cahaya dan Optik',
        questionText: 'Urutkan warna pelangi berdasarkan panjang gelombangnya (Merah ke Ungu).',
        explanationText: 'Me-Ji-Ku-Hi-Bi-Ni-U (Merah, Jingga, Kuning, Hijau, Biru, Nila, Ungu).',
        pieces: [
            { id: 'puz_col_1', text: 'Merah', correctOrderIndex: 1, image: "/assets/images/color_red.png" },
            { id: 'puz_col_2', text: 'Kuning', correctOrderIndex: 2, image: "/assets/images/color_yellow.png" },
            { id: 'puz_col_3', text: 'Hijau', correctOrderIndex: 3, image: "/assets/images/color_green.png" },
            { id: 'puz_col_4', text: 'Ungu', correctOrderIndex: 4, image: "/assets/images/color_purple.png" },
        ],
    },

    // 4. Tahapan Pembelahan Sel (Mitosis)
    {
        id: 'bio_med_cell_009',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'medium',
        topic: 'Pembelahan Sel',
        questionText: 'Urutkan fase pembelahan sel (Mitosis) berikut.',
        explanationText: 'Urutan: Profase (Awal) -> Metafase (Tengah) -> Anafase (Tarik) -> Telofase (Akhir).',
        pieces: [
            { id: 'puz_mit_1', text: 'Profase', correctOrderIndex: 1, image: "/assets/images/prophase.png" },
            { id: 'puz_mit_2', text: 'Metafase', correctOrderIndex: 2, image: "/assets/images/metaphase.png" },
            { id: 'puz_mit_3', text: 'Anafase', correctOrderIndex: 3, image: "/assets/images/anaphase.png" },
            { id: 'puz_mit_4', text: 'Telofase', correctOrderIndex: 4, image: "/assets/images/telophase.png" },
        ],
    },

    // 5. Jalur Pernapasan Manusia
    {
        id: 'bio_med_resp_010',
        type: 'puzzle_sequence',
        category: 'sains',
        difficulty: 'medium',

        topic: 'Sistem Pernapasan',
        questionText: 'Urutkan perjalanan udara masuk ke dalam paru-paru.',
        explanationText: 'Hidung (Filtrasi) -> Trakea (Tenggorokan) -> Bronkus (Cabang) -> Alveolus (Pertukaran Gas).',
        pieces: [
            { id: 'puz_resp_1', text: 'Hidung', correctOrderIndex: 1, image: "/assets/images/nose.png" },
            { id: 'puz_resp_2', text: 'Trakea', correctOrderIndex: 2, image: "/assets/images/trachea.png" },
            { id: 'puz_resp_3', text: 'Bronkus', correctOrderIndex: 3, image: "/assets/images/bronchus.png" },
            { id: 'puz_resp_4', text: 'Alveolus', correctOrderIndex: 4, image: "/assets/images/alveoli.png" },
        ],
    },
];