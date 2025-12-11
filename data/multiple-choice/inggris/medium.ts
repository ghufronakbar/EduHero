import { SeedMultipleChoice } from "@/types/seed";

export const multipleChoiceInggrisMedium: SeedMultipleChoice[] = [
    // 1. Present Continuous Tense (Sedang terjadi)
    {
        id: 'ing_med_gram_001',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Tenses',
        questionText: 'Listen! The bird ... beautifully in the garden.',
        explanationText: 'Kata "Listen!" menunjukkan kejadian sedang berlangsung saat ini. Gunakan Present Continuous (is/am/are + V-ing).',
        options: [
            { id: 'opt_ing_med_001_a', text: 'sings', isCorrect: false },
            { id: 'opt_ing_med_001_b', text: 'is singing', isCorrect: true },
            { id: 'opt_ing_med_001_c', text: 'sing', isCorrect: false },
            { id: 'opt_ing_med_001_d', text: 'sang', isCorrect: false },
        ],
    },

    // 2. Degrees of Comparison (Comparative)
    {
        id: 'ing_med_gram_002',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Comparison',
        questionText: 'My brother is ... than me.',
        explanationText: 'Membandingkan 2 orang menggunakan Comparative. Untuk kata sifat pendek (tall), tambahkan akhiran "-er".',
        options: [
            { id: 'opt_ing_med_002_a', text: 'tall', isCorrect: false },
            { id: 'opt_ing_med_002_b', text: 'taller', isCorrect: true },
            { id: 'opt_ing_med_002_c', text: 'tallest', isCorrect: false },
            { id: 'opt_ing_med_002_d', text: 'more tall', isCorrect: false },
        ],
    },

    // 3. Prepositions of Time (In, On, At)
    {
        id: 'ing_med_gram_003',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Prepositions',
        questionText: 'We usually go on holiday ... December.',
        explanationText: 'Untuk nama bulan (December), gunakan preposisi "in". "On" untuk hari/tanggal, "At" untuk jam.',
        options: [
            { id: 'opt_ing_med_003_a', text: 'at', isCorrect: false },
            { id: 'opt_ing_med_003_b', text: 'on', isCorrect: false },
            { id: 'opt_ing_med_003_c', text: 'in', isCorrect: true },
            { id: 'opt_ing_med_003_d', text: 'to', isCorrect: false },
        ],
    },

    // 4. Simple Past Tense (Irregular Verb)
    {
        id: 'ing_med_gram_004',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Past Tense',
        questionText: 'She ... a new bike yesterday.',
        explanationText: 'Kata "yesterday" menandakan masa lampau. Gunakan Verb 2. Bentuk lampau dari "buy" adalah "bought".',
        options: [
            { id: 'opt_ing_med_004_a', text: 'buy', isCorrect: false },
            { id: 'opt_ing_med_004_b', text: 'buys', isCorrect: false },
            { id: 'opt_ing_med_004_c', text: 'bought', isCorrect: true },
            { id: 'opt_ing_med_004_d', text: 'buying', isCorrect: false },
        ],
    },

    // 5. Modals (Polite Request)
    {
        id: 'ing_med_gram_005',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Modals',
        questionText: '... I borrow your dictionary, please?',
        explanationText: 'Untuk meminta izin dengan sopan, gunakan Modal "May".',
        options: [
            { id: 'opt_ing_med_005_a', text: 'Do', isCorrect: false },
            { id: 'opt_ing_med_005_b', text: 'Am', isCorrect: false },
            { id: 'opt_ing_med_005_c', text: 'Have', isCorrect: false },
            { id: 'opt_ing_med_005_d', text: 'May', isCorrect: true },
        ],
    },
];