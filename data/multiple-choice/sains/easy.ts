import { SeedMultipleChoice } from "@/types/seed";

export const multipleChoiceSainsEasy: SeedMultipleChoice[] = [
    // 1. Biologi - Fotosintesis (Dasar)
    {
        id: 'bio_easy_photo_001',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'easy',
        topic: 'Fotosintesis',
        questionText: 'Gas apakah yang dihasilkan oleh tumbuhan saat melakukan fotosintesis?',
        explanationText: 'Tumbuhan menyerap CO2 dan melepaskan Oksigen (O2) yang kita hirup.',
        options: [
            { id: 'opt_sci_001_a', text: 'Karbon Dioksida', isCorrect: false },
            { id: 'opt_sci_001_b', text: 'Oksigen', isCorrect: true },
            { id: 'opt_sci_001_c', text: 'Nitrogen', isCorrect: false },
            { id: 'opt_sci_001_d', text: 'Hidrogen', isCorrect: false },
        ],
    },

    // 2. Fisika - Besaran dan Satuan
    {
        id: 'fis_easy_satuan_002',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'easy',
        topic: 'Pengukuran',
        questionText: 'Satuan Internasional (SI) untuk besaran Waktu adalah...',
        explanationText: 'Satuan standar waktu adalah Sekon (detik). Jam dan Menit bukan satuan SI.',
        options: [
            { id: 'opt_sci_002_a', text: 'Jam', isCorrect: false },
            { id: 'opt_sci_002_b', text: 'Menit', isCorrect: false },
            { id: 'opt_sci_002_c', text: 'Sekon (Detik)', isCorrect: true },
            { id: 'opt_sci_002_d', text: 'Hari', isCorrect: false },
        ],
    },

    // 3. Biologi - Interaksi Makhluk Hidup
    {
        id: 'bio_easy_eco_003',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'easy',
        topic: 'Ekosistem',
        questionText: 'Hewan yang memakan daging saja disebut...',
        explanationText: 'Karnivora = makan daging. Herbivora = makan tumbuhan. Omnivora = pemakan segala.',
        options: [
            { id: 'opt_sci_003_a', text: 'Herbivora', isCorrect: false },
            { id: 'opt_sci_003_b', text: 'Karnivora', isCorrect: true },
            { id: 'opt_sci_003_c', text: 'Omnivora', isCorrect: false },
            { id: 'opt_sci_003_d', text: 'Insectivora', isCorrect: false },
        ],
    },

    // 4. Fisika - Tata Surya
    {
        id: 'fis_easy_astro_004',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'easy',
        topic: 'Tata Surya',
        questionText: 'Planet manakah yang letaknya paling dekat dengan Matahari?',
        explanationText: 'Urutan planet: Merkurius, Venus, Bumi, Mars...',
        options: [
            { id: 'opt_sci_004_a', text: 'Venus', isCorrect: false },
            { id: 'opt_sci_004_b', text: 'Bumi', isCorrect: false },
            { id: 'opt_sci_004_c', text: 'Mars', isCorrect: false },
            { id: 'opt_sci_004_d', text: 'Merkurius', isCorrect: true },
        ],
    },

    // 5. Kimia - Asam Basa
    {
        id: 'kim_easy_base_005',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'easy',
        topic: 'Asam dan Basa',
        questionText: 'Kertas lakmus biru akan berubah warna menjadi merah jika dicelupkan ke dalam larutan yang bersifat...',
        explanationText: 'Asam mengubah lakmus biru jadi merah. Basa mengubah lakmus merah jadi biru.',
        options: [
            { id: 'opt_sci_005_a', text: 'Asam', isCorrect: true },
            { id: 'opt_sci_005_b', text: 'Basa', isCorrect: false },
            { id: 'opt_sci_005_c', text: 'Netral', isCorrect: false },
            { id: 'opt_sci_005_d', text: 'Garam', isCorrect: false },
        ],
    },
];