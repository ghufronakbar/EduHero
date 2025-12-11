import { SeedMultipleChoice } from "@/types/seed";

export const multipleChoiceSainsMedium: SeedMultipleChoice[] = [
    // 1. Fisika - Hukum Newton II (Hitungan Sederhana)
    {
        id: 'fis_med_newton_001',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'medium',
        topic: 'Gerak dan Gaya',
        questionText: 'Sebuah benda bermassa 2 kg didorong dengan gaya sehingga mengalami percepatan 5 m/s². Berapakah besar gaya tersebut?',
        explanationText: 'Rumus Hukum II Newton: F = m x a. Maka F = 2 kg x 5 m/s² = 10 Newton.',
        options: [
            { id: 'opt_sci_med_001_a', text: '2,5 Newton', isCorrect: false },
            { id: 'opt_sci_med_001_b', text: '7 Newton', isCorrect: false },
            { id: 'opt_sci_med_001_c', text: '10 Newton', isCorrect: true },
            { id: 'opt_sci_med_001_d', text: '50 Newton', isCorrect: false },
        ],
    },

    // 2. Biologi - Sistem Pencernaan (Enzim)
    {
        id: 'bio_med_digest_002',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'medium',
        topic: 'Sistem Pencernaan',
        questionText: 'Enzim yang dihasilkan oleh lambung dan berfungsi mengubah protein menjadi pepton adalah...',
        explanationText: 'Lambung menghasilkan Pepsin (Protein -> Pepton) dan Renin (Mengendapkan kasein susu).',
        options: [
            { id: 'opt_sci_med_002_a', text: 'Amilase', isCorrect: false },
            { id: 'opt_sci_med_002_b', text: 'Pepsin', isCorrect: true },
            { id: 'opt_sci_med_002_c', text: 'Lipase', isCorrect: false },
            { id: 'opt_sci_med_002_d', text: 'Tripsin', isCorrect: false },
        ],
    },

    // 3. Kimia - Pemisahan Campuran
    {
        id: 'kim_med_mix_003',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'medium',
        topic: 'Zat dan Perubahannya',
        questionText: 'Metode yang paling tepat untuk memisahkan garam dari air laut adalah...',
        explanationText: 'Evaporasi (penguapan) akan menguapkan air dan menyisakan kristal garam.',
        options: [
            { id: 'opt_sci_med_003_a', text: 'Filtrasi (Penyaringan)', isCorrect: false },
            { id: 'opt_sci_med_003_b', text: 'Destilasi (Penyulingan)', isCorrect: false },
            { id: 'opt_sci_med_003_c', text: 'Evaporasi (Penguapan)', isCorrect: true },
            { id: 'opt_sci_med_003_d', text: 'Kromatografi', isCorrect: false },
        ],
    },

    // 4. Fisika - Energi (Perubahan Energi)
    {
        id: 'fis_med_energy_004',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'medium',
        topic: 'Energi',
        questionText: 'Pada saat buah kelapa jatuh bebas dari pohonnya, terjadi perubahan energi...',
        explanationText: 'Saat di atas, Potensial maksimum. Saat jatuh, Potensial berkurang dan berubah menjadi Kinetik (Gerak).',
        options: [
            { id: 'opt_sci_med_004_a', text: 'Kinetik menjadi Potensial', isCorrect: false },
            { id: 'opt_sci_med_004_b', text: 'Potensial menjadi Kinetik', isCorrect: true },
            { id: 'opt_sci_med_004_c', text: 'Kimia menjadi Gerak', isCorrect: false },
            { id: 'opt_sci_med_004_d', text: 'Listrik menjadi Panas', isCorrect: false },
        ],
    },

    // 5. Biologi - Jaringan Tumbuhan
    {
        id: 'bio_med_plant_005',
        type: 'multiple_choice',
        category: 'sains',
        difficulty: 'medium',
        topic: 'Struktur Tumbuhan',
        questionText: 'Bagian daun yang paling banyak mengandung klorofil dan menjadi tempat utama fotosintesis adalah...',
        explanationText: 'Jaringan Palisade (Tiang) mengandung paling banyak kloroplas dibandingkan jaringan spons.',
        options: [
            { id: 'opt_sci_med_005_a', text: 'Epidermis Atas', isCorrect: false },
            { id: 'opt_sci_med_005_b', text: 'Jaringan Palisade', isCorrect: true },
            { id: 'opt_sci_med_005_c', text: 'Jaringan Spons', isCorrect: false },
            { id: 'opt_sci_med_005_d', text: 'Xilem', isCorrect: false },
        ],
    },
];