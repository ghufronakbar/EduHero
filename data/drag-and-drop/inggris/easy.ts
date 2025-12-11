import { SeedDragAndDrop } from "@/types/seed";

export const dragAndDropInggrisEasy: SeedDragAndDrop[] = [
    // 1. Fruits vs Vegetables (Vocabulary)
    {
        id: 'ing_easy_vocab_001',
        type: 'drag_and_drop',
        category: 'inggris',
        // Default level
        difficulty: 'easy',
        topic: 'Vocabulary - Food',
        questionText: 'Categorize these items into Fruits or Vegetables.',
        explanationText: 'Apple and Banana are fruits. Carrot and Spinach are vegetables.',
        zones: [
            { id: 'zone_fruit', label: 'Fruits (Buah)' },
            { id: 'zone_veg', label: 'Vegetables (Sayur)' },
        ],
        items: [
            { id: 'item_apple', text: 'Apple', correctZoneId: 'zone_fruit', image: "/assets/images/apple.png" },
            { id: 'item_carrot', text: 'Carrot', correctZoneId: 'zone_veg', image: "/assets/images/carrot.png" },
            { id: 'item_banana', text: 'Banana', correctZoneId: 'zone_fruit', image: "/assets/images/banana.png" },
            { id: 'item_spinach', text: 'Spinach', correctZoneId: 'zone_veg', image: "/assets/images/spinach.png" },
        ],
    },

    // 2. Pronouns: He vs She (Grammar)
    {
        id: 'ing_easy_gram_002',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'easy',
        topic: 'Pronouns',
        questionText: 'Group the family members based on their pronoun (He or She).',
        explanationText: 'He is for male (Boy/Man). She is for female (Girl/Woman).',
        zones: [
            { id: 'zone_he', label: 'He (Male)' },
            { id: 'zone_she', label: 'She (Female)' },
        ],
        items: [
            { id: 'item_father', text: 'Father', correctZoneId: 'zone_he', image: "/assets/images/father.png" },
            { id: 'item_sister', text: 'Sister', correctZoneId: 'zone_she', image: "/assets/images/sister.png" },
            { id: 'item_uncle', text: 'Uncle', correctZoneId: 'zone_he', image: "/assets/images/uncle.png" },
            { id: 'item_grandmother', text: 'Grandmother', correctZoneId: 'zone_she', image: "/assets/images/grandmother.png" },
        ],
    },

    // 3. Articles: A vs An (Grammar)
    {
        id: 'ing_easy_gram_003',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'easy',
        topic: 'Articles',
        questionText: 'Choose the correct article for these words.',
        explanationText: '"An" is used before vowel sounds (a, i, u, e, o). "A" is used before consonants.',
        zones: [
            { id: 'zone_a', label: 'A ...' },
            { id: 'zone_an', label: 'An ...' },
        ],
        items: [
            { id: 'item_book', text: 'Book', correctZoneId: 'zone_a', image: "/assets/images/book.png" },
            { id: 'item_umbrella', text: 'Umbrella', correctZoneId: 'zone_an', image: "/assets/images/umbrella.png" },
            { id: 'item_car', text: 'Car', correctZoneId: 'zone_a', image: "/assets/images/car.png" },
            { id: 'item_orange', text: 'Orange', correctZoneId: 'zone_an', image: "/assets/images/orange.png" },
        ],
    },

    // 4. Singular vs Plural (Grammar)
    {
        id: 'ing_easy_gram_004',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'easy',
        topic: 'Singular and Plural',
        questionText: 'Separate the words into Singular (One) and Plural (Many).',
        explanationText: 'Singular is for one object. Plural usually ends with -s or -es.',
        zones: [
            { id: 'zone_single', label: 'Singular (One)' },
            { id: 'zone_plural', label: 'Plural (Many)' },
        ],
        items: [
            { id: 'item_cat', text: 'Cat', correctZoneId: 'zone_single', image: "/assets/images/cat.png" },
            { id: 'item_dogs', text: 'Dogs', correctZoneId: 'zone_plural', image: "/assets/images/dogs.png" },
            { id: 'item_box', text: 'Box', correctZoneId: 'zone_single', image: "/assets/images/box.png" },
            { id: 'item_books', text: 'Books', correctZoneId: 'zone_plural', image: "/assets/images/books_stack.png" },
        ],
    },

    // 5. Rooms in the House (Vocabulary)
    {
        id: 'ing_easy_vocab_005',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'easy',
        topic: 'Daily Life',
        questionText: 'Put these items in the correct room.',
        explanationText: 'Stove goes in the Kitchen. Bed goes in the Bedroom.',
        zones: [
            { id: 'zone_kitchen', label: 'Kitchen' },
            { id: 'zone_bedroom', label: 'Bedroom' },
        ],
        items: [
            { id: 'item_stove', text: 'Stove', correctZoneId: 'zone_kitchen', image: "/assets/images/stove.png" },
            { id: 'item_bed', text: 'Bed', correctZoneId: 'zone_bedroom', image: "/assets/images/bed.png" },
            { id: 'item_pan', text: 'Frying Pan', correctZoneId: 'zone_kitchen', image: "/assets/images/pan.png" },
            { id: 'item_pillow', text: 'Pillow', correctZoneId: 'zone_bedroom', image: "/assets/images/pillow.png" },
        ],
    },

    // 6. Action Verbs vs Nouns (Parts of Speech)
    {
        id: 'ing_easy_gram_006',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'easy',
        topic: 'Parts of Speech',
        questionText: 'Separate the Action Words (Verbs) from the Objects (Nouns).',
        explanationText: 'Run and Eat are actions (Verbs). Table and Chair are things (Nouns).',
        zones: [
            { id: 'zone_verb', label: 'Action (Verb)' },
            { id: 'zone_noun', label: 'Thing (Noun)' },
        ],
        items: [
            { id: 'item_run', text: 'Run', correctZoneId: 'zone_verb', image: "/assets/images/run_icon.png" },
            { id: 'item_table', text: 'Table', correctZoneId: 'zone_noun', image: "/assets/images/table.png" },
            { id: 'item_eat', text: 'Eat', correctZoneId: 'zone_verb', image: "/assets/images/eat_icon.png" },
            { id: 'item_chair', text: 'Chair', correctZoneId: 'zone_noun', image: "/assets/images/chair.png" },
        ],
    },

    // 7. Days vs Months (Time)
    {
        id: 'ing_easy_vocab_007',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'easy',
        topic: 'Time',
        questionText: 'Categorize the words into Days of the Week or Months of the Year.',
        explanationText: 'Sunday/Monday are days. January/August are months.',
        zones: [
            { id: 'zone_day', label: 'Days' },
            { id: 'zone_month', label: 'Months' },
        ],
        items: [
            { id: 'item_sunday', text: 'Sunday', correctZoneId: 'zone_day', image: "/assets/images/calendar_day.png" },
            { id: 'item_january', text: 'January', correctZoneId: 'zone_month', image: "/assets/images/calendar_month.png" },
            { id: 'item_friday', text: 'Friday', correctZoneId: 'zone_day', image: "/assets/images/calendar_day.png" },
            { id: 'item_august', text: 'August', correctZoneId: 'zone_month', image: "/assets/images/calendar_month.png" },
        ],
    },

    // 8. Land vs Sea Animals (Vocabulary)
    {
        id: 'ing_easy_vocab_008',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'easy',
        topic: 'Animals',
        questionText: 'Where do these animals live?',
        explanationText: 'Elephant and Lion live on land. Shark and Whale live in the sea.',
        zones: [
            { id: 'zone_land', label: 'Land Animals' },
            { id: 'zone_sea', label: 'Sea Animals' },
        ],
        items: [
            { id: 'item_elephant', text: 'Elephant', correctZoneId: 'zone_land', image: "/assets/images/elephant.png" },
            { id: 'item_shark', text: 'Shark', correctZoneId: 'zone_sea', image: "/assets/images/shark.png" },
            { id: 'item_lion', text: 'Lion', correctZoneId: 'zone_land', image: "/assets/images/lion.png" },
            { id: 'item_whale', text: 'Whale', correctZoneId: 'zone_sea', image: "/assets/images/whale.png" },
        ],
    },

    // 9. Food vs Drink (Vocabulary)
    {
        id: 'ing_easy_vocab_009',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'easy',
        topic: 'Daily Life',
        questionText: 'Separate the items into Food (to eat) and Drink (to drink).',
        explanationText: 'Pizza and Bread are solid food. Juice and Milk are liquids to drink.',
        zones: [
            { id: 'zone_food', label: 'Food' },
            { id: 'zone_drink', label: 'Drink' },
        ],
        items: [
            { id: 'item_pizza', text: 'Pizza', correctZoneId: 'zone_food', image: "/assets/images/pizza.png" },
            { id: 'item_juice', text: 'Orange Juice', correctZoneId: 'zone_drink', image: "/assets/images/juice.png" },
            { id: 'item_bread', text: 'Bread', correctZoneId: 'zone_food', image: "/assets/images/bread.png" },
            { id: 'item_milk', text: 'Milk', correctZoneId: 'zone_drink', image: "/assets/images/milk_glass.png" },
        ],
    },

    // 10. Colors: Warm vs Cool (Vocabulary / Art)
    {
        id: 'ing_easy_vocab_010',
        type: 'drag_and_drop',
        category: 'inggris',

        difficulty: 'easy',
        topic: 'Colors',
        questionText: 'Group items by their color.',
        explanationText: 'Strawberry and Firetruck are Red. Lemon and Sun are Yellow.',
        zones: [
            { id: 'zone_red', label: 'Red Items' },
            { id: 'zone_yellow', label: 'Yellow Items' },
        ],
        items: [
            { id: 'item_straw', text: 'Strawberry', correctZoneId: 'zone_red', image: "/assets/images/strawberry.png" },
            { id: 'item_lemon', text: 'Lemon', correctZoneId: 'zone_yellow', image: "/assets/images/lemon.png" },
            { id: 'item_fire', text: 'Fire Truck', correctZoneId: 'zone_red', image: "/assets/images/firetruck.png" },
            { id: 'item_sun', text: 'The Sun', correctZoneId: 'zone_yellow', image: "/assets/images/sun.png" },
        ],
    },
];