import { SeedPuzzle } from "@/types/seed";

export const puzzleSequenceInggrisHard: SeedPuzzle[] = [
    // 1. Passive Voice Structure (Present Perfect)
    {
        id: 'ing_hard_seq_011',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'hard',
        topic: 'Passive Voice',
        questionText: 'Arrange the words to form a Passive Voice sentence.',
        explanationText: 'Structure: Object (The project) + has been + V3 (finished) + by Agent (the students).',
        pieces: [
            { id: 'puz_pass_1', text: 'The project', correctOrderIndex: 1, image: "/assets/images/project_paper.png" },
            { id: 'puz_pass_2', text: 'has been', correctOrderIndex: 2, image: "/assets/images/text_has_been.png" },
            { id: 'puz_pass_3', text: 'finished', correctOrderIndex: 3, image: "/assets/images/check_mark.png" },
            { id: 'puz_pass_4', text: 'by the students', correctOrderIndex: 4, image: "/assets/images/students_group.png" },
        ],
    },

    // 2. Conditional Sentence Type 2 (Hypothetical)
    {
        id: 'ing_hard_seq_012',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'hard',
        topic: 'Conditional Sentences',
        questionText: 'Form a conditional sentence (Type 2).',
        explanationText: 'If + Past Simple (were rich) + , + Subject + Would + V1 (travel).',
        pieces: [
            { id: 'puz_cond_1', text: 'If I were rich', correctOrderIndex: 1, image: "/assets/images/money_bag.png" },
            { id: 'puz_cond_2', text: 'I would', correctOrderIndex: 2, image: "/assets/images/thought_bubble.png" },
            { id: 'puz_cond_3', text: 'travel', correctOrderIndex: 3, image: "/assets/images/airplane.png" },
            { id: 'puz_cond_4', text: 'around the world', correctOrderIndex: 4, image: "/assets/images/earth_globe.png" },
        ],
    },

    // 3. Narrative Text Plot (Cinderella Story)
    {
        id: 'ing_hard_seq_013',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'hard',
        topic: 'Reading Comprehension',
        questionText: 'Order the events of the story correctly.',
        explanationText: 'Logic: Invitation arrives -> Fairy helps -> Dances with Prince -> Runs at midnight.',
        pieces: [
            { id: 'puz_story_1', text: 'Received an invitation', correctOrderIndex: 1, image: "/assets/images/invitation_card.png" },
            { id: 'puz_story_2', text: 'Fairy godmother came', correctOrderIndex: 2, image: "/assets/images/fairy_wand.png" },
            { id: 'puz_story_3', text: 'Danced with the Prince', correctOrderIndex: 3, image: "/assets/images/dancing_couple.png" },
            { id: 'puz_story_4', text: 'Ran away at midnight', correctOrderIndex: 4, image: "/assets/images/clock_midnight.png" },
        ],
    },

    // 4. Relative Clause (Complex Sentence)
    {
        id: 'ing_hard_seq_014',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'hard',
        topic: 'Complex Sentences',
        questionText: 'Combine the phrases to describe the person.',
        explanationText: 'Structure: Noun (The man) + Who (Relative Pronoun) + Verb Phrase + Main Verb.',
        pieces: [
            { id: 'puz_rel_1', text: 'The man', correctOrderIndex: 1, image: "/assets/images/man_avatar.png" },
            { id: 'puz_rel_2', text: 'who is wearing', correctOrderIndex: 2, image: "/assets/images/tshirt_icon.png" },
            { id: 'puz_rel_3', text: 'a black hat', correctOrderIndex: 3, image: "/assets/images/black_hat.png" },
            { id: 'puz_rel_4', text: 'is my uncle', correctOrderIndex: 4, image: "/assets/images/uncle_face.png" },
        ],
    },

    // 5. Present Perfect Continuous (Duration)
    {
        id: 'ing_hard_seq_015',
        type: 'puzzle_sequence',
        category: 'inggris',
        difficulty: 'hard',
        topic: 'Tenses',
        questionText: 'Arrange the sentence to show an action started in the past and continuing now.',
        explanationText: 'Structure: Subject + has/have + been + V-ing + Time Signal.',
        pieces: [
            { id: 'puz_perf_1', text: 'She', correctOrderIndex: 1, image: "/assets/images/girl_avatar.png" },
            { id: 'puz_perf_2', text: 'has been', correctOrderIndex: 2, image: "/assets/images/clock_waiting.png" },
            { id: 'puz_perf_3', text: 'waiting here', correctOrderIndex: 3, image: "/assets/images/waiting_pose.png" },
            { id: 'puz_perf_4', text: 'for two hours', correctOrderIndex: 4, image: "/assets/images/2_hours.png" },
        ],
    },
];