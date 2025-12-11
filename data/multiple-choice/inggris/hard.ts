import { SeedMultipleChoice } from "@/types/seed";

export const multipleChoiceInggrisHard: SeedMultipleChoice[] = [
    // 1. Passive Voice (Present Perfect)
    {
        id: 'ing_hard_gram_001',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'hard',
        topic: 'Passive Voice',
        questionText: 'Change into Passive Voice: "Someone has stolen my bike."',
        explanationText: 'Present Perfect (has stolen) berubah menjadi Passive: has/have + been + V3. Jadi "My bike has been stolen".',
        options: [
            { id: 'opt_ing_hard_001_a', text: 'My bike was stolen', isCorrect: false },
            { id: 'opt_ing_hard_001_b', text: 'My bike is being stolen', isCorrect: false },
            { id: 'opt_ing_hard_001_c', text: 'My bike has been stolen', isCorrect: true },
            { id: 'opt_ing_hard_001_d', text: 'My bike had stolen', isCorrect: false },
        ],
    },

    // 2. Conditional Sentence Type 2 (Pengandaian)
    {
        id: 'ing_hard_gram_002',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'hard',
        topic: 'Conditional Sentences',
        questionText: 'If I ... a bird, I would fly around the world.',
        explanationText: 'Conditional Type 2 (fakta berlawanan saat ini) menggunakan "Were" untuk semua subjek (termasuk I, He, She).',
        options: [
            { id: 'opt_ing_hard_002_a', text: 'was', isCorrect: false },
            { id: 'opt_ing_hard_002_b', text: 'am', isCorrect: false },
            { id: 'opt_ing_hard_002_c', text: 'were', isCorrect: true },
            { id: 'opt_ing_hard_002_d', text: 'have been', isCorrect: false },
        ],
    },

    // 3. Present Perfect Tense (Duration)
    {
        id: 'ing_hard_gram_003',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'hard',
        topic: 'Tenses',
        questionText: 'We ... in this house for ten years.',
        explanationText: 'Kejadian yang dimulai di masa lalu dan masih berlangsung sampai sekarang menggunakan Present Perfect (have lived).',
        options: [
            { id: 'opt_ing_hard_003_a', text: 'live', isCorrect: false },
            { id: 'opt_ing_hard_003_b', text: 'lived', isCorrect: false },
            { id: 'opt_ing_hard_003_c', text: 'are living', isCorrect: false },
            { id: 'opt_ing_hard_003_d', text: 'have lived', isCorrect: true },
        ],
    },

    // 4. Indirect Speech (Kalimat Tidak Langsung)
    {
        id: 'ing_hard_gram_004',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'hard',
        topic: 'Reported Speech',
        questionText: 'He said, "I am busy." -> He said that he ... busy.',
        explanationText: 'Dalam Indirect Speech, tenses mundur satu langkah. Present (am) berubah menjadi Past (was).',
        options: [
            { id: 'opt_ing_hard_004_a', text: 'is', isCorrect: false },
            { id: 'opt_ing_hard_004_b', text: 'was', isCorrect: true },
            { id: 'opt_ing_hard_004_c', text: 'has been', isCorrect: false },
            { id: 'opt_ing_hard_004_d', text: 'had been', isCorrect: false },
        ],
    },

    // 5. Conjunctions (Contrast)
    {
        id: 'ing_hard_gram_005',
        type: 'multiple_choice',
        category: 'inggris',
        difficulty: 'hard',
        topic: 'Conjunctions',
        questionText: '... it was raining heavily, they went out for a picnic.',
        explanationText: 'Gunakan "Although" (Meskipun) untuk menggabungkan dua kalimat yang bertentangan (Hujan vs Piknik).',
        options: [
            { id: 'opt_ing_hard_005_a', text: 'Because', isCorrect: false },
            { id: 'opt_ing_hard_005_b', text: 'So', isCorrect: false },
            { id: 'opt_ing_hard_005_c', text: 'Although', isCorrect: true },
            { id: 'opt_ing_hard_005_d', text: 'Since', isCorrect: false },
        ],
    },
];