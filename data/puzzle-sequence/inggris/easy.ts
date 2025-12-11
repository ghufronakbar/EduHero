import { SeedPuzzle } from "@/types/seed";

export const puzzleSequenceInggrisEasy: SeedPuzzle[] = [
    // 1. Menyusun Kalimat Dasar (Subject + Verb + Object)
    {
        id: 'ing_easy_seq_001',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'easy',
        topic: 'Sentence Building',
        questionText: 'Arrange the words to form a correct sentence.',
        explanationText: 'Structure: Subject (I) + Verb (eat) + Object (an apple).',
        pieces: [
            { id: 'puz_sent_1', text: 'I', correctOrderIndex: 1, image: "/assets/images/boy_pointing_self.png" },
            { id: 'puz_sent_2', text: 'eat', correctOrderIndex: 2, image: "/assets/images/eat_icon.png" },
            { id: 'puz_sent_3', text: 'an', correctOrderIndex: 3, image: "/assets/images/text_an.png" },
            { id: 'puz_sent_4', text: 'apple', correctOrderIndex: 4, image: "/assets/images/apple.png" },
        ],
    },

    // 2. Urutan Hari (Days of the Week)
    {
        id: 'ing_easy_seq_002',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'easy',
        topic: 'Time',
        questionText: 'Order the days of the week correctly.',
        explanationText: 'Monday -> Tuesday -> Wednesday -> Thursday.',
        pieces: [
            { id: 'puz_day_1', text: 'Monday', correctOrderIndex: 1, image: "/assets/images/calendar_mon.png" },
            { id: 'puz_day_2', text: 'Tuesday', correctOrderIndex: 2, image: "/assets/images/calendar_tue.png" },
            { id: 'puz_day_3', text: 'Wednesday', correctOrderIndex: 3, image: "/assets/images/calendar_wed.png" },
            { id: 'puz_day_4', text: 'Thursday', correctOrderIndex: 4, image: "/assets/images/calendar_thu.png" },
        ],
    },

    // 3. Rutinitas Pagi (Daily Routine)
    {
        id: 'ing_easy_seq_003',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'easy',
        topic: 'Daily Activity',
        questionText: 'What do you do in the morning? Arrange the order.',
        explanationText: 'Bangun tidur (Wake up) -> Mandi (Take a bath) -> Sarapan (Breakfast) -> Sekolah (Go to school).',
        pieces: [
            { id: 'puz_act_1', text: 'Wake up', correctOrderIndex: 1, image: "/assets/images/waking_up.png" },
            { id: 'puz_act_2', text: 'Take a bath', correctOrderIndex: 2, image: "/assets/images/showering.png" },
            { id: 'puz_act_3', text: 'Eat breakfast', correctOrderIndex: 3, image: "/assets/images/eating_cereal.png" },
            { id: 'puz_act_4', text: 'Go to school', correctOrderIndex: 4, image: "/assets/images/school_bus.png" },
        ],
    },

    // 4. Urutan Abjad (Alphabetical Order)
    {
        id: 'ing_easy_seq_004',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'easy',
        topic: 'Vocabulary',
        questionText: 'Arrange these fruits in Alphabetical Order (A-Z).',
        explanationText: 'A (Apple) -> B (Banana) -> C (Cherry) -> D (Durian).',
        pieces: [
            { id: 'puz_abc_1', text: 'Apple', correctOrderIndex: 1, image: "/assets/images/apple.png" },
            { id: 'puz_abc_2', text: 'Banana', correctOrderIndex: 2, image: "/assets/images/banana.png" },
            { id: 'puz_abc_3', text: 'Cherry', correctOrderIndex: 3, image: "/assets/images/cherry.png" },
            { id: 'puz_abc_4', text: 'Durian', correctOrderIndex: 4, image: "/assets/images/durian.png" },
        ],
    },

    // 5. Alur Percakapan Sapaan (Greeting Flow)
    {
        id: 'ing_easy_seq_005',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'easy',
        topic: 'Conversation',
        questionText: 'Arrange the conversation correctly.',
        explanationText: 'Sapaan (Hello) -> Tanya kabar (How are you?) -> Jawab (I am fine) -> Pamit (Goodbye).',
        pieces: [
            { id: 'puz_chat_1', text: 'Hello!', correctOrderIndex: 1, image: "/assets/images/wave_hand.png" },
            { id: 'puz_chat_2', text: 'How are you?', correctOrderIndex: 2, image: "/assets/images/question_mark.png" },
            { id: 'puz_chat_3', text: 'I am fine.', correctOrderIndex: 3, image: "/assets/images/happy_face.png" },
            { id: 'puz_chat_4', text: 'Goodbye.', correctOrderIndex: 4, image: "/assets/images/bye_hand.png" },
        ],
    },
];