import { SeedPuzzle } from "@/types/seed";

export const puzzleSequenceInggrisMedium: SeedPuzzle[] = [
    // 1. Present Continuous Tense (Subjek + to be + V-ing + Ket. Tempat)
    {
        id: 'ing_med_seq_006',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Present Continuous',
        questionText: 'Arrange the sentence to show an action happening now.',
        explanationText: 'Structure: Subject (The boy) + is/am/are + V-ing (playing) + Object + Place.',
        pieces: [
            { id: 'puz_cont_1', text: 'The boy', correctOrderIndex: 1, image: "/assets/images/boy_avatar.png" },
            { id: 'puz_cont_2', text: 'is playing', correctOrderIndex: 2, image: "/assets/images/playing_ball.png" },
            { id: 'puz_cont_3', text: 'football', correctOrderIndex: 3, image: "/assets/images/football.png" },
            { id: 'puz_cont_4', text: 'in the park', correctOrderIndex: 4, image: "/assets/images/park_scene.png" },
        ],
    },

    // 2. Procedure Text (Cara membuat Kopi)
    {
        id: 'ing_med_seq_007',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Procedure Text',
        questionText: 'How do you make a cup of coffee? Order the steps.',
        explanationText: 'Rebus air (Boil) -> Masukkan kopi (Add coffee) -> Tuang air (Pour) -> Aduk (Stir).',
        pieces: [
            { id: 'puz_proc_1', text: 'Boil the water', correctOrderIndex: 1, image: "/assets/images/boiling_water.png" },
            { id: 'puz_proc_2', text: 'Add coffee powder', correctOrderIndex: 2, image: "/assets/images/coffee_spoon.png" },
            { id: 'puz_proc_3', text: 'Pour hot water', correctOrderIndex: 3, image: "/assets/images/pouring_water.png" },
            { id: 'puz_proc_4', text: 'Stir well', correctOrderIndex: 4, image: "/assets/images/stirring_cup.png" },
        ],
    },

    // 3. Interrogative Sentence (Kalimat Tanya Past Tense)
    {
        id: 'ing_med_seq_008',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Past Tense Question',
        questionText: 'Form a correct question asking about the past.',
        explanationText: 'Structure: Wh-word (What) + Aux (did) + Subject (you) + Verb 1 (buy) + Time?',
        pieces: [
            { id: 'puz_ask_1', text: 'What', correctOrderIndex: 1, image: "/assets/images/text_what.png" },
            { id: 'puz_ask_2', text: 'did', correctOrderIndex: 2, image: "/assets/images/text_did.png" },
            { id: 'puz_ask_3', text: 'you', correctOrderIndex: 3, image: "/assets/images/boy_face.png" },
            { id: 'puz_ask_4', text: 'buy yesterday?', correctOrderIndex: 4, image: "/assets/images/shopping_bag.png" },
        ],
    },

    // 4. Noun Phrase (Urutan Adjective: Opinion - Size - Color - Noun)
    {
        id: 'ing_med_seq_009',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Adjective Order',
        questionText: 'Arrange the adjectives correctly to describe the car.',
        explanationText: 'Urutan: Opinion (Beautiful) -> Size (Big) -> Color (Red) -> Noun (Car).',
        pieces: [
            { id: 'puz_adj_1', text: 'A beautiful', correctOrderIndex: 1, image: "/assets/images/star_icon.png" },
            { id: 'puz_adj_2', text: 'big', correctOrderIndex: 2, image: "/assets/images/size_icon.png" },
            { id: 'puz_adj_3', text: 'red', correctOrderIndex: 3, image: "/assets/images/color_red_blob.png" },
            { id: 'puz_adj_4', text: 'car', correctOrderIndex: 4, image: "/assets/images/car_icon.png" },
        ],
    },

    // 5. Comparative Sentence (Membandingkan dua benda)
    {
        id: 'ing_med_seq_010',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Comparison',
        questionText: 'Compare the height of these two animals.',
        explanationText: 'Structure: Noun 1 + to be + Adjective-er + than + Noun 2.',
        pieces: [
            { id: 'puz_comp_1', text: 'A giraffe', correctOrderIndex: 1, image: "/assets/images/giraffe.png" },
            { id: 'puz_comp_2', text: 'is', correctOrderIndex: 2, image: "/assets/images/text_is.png" },
            { id: 'puz_comp_3', text: 'taller', correctOrderIndex: 3, image: "/assets/images/ruler_tall.png" },
            { id: 'puz_comp_4', text: 'than a horse', correctOrderIndex: 4, image: "/assets/images/horse.png" },
        ],
    },
];