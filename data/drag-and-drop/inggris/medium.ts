import { SeedDragAndDrop } from "@/types/seed";

export const dragAndDropInggrisMedium: SeedDragAndDrop[] = [
    // 1. Regular vs Irregular Verbs (Past Tense)
    {
        id: 'ing_med_gram_011',
        type: 'drag_and_drop',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Past Tense Verbs',
        questionText: 'Categorize the Past Tense verbs into Regular or Irregular.',
        explanationText: 'Regular verbs end in -ed (Played). Irregular verbs change completely (Went, Ate).',
        zones: [
            { id: 'zone_regular', label: 'Regular (-ed)' },
            { id: 'zone_irregular', label: 'Irregular (Changed)' },
        ],
        items: [
            { id: 'item_played_med', text: 'Played', correctZoneId: 'zone_regular', image: "/assets/images/playing.png" }, // FIXED
            { id: 'item_cooked_med', text: 'Cooked', correctZoneId: 'zone_regular', image: "/assets/images/cooking.png" },
            { id: 'item_went_med', text: 'Went (Go)', correctZoneId: 'zone_irregular', image: "/assets/images/walking.png" }, // FIXED
            { id: 'item_ate_med', text: 'Ate (Eat)', correctZoneId: 'zone_irregular', image: "/assets/images/eating.png" },
        ],
    },

    // 2. Prepositions of Place (In vs On)
    {
        id: 'ing_med_gram_012',
        type: 'drag_and_drop',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Prepositions',
        questionText: 'Match the object position with the correct preposition.',
        explanationText: '"On" is for surfaces. "In" is for enclosed spaces.',
        zones: [
            { id: 'zone_on', label: 'ON the ...' },
            { id: 'zone_in', label: 'IN the ...' },
        ],
        items: [
            { id: 'item_table_prep', text: 'Book ... table', correctZoneId: 'zone_on', image: "/assets/images/book_on_table.png" }, // FIXED: beda dgn easy
            { id: 'item_wall_prep', text: 'Picture ... wall', correctZoneId: 'zone_on', image: "/assets/images/picture_wall.png" },
            { id: 'item_box_prep', text: 'Cat ... box', correctZoneId: 'zone_in', image: "/assets/images/cat_in_box.png" }, // FIXED: beda dgn easy
            { id: 'item_room_prep', text: 'Boy ... room', correctZoneId: 'zone_in', image: "/assets/images/boy_in_room.png" },
        ],
    },

    // 3. Countable vs Uncountable Nouns
    {
        id: 'ing_med_gram_013',
        type: 'drag_and_drop',
        category: 'inggris',
        difficulty: 'medium',
        topic: 'Nouns',
        questionText: 'Separate the items into Countable (Can be counted) and Uncountable.',
        explanationText: 'You can count Apples (1, 2, 3). You cannot count Water or Sugar directly.',
        zones: [
            { id: 'zone_count', label: 'Countable' },
            { id: 'zone_uncount', label: 'Uncountable' },
        ],
        items: [
            { id: 'item_pen_count', text: 'Pen', correctZoneId: 'zone_count', image: "/assets/images/pen.png" },
            { id: 'item_chair_count', text: 'Chair', correctZoneId: 'zone_count', image: "/assets/images/chair.png" }, // FIXED: beda dgn easy
            { id: 'item_water_uncount', text: 'Water', correctZoneId: 'zone_uncount', image: "/assets/images/water_glass.png" }, // FIXED
            { id: 'item_sugar_uncount', text: 'Sugar', correctZoneId: 'zone_uncount', image: "/assets/images/sugar_spoon.png" },
        ],
    },

    // 4. Jobs and Workplaces
    {
        id: 'ing_med_vocab_014',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'medium',
        topic: 'Professions',
        questionText: 'Where do these people work?',
        explanationText: 'Doctors work in Hospitals. Teachers work in Schools.',
        zones: [
            { id: 'zone_hospital', label: 'Hospital' },
            { id: 'zone_school', label: 'School' },
        ],
        items: [
            { id: 'item_doctor', text: 'Doctor', correctZoneId: 'zone_hospital', image: "/assets/images/doctor.png" },
            { id: 'item_nurse', text: 'Nurse', correctZoneId: 'zone_hospital', image: "/assets/images/nurse.png" },
            { id: 'item_teacher', text: 'Teacher', correctZoneId: 'zone_school', image: "/assets/images/teacher.png" },
            { id: 'item_student', text: 'Student', correctZoneId: 'zone_school', image: "/assets/images/student.png" },
        ],
    },

    // 5. Adjectives: Physical Appearance vs Personality
    {
        id: 'ing_med_vocab_015',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'medium',
        topic: 'Describing People',
        questionText: 'Are these words describing Physical Appearance or Personality?',
        explanationText: 'Tall and Fat describe the body (Physical). Kind and Honest describe the character (Personality).',
        zones: [
            { id: 'zone_physic', label: 'Physical Appearance' },
            { id: 'zone_person', label: 'Personality (Character)' },
        ],
        items: [
            { id: 'item_tall', text: 'Tall', correctZoneId: 'zone_physic', image: "/assets/images/tall_man.png" },
            { id: 'item_curly', text: 'Curly Hair', correctZoneId: 'zone_physic', image: "/assets/images/curly_hair.png" },
            { id: 'item_kind', text: 'Kind', correctZoneId: 'zone_person', image: "/assets/images/kind_heart.png" },
            { id: 'item_lazy', text: 'Lazy', correctZoneId: 'zone_person', image: "/assets/images/lazy_sleeping.png" },
        ],
    },

    // 6. Time Signals (Past vs Future)
    {
        id: 'ing_med_gram_016',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'medium',
        topic: 'Tenses',
        questionText: 'Group the time signals for Past Tense and Future Tense.',
        explanationText: 'Yesterday is Past. Tomorrow is Future.',
        zones: [
            { id: 'zone_past', label: 'Past (Already happened)' },
            { id: 'zone_future', label: 'Future (Will happen)' },
        ],
        items: [
            { id: 'item_yest', text: 'Yesterday', correctZoneId: 'zone_past', image: "/assets/images/calendar_past.png" },
            { id: 'item_last', text: 'Last Week', correctZoneId: 'zone_past', image: "/assets/images/calendar_last_week.png" },
            { id: 'item_tmr', text: 'Tomorrow', correctZoneId: 'zone_future', image: "/assets/images/calendar_tmr.png" },
            { id: 'item_next', text: 'Next Month', correctZoneId: 'zone_future', image: "/assets/images/calendar_next.png" },
        ],
    },

    // 7. Wh-Questions (Who vs Where)
    {
        id: 'ing_med_gram_017',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'medium',
        topic: 'Question Words',
        questionText: 'Choose the correct question word for the answer provided.',
        explanationText: '"Who" asks about a person. "Where" asks about a place.',
        zones: [
            { id: 'zone_who', label: 'Who (Person)' },
            { id: 'zone_where', label: 'Where (Place)' },
        ],
        items: [
            { id: 'item_mom_ans', text: 'Answer: "My Mother"', correctZoneId: 'zone_who', image: "/assets/images/mother.png" }, // FIXED
            { id: 'item_police_ans', text: 'Answer: "The Police Officer"', correctZoneId: 'zone_who', image: "/assets/images/policeman.png" },
            { id: 'item_park_ans', text: 'Answer: "In the Park"', correctZoneId: 'zone_where', image: "/assets/images/park_bench.png" },
            { id: 'item_home_ans', text: 'Answer: "At Home"', correctZoneId: 'zone_where', image: "/assets/images/house.png" },
        ],
    },

    // 8. Positive vs Negative Adjectives
    {
        id: 'ing_med_vocab_018',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'medium',
        topic: 'Adjectives',
        questionText: 'Sort these feelings/traits into Positive and Negative.',
        explanationText: 'Happy and Diligent are good (Positive). Sad and Rude are bad (Negative).',
        zones: [
            { id: 'zone_pos', label: 'Positive :)' },
            { id: 'zone_neg', label: 'Negative :(' },
        ],
        items: [
            { id: 'item_happy', text: 'Happy', correctZoneId: 'zone_pos', image: "/assets/images/smile.png" },
            { id: 'item_diligent', text: 'Diligent', correctZoneId: 'zone_pos', image: "/assets/images/studying.png" },
            { id: 'item_sad', text: 'Sad', correctZoneId: 'zone_neg', image: "/assets/images/crying.png" },
            { id: 'item_angry', text: 'Angry', correctZoneId: 'zone_neg', image: "/assets/images/angry_face.png" },
        ],
    },

    // 9. Subject vs Object Pronouns
    {
        id: 'ing_med_gram_019',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'medium',
        topic: 'Pronouns',
        questionText: 'Identify if the word is a Subject (Doer) or Object (Receiver).',
        explanationText: 'Subjects (I, We) do the action. Objects (Me, Us) receive the action.',
        zones: [
            { id: 'zone_sub', label: 'Subject Pronoun' },
            { id: 'zone_obj', label: 'Object Pronoun' },
        ],
        items: [
            { id: 'item_we', text: 'We', correctZoneId: 'zone_sub', image: "/assets/images/group_people.png" },
            { id: 'item_she', text: 'She', correctZoneId: 'zone_sub', image: "/assets/images/girl_pointing.png" },
            { id: 'item_us', text: 'Us', correctZoneId: 'zone_obj', image: "/assets/images/group_pointing_self.png" },
            { id: 'item_him', text: 'Him', correctZoneId: 'zone_obj', image: "/assets/images/boy_pointing_him.png" },
        ],
    },

    // 10. Public Signs (Do vs Don't)
    {
        id: 'ing_med_func_020',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'medium',
        topic: 'Notices',
        questionText: 'Categorize these signs into Prohibition (Don\'t) or Command (Do).',
        explanationText: '"No Smoking" is a prohibition. "Keep Silent" is a command.',
        zones: [
            { id: 'zone_prohibit', label: 'Prohibition (Don\'t)' },
            { id: 'zone_command', label: 'Command (Please Do)' },
        ],
        items: [
            { id: 'item_nosmoke', text: 'No Smoking', correctZoneId: 'zone_prohibit', image: "/assets/images/no_smoking.png" },
            { id: 'item_nopark', text: 'No Parking', correctZoneId: 'zone_prohibit', image: "/assets/images/no_parking.png" },
            { id: 'item_litter', text: 'Put Trash Here', correctZoneId: 'zone_command', image: "/assets/images/trash_bin.png" },
            { id: 'item_quiet', text: 'Please Be Quiet', correctZoneId: 'zone_command', image: "/assets/images/quiet_sign.png" },
        ],
    },
];