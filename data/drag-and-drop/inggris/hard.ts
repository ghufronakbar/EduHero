import { SeedDragAndDrop } from "@/types/seed";

export const dragAndDropInggrisHard: SeedDragAndDrop[] = [
    // 1. Active vs Passive Voice
    {
        id: 'ing_hard_gram_021',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'hard',
        topic: 'Passive Voice',
        questionText: 'Determine whether the sentence is Active or Passive.',
        explanationText: 'Active: Subject does the action. Passive: Subject receives the action (to be + V3).',
        zones: [
            { id: 'zone_active_hard', label: 'Active Voice' },
            { id: 'zone_passive_hard', label: 'Passive Voice' },
        ],
        items: [
            // FIXED IDs: added _hard suffix
            { id: 'item_eat_hard', text: 'I eat the apple', correctZoneId: 'zone_active_hard', image: "/assets/images/eat_apple.png" },
            { id: 'item_kick_hard', text: 'Budi kicks the ball', correctZoneId: 'zone_active_hard', image: "/assets/images/kick_ball.png" },
            { id: 'item_eaten_hard', text: 'The apple is eaten', correctZoneId: 'zone_passive_hard', image: "/assets/images/apple_core.png" },
            { id: 'item_kicked_hard', text: 'The ball is kicked', correctZoneId: 'zone_passive_hard', image: "/assets/images/ball_net.png" },
        ],
    },

    // 2. Simple Past vs Present Perfect Tense
    {
        id: 'ing_hard_gram_022',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'hard',
        topic: 'Tenses Comparison',
        questionText: 'Group the sentences based on their Tense.',
        explanationText: 'Simple Past uses V2 (specific time). Present Perfect uses Have/Has + V3 (result/experience).',
        zones: [
            { id: 'zone_past_hard', label: 'Simple Past' },
            { id: 'zone_perfect_hard', label: 'Present Perfect' },
        ],
        items: [
            { id: 'item_went_hard', text: 'I went to Bali in 2010', correctZoneId: 'zone_past_hard', image: "/assets/images/bali_old.png" },
            { id: 'item_saw_hard', text: 'She saw him yesterday', correctZoneId: 'zone_past_hard', image: "/assets/images/calendar_yesterday.png" },
            { id: 'item_have_gone_hard', text: 'I have gone to Bali', correctZoneId: 'zone_perfect_hard', image: "/assets/images/bali_travel.png" },
            { id: 'item_has_seen_hard', text: 'She has seen him before', correctZoneId: 'zone_perfect_hard', image: "/assets/images/meeting.png" },
        ],
    },

    // 3. Conditional Sentences (If Clause)
    {
        id: 'ing_hard_gram_023',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'hard',
        topic: 'Conditional Type 1',
        questionText: 'Separate the clauses into the "If-Clause" (Condition) and "Main Clause" (Result).',
        explanationText: 'If-Clause uses Present Tense. Main Clause uses "Will" (Future).',
        zones: [
            { id: 'zone_if_hard', label: 'If-Clause (Condition)' },
            { id: 'zone_result_hard', label: 'Main Clause (Result)' },
        ],
        items: [
            { id: 'item_rains_hard', text: 'If it rains', correctZoneId: 'zone_if_hard', image: "/assets/images/rain_cloud.png" },
            { id: 'item_study_hard', text: 'If you study hard', correctZoneId: 'zone_if_hard', image: "/assets/images/study_hard.png" },
            { id: 'item_wet_hard', text: 'I will get wet', correctZoneId: 'zone_result_hard', image: "/assets/images/wet_umbrella.png" },
            { id: 'item_pass_hard', text: 'You will pass the exam', correctZoneId: 'zone_result_hard', image: "/assets/images/exam_a_plus.png" },
        ],
    },

    // 4. Quantifiers (Countable vs Uncountable)
    {
        id: 'ing_hard_vocab_024',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'hard',
        topic: 'Quantifiers',
        questionText: 'Which words are used for Countable and Uncountable nouns?',
        explanationText: 'Many/Few for countable things (Cars). Much/Little for uncountable things (Water).',
        zones: [
            { id: 'zone_count_q_hard', label: 'For Countable Nouns' },
            { id: 'zone_uncount_q_hard', label: 'For Uncountable Nouns' },
        ],
        items: [
            { id: 'item_many_hard', text: 'Many', correctZoneId: 'zone_count_q_hard', image: "/assets/images/many_apples.png" },
            { id: 'item_few_hard', text: 'A few', correctZoneId: 'zone_count_q_hard', image: "/assets/images/few_coins.png" },
            { id: 'item_much_hard', text: 'Much', correctZoneId: 'zone_uncount_q_hard', image: "/assets/images/much_water.png" },
            { id: 'item_little_hard', text: 'A little', correctZoneId: 'zone_uncount_q_hard', image: "/assets/images/little_sugar.png" },
        ],
    },

    // 5. Conjunctions (Contrast vs Addition)
    {
        id: 'ing_hard_gram_025',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'hard',
        topic: 'Conjunctions',
        questionText: 'Categorize the conjunctions based on their function.',
        explanationText: 'Addition adds information (And, Also). Contrast shows difference (But, However).',
        zones: [
            { id: 'zone_add_hard', label: 'Addition (Menambahkan)' },
            { id: 'zone_contrast_hard', label: 'Contrast (Pertentangan)' },
        ],
        items: [
            { id: 'item_moreover_hard', text: 'Moreover', correctZoneId: 'zone_add_hard', image: "/assets/images/plus_sign.png" },
            { id: 'item_further_hard', text: 'Furthermore', correctZoneId: 'zone_add_hard', image: "/assets/images/and_symbol.png" },
            { id: 'item_however_hard', text: 'However', correctZoneId: 'zone_contrast_hard', image: "/assets/images/cross_sign.png" },
            { id: 'item_although_hard', text: 'Although', correctZoneId: 'zone_contrast_hard', image: "/assets/images/contrast_arrows.png" },
        ],
    },

    // 6. Generic Structure: Narrative Text
    {
        id: 'ing_hard_text_026',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'hard',
        topic: 'Narrative Text',
        questionText: 'Match the phrases to the part of the story structure.',
        explanationText: 'Orientation introduces characters (Start). Resolution solves the problem (End).',
        zones: [
            { id: 'zone_orient_hard', label: 'Orientation (Beginning)' },
            { id: 'zone_reso_hard', label: 'Resolution (Ending)' },
        ],
        items: [
            { id: 'item_once_hard', text: 'Once upon a time...', correctZoneId: 'zone_orient_hard', image: "/assets/images/open_book.png" },
            { id: 'item_lived_hard', text: 'There lived a king...', correctZoneId: 'zone_orient_hard', image: "/assets/images/castle.png" },
            { id: 'item_happily_hard', text: 'lived happily ever after.', correctZoneId: 'zone_reso_hard', image: "/assets/images/happy_ending.png" },
            { id: 'item_finally_hard', text: 'Finally, they went home.', correctZoneId: 'zone_reso_hard', image: "/assets/images/sunset.png" },
        ],
    },

    // 7. Comparative vs Superlative (Irregular)
    {
        id: 'ing_hard_gram_027',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'hard',
        topic: 'Degrees of Comparison',
        questionText: 'Classify the words into Comparative (More) or Superlative (Most).',
        explanationText: 'Comparative compares 2 things (Better). Superlative compares many things (Best).',
        zones: [
            { id: 'zone_comp_hard', label: 'Comparative' },
            { id: 'zone_super_hard', label: 'Superlative' },
        ],
        items: [
            { id: 'item_better_hard', text: 'Better', correctZoneId: 'zone_comp_hard', image: "/assets/images/thumbs_up.png" },
            { id: 'item_worse_hard', text: 'Worse', correctZoneId: 'zone_comp_hard', image: "/assets/images/thumbs_down.png" },
            { id: 'item_best_hard', text: 'The Best', correctZoneId: 'zone_super_hard', image: "/assets/images/trophy.png" },
            { id: 'item_worst_hard', text: 'The Worst', correctZoneId: 'zone_super_hard', image: "/assets/images/broken_trophy.png" },
        ],
    },

    // 8. Adverbs: Frequency vs Manner
    {
        id: 'ing_hard_gram_028',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'hard',
        topic: 'Adverbs',
        questionText: 'Are these Adverbs of Frequency (How often) or Manner (How)?',
        explanationText: 'Frequency: Always, Rarely. Manner: Quickly, Slowly (usually ends in -ly).',
        zones: [
            { id: 'zone_freq_hard', label: 'Frequency (How Often)' },
            { id: 'zone_manner_hard', label: 'Manner (How)' },
        ],
        items: [
            { id: 'item_always_hard', text: 'Always', correctZoneId: 'zone_freq_hard', image: "/assets/images/calendar_full.png" },
            { id: 'item_rarely_hard', text: 'Rarely', correctZoneId: 'zone_freq_hard', image: "/assets/images/calendar_empty.png" },
            { id: 'item_fast_hard', text: 'Fast / Quickly', correctZoneId: 'zone_manner_hard', image: "/assets/images/running_cheetah.png" },
            { id: 'item_softly_hard', text: 'Softly', correctZoneId: 'zone_manner_hard', image: "/assets/images/feather.png" },
        ],
    },

    // 9. Reflexive vs Possessive Pronouns
    {
        id: 'ing_hard_gram_029',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'hard',
        topic: 'Complex Pronouns',
        questionText: 'Group the pronouns correctly.',
        explanationText: 'Reflexive refers back to self (Myself). Possessive shows ownership (Mine).',
        zones: [
            { id: 'zone_reflex_hard', label: 'Reflexive (-self)' },
            { id: 'zone_possess_hard', label: 'Possessive (Ownership)' },
        ],
        items: [
            { id: 'item_myself_hard', text: 'Myself', correctZoneId: 'zone_reflex_hard', image: "/assets/images/mirror.png" },
            { id: 'item_themselves_hard', text: 'Themselves', correctZoneId: 'zone_reflex_hard', image: "/assets/images/group_mirror.png" },
            { id: 'item_mine_hard', text: 'Mine', correctZoneId: 'zone_possess_hard', image: "/assets/images/my_bag.png" },
            { id: 'item_yours_hard', text: 'Yours', correctZoneId: 'zone_possess_hard', image: "/assets/images/gift_box.png" },
        ],
    },

    // 10. Modals: Obligation vs Ability
    {
        id: 'ing_hard_gram_030',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'hard',
        topic: 'Modals',
        questionText: 'Match the modal verb to its function.',
        explanationText: 'Must/Should is for Obligation (Rules). Can/Could is for Ability.',
        zones: [
            { id: 'zone_obli_hard', label: 'Obligation (Harus)' },
            { id: 'zone_abil_hard', label: 'Ability (Bisa)' },
        ],
        items: [
            { id: 'item_must_hard', text: 'Must', correctZoneId: 'zone_obli_hard', image: "/assets/images/traffic_light.png" },
            { id: 'item_should_hard', text: 'Should', correctZoneId: 'zone_obli_hard', image: "/assets/images/advice.png" },
            { id: 'item_can_hard', text: 'Can', correctZoneId: 'zone_abil_hard', image: "/assets/images/lifting_weights.png" },
            { id: 'item_could_hard', text: 'Could', correctZoneId: 'zone_abil_hard', image: "/assets/images/swimming.png" },
        ],
    },
];