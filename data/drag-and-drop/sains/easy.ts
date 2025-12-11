import { SeedDragAndDrop } from "@/types/seed";

// TODO: Add Image ["/assets/images/sapi.png", "/assets/images/kambing.png", "/assets/images/singa.png", "/assets/images/harimau.png"]

export const dragAndDropSainsEasy: SeedDragAndDrop[] = [
    // 1. Klasifikasi Makanan Hewan (Existing)
    {
        id: 'bio_smp7_klasifikasi_001',
        type: 'drag_and_drop',
        category: 'sains',
        difficulty: 'easy',
        topic: 'Klasifikasi Makhluk Hidup',
        questionText: 'Kelompokkan hewan berikut berdasarkan jenis makanannya!',
        explanationText: 'Sapi dan Kambing makan tumbuhan (Herbivora), Singa dan Harimau makan daging (Karnivora).',
        zones: [
            { id: 'zone_herbi', label: 'Herbivora' },
            { id: 'zone_karni', label: 'Karnivora' },
        ],
        items: [
            { id: 'item_sapi', text: 'Sapi', correctZoneId: 'zone_herbi', image: "/assets/images/sapi.png" },
            { id: 'item_kambing', text: 'Kambing', correctZoneId: 'zone_herbi', image: "/assets/images/kambing.png" },
            { id: 'item_singa', text: 'Singa', correctZoneId: 'zone_karni', image: "/assets/images/singa.png" },
            { id: 'item_harimau', text: 'Harimau', correctZoneId: 'zone_karni', image: "/assets/images/harimau.png" },
        ],
    },

    // 2. Komponen Ekosistem (Biotik vs Abiotik)
    {
        id: 'bio_smp7_ekosistem_002',
        type: 'drag_and_drop',
        category: 'sains',
        difficulty: 'easy',
        topic: 'Ekosistem',
        questionText: 'Pisahkan antara komponen Biotik (Hidup) dan Abiotik (Tak Hidup).',
        explanationText: 'Biotik adalah makhluk hidup (Manusia, Bakteri). Abiotik adalah benda tak hidup (Cahaya, Batu).',
        zones: [
            { id: 'zone_biotik', label: 'Biotik (Hidup)' },
            { id: 'zone_abiotik', label: 'Abiotik (Tak Hidup)' },
        ],
        items: [
            { id: 'item_manusia', text: 'Manusia', correctZoneId: 'zone_biotik', image: "/assets/images/manusia.png" },
            { id: 'item_cahaya', text: 'Cahaya Matahari', correctZoneId: 'zone_abiotik', image: "/assets/images/matahari.png" },
            { id: 'item_bakteri', text: 'Bakteri', correctZoneId: 'zone_biotik', image: "/assets/images/bakteri.png" },
            { id: 'item_batu', text: 'Batu', correctZoneId: 'zone_abiotik', image: "/assets/images/batu.png" },
        ],
    },

    // 3. Sampah (Organik vs Anorganik)
    {
        id: 'bio_smp7_lingkungan_003',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Pencemaran Lingkungan',
        questionText: 'Buanglah sampah ke tempat sampah yang sesuai!',
        explanationText: 'Sampah organik berasal dari alam dan mudah busuk. Anorganik sulit terurai.',
        zones: [
            { id: 'zone_organik', label: 'Sampah Organik' },
            { id: 'zone_anorganik', label: 'Sampah Anorganik' },
        ],
        items: [
            { id: 'item_daun', text: 'Daun Kering', correctZoneId: 'zone_organik', image: "/assets/images/daun_kering.png" },
            { id: 'item_botol', text: 'Botol Plastik', correctZoneId: 'zone_anorganik', image: "/assets/images/botol_plastik.png" },
            { id: 'item_apel', text: 'Sisa Apel', correctZoneId: 'zone_organik', image: "/assets/images/sisa_apel.png" },
            { id: 'item_kaleng', text: 'Kaleng Soda', correctZoneId: 'zone_anorganik', image: "/assets/images/kaleng.png" },
        ],
    },

    // 4. Vertebrata vs Avertebrata
    {
        id: 'bio_smp7_klasifikasi_004',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Klasifikasi Hewan',
        questionText: 'Kelompokkan hewan berdasarkan keberadaan tulang belakangnya.',
        explanationText: 'Vertebrata memiliki tulang belakang. Avertebrata tidak memiliki tulang belakang.',
        zones: [
            { id: 'zone_vertebrata', label: 'Vertebrata' },
            { id: 'zone_avertebrata', label: 'Avertebrata' },
        ],
        items: [
            { id: 'item_kucing', text: 'Kucing', correctZoneId: 'zone_vertebrata', image: "/assets/images/kucing.png" },
            { id: 'item_cacing', text: 'Cacing Tanah', correctZoneId: 'zone_avertebrata', image: "/assets/images/cacing.png" },
            { id: 'item_ikan', text: 'Ikan Mas', correctZoneId: 'zone_vertebrata', image: "/assets/images/ikan_mas.png" },
            { id: 'item_ubur', text: 'Ubur-ubur', correctZoneId: 'zone_avertebrata', image: "/assets/images/ubur_ubur.png" },
        ],
    },

    // 5. Ciri Makhluk Hidup (Bergerak vs Tidak)
    // Sebenarnya benda mati bisa bergerak pasif, tapi konteks kelas 7 biasanya "Mobil vs Kuda"
    {
        id: 'bio_smp7_ciri_005',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Gejala Alam',
        questionText: 'Manakah yang termasuk Gejala Alam Biotik dan Abiotik?',
        explanationText: 'Tumbuh adalah gejala biotik. Mengalir (air) adalah gejala abiotik.',
        zones: [
            { id: 'zone_g_biotik', label: 'Gejala Biotik' },
            { id: 'zone_g_abiotik', label: 'Gejala Abiotik' },
        ],
        items: [
            { id: 'item_tumbuh', text: 'Tanaman Tumbuh', correctZoneId: 'zone_g_biotik', image: "/assets/images/tunas.png" },
            { id: 'item_mengalir', text: 'Air Mengalir', correctZoneId: 'zone_g_abiotik', image: "/assets/images/air_terjun.png" },
            { id: 'item_bernapas', text: 'Kelinci Bernapas', correctZoneId: 'zone_g_biotik', image: "/assets/images/kelinci.png" },
            { id: 'item_meletus', text: 'Gunung Meletus', correctZoneId: 'zone_g_abiotik', image: "/assets/images/gunung.png" },
        ],
    },

    // 6. Produsen vs Konsumen (Rantai Makanan)
    {
        id: 'bio_smp7_rantai_006',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Rantai Makanan',
        questionText: 'Tentukan peran makhluk hidup berikut dalam rantai makanan.',
        explanationText: 'Produsen menghasilkan makanan sendiri (tumbuhan). Konsumen memakan makhluk lain.',
        zones: [
            { id: 'zone_produsen', label: 'Produsen' },
            { id: 'zone_konsumen', label: 'Konsumen' },
        ],
        items: [
            { id: 'item_padi', text: 'Padi', correctZoneId: 'zone_produsen', image: "/assets/images/padi.png" },
            { id: 'item_tikus', text: 'Tikus', correctZoneId: 'zone_konsumen', image: "/assets/images/tikus.png" },
            { id: 'item_rumput', text: 'Rumput', correctZoneId: 'zone_produsen', image: "/assets/images/rumput.png" },
            { id: 'item_elang', text: 'Elang', correctZoneId: 'zone_konsumen', image: "/assets/images/elang.png" },
        ],
    },

    // 7. Monokotil vs Dikotil (Tumbuhan)
    {
        id: 'bio_smp7_tumbuhan_007',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Klasifikasi Tumbuhan',
        questionText: 'Kelompokkan tumbuhan berdasarkan jumlah keping bijinya.',
        explanationText: 'Monokotil berkeping satu (Jagung, Padi). Dikotil berkeping dua (Mangga, Kacang).',
        zones: [
            { id: 'zone_monokotil', label: 'Monokotil' },
            { id: 'zone_dikotil', label: 'Dikotil' },
        ],
        items: [
            { id: 'item_jagung', text: 'Jagung', correctZoneId: 'zone_monokotil', image: "/assets/images/jagung.png" },
            { id: 'item_mangga', text: 'Mangga', correctZoneId: 'zone_dikotil', image: "/assets/images/mangga.png" },
            { id: 'item_padi2', text: 'Padi', correctZoneId: 'zone_monokotil', image: "/assets/images/padi.png" },
            { id: 'item_kacang', text: 'Kacang Tanah', correctZoneId: 'zone_dikotil', image: "/assets/images/kacang.png" },
        ],
    },

    // 8. Perkembangbiakan Hewan (Ovipar vs Vivipar)
    {
        id: 'bio_smp7_repro_008',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Ciri Makhluk Hidup',
        questionText: 'Bagaimana cara hewan-hewan ini berkembang biak?',
        explanationText: 'Ovipar bertelur (Ayam, Bebek). Vivipar melahirkan (Sapi, Kucing).',
        zones: [
            { id: 'zone_ovipar', label: 'Bertelur (Ovipar)' },
            { id: 'zone_vivipar', label: 'Melahirkan (Vivipar)' },
        ],
        items: [
            { id: 'item_ayam', text: 'Ayam', correctZoneId: 'zone_ovipar', image: "/assets/images/ayam.png" },
            { id: 'item_sapi2', text: 'Sapi', correctZoneId: 'zone_vivipar', image: "/assets/images/sapi.png" },
            { id: 'item_bebek', text: 'Bebek', correctZoneId: 'zone_ovipar', image: "/assets/images/bebek.png" },
            { id: 'item_kucing2', text: 'Kucing', correctZoneId: 'zone_vivipar', image: "/assets/images/kucing.png" },
        ],
    },

    // 9. Asam vs Basa (Indikator Alami - Biologi/Kimia Dasar)
    // Sering masuk di bab Sifat Zat di IPA Terpadu
    {
        id: 'bio_smp7_zat_009',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Sifat Zat',
        questionText: 'Kelompokkan bahan berikut berdasarkan rasanya (Sifat Asam/Basa sederhana).',
        explanationText: 'Jeruk dan Cuka rasanya masam. Sabun dan Obat Maag rasanya pahit (Basa).',
        zones: [
            { id: 'zone_asam', label: 'Asam' },
            { id: 'zone_basa', label: 'Basa' },
        ],
        items: [
            { id: 'item_jeruk', text: 'Jeruk Nipis', correctZoneId: 'zone_asam', image: "/assets/images/jeruk.png" },
            { id: 'item_sabun', text: 'Sabun Mandi', correctZoneId: 'zone_basa', image: "/assets/images/sabun.png" },
            { id: 'item_cuka', text: 'Cuka Dapur', correctZoneId: 'zone_asam', image: "/assets/images/cuka.png" },
            { id: 'item_obat', text: 'Obat Maag', correctZoneId: 'zone_basa', image: "/assets/images/obat.png" },
        ],
    },

    // 10. Ekosistem Alami vs Buatan
    {
        id: 'bio_smp7_ekosistem_010',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Jenis Ekosistem',
        questionText: 'Tentukan mana ekosistem yang terbentuk alami dan mana buatan manusia.',
        explanationText: 'Laut dan Hutan terbentuk alami. Sawah dan Aquarium dibuat oleh manusia.',
        zones: [
            { id: 'zone_alami', label: 'Ekosistem Alami' },
            { id: 'zone_buatan', label: 'Ekosistem Buatan' },
        ],
        items: [
            { id: 'item_laut', text: 'Laut', correctZoneId: 'zone_alami', image: "/assets/images/laut.png" },
            { id: 'item_sawah', text: 'Sawah', correctZoneId: 'zone_buatan', image: "/assets/images/sawah.png" },
            { id: 'item_hutan', text: 'Hutan', correctZoneId: 'zone_alami', image: "/assets/images/hutan.png" },
            { id: 'item_aquarium', text: 'Aquarium', correctZoneId: 'zone_buatan', image: "/assets/images/aquarium.png" },
        ],
    },

    {
        id: 'fis_smp7_besaran_001',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Besaran dan Pengukuran',
        questionText: 'Kelompokkan besaran berikut menjadi Besaran Pokok dan Besaran Turunan.',
        explanationText: 'Besaran pokok adalah besaran dasar (Panjang, Massa). Besaran turunan diturunkan dari besaran pokok (Luas, Kecepatan).',
        zones: [
            { id: 'zone_pokok', label: 'Besaran Pokok' },
            { id: 'zone_turunan', label: 'Besaran Turunan' },
        ],
        items: [
            { id: 'item_panjang', text: 'Panjang', correctZoneId: 'zone_pokok', image: "/assets/images/ruler.png" },
            { id: 'item_massa', text: 'Massa', correctZoneId: 'zone_pokok', image: "/assets/images/balance_scale.png" },
            { id: 'item_luas', text: 'Luas', correctZoneId: 'zone_turunan', image: "/assets/images/area.png" },
            { id: 'item_kecepatan', text: 'Kecepatan', correctZoneId: 'zone_turunan', image: "/assets/images/speedometer.png" },
        ],
    },

    // 2. Wujud Zat (Padat vs Cair)
    {
        id: 'fis_smp7_wujud_002',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Zat dan Wujudnya',
        questionText: 'Pisahkan benda berikut berdasarkan wujudnya pada suhu ruang.',
        explanationText: 'Kayu dan Batu adalah benda padat. Minyak dan Susu adalah benda cair.',
        zones: [
            { id: 'zone_padat', label: 'Benda Padat' },
            { id: 'zone_cair', label: 'Benda Cair' },
        ],
        items: [
            { id: 'item_kayu', text: 'Balok Kayu', correctZoneId: 'zone_padat', image: "/assets/images/wood_block.png" },
            { id: 'item_batu', text: 'Batu', correctZoneId: 'zone_padat', image: "/assets/images/rock.png" },
            { id: 'item_minyak', text: 'Minyak Goreng', correctZoneId: 'zone_cair', image: "/assets/images/cooking_oil.png" },
            { id: 'item_susu', text: 'Susu Kotak', correctZoneId: 'zone_cair', image: "/assets/images/milk_carton.png" },
        ],
    },

    // 3. Konduktor vs Isolator (Panas)
    {
        id: 'fis_smp7_kalor_003',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Suhu dan Kalor',
        questionText: 'Mana benda yang dapat menghantarkan panas dan mana yang tidak?',
        explanationText: 'Logam (Besi, Aluminium) menghantar panas. Kayu dan Kain menahan panas.',
        zones: [
            { id: 'zone_konduktor', label: 'Konduktor (Penghantar)' },
            { id: 'zone_isolator', label: 'Isolator (Penahan)' },
        ],
        items: [
            { id: 'item_besi', text: 'Batang Besi', correctZoneId: 'zone_konduktor', image: "/assets/images/iron_rod.png" },
            { id: 'item_panci', text: 'Panci Aluminium', correctZoneId: 'zone_konduktor', image: "/assets/images/pan.png" },
            { id: 'item_kain', text: 'Kain Lap', correctZoneId: 'zone_isolator', image: "/assets/images/cloth.png" },
            { id: 'item_kayu_bakar', text: 'Kayu', correctZoneId: 'zone_isolator', image: "/assets/images/wood_log.png" },
        ],
    },

    // 4. Alat Ukur (Panjang vs Waktu)
    {
        id: 'fis_smp7_ukur_004',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Pengukuran',
        questionText: 'Kelompokkan alat ukur berikut sesuai fungsinya.',
        explanationText: 'Mistar dan Meteran mengukur panjang. Stopwatch dan Jam mengukur waktu.',
        zones: [
            { id: 'zone_panjang', label: 'Alat Ukur Panjang' },
            { id: 'zone_waktu', label: 'Alat Ukur Waktu' },
        ],
        items: [
            { id: 'item_mistar', text: 'Penggaris / Mistar', correctZoneId: 'zone_panjang', image: "/assets/images/ruler_plastic.png" },
            { id: 'item_meteran', text: 'Meteran Gulung', correctZoneId: 'zone_panjang', image: "/assets/images/tape_measure.png" },
            { id: 'item_stopwatch', text: 'Stopwatch', correctZoneId: 'zone_waktu', image: "/assets/images/stopwatch.png" },
            { id: 'item_jam', text: 'Jam Dinding', correctZoneId: 'zone_waktu', image: "/assets/images/wall_clock.png" },
        ],
    },

    // 5. Perubahan Wujud (Mencair vs Membeku)
    {
        id: 'fis_smp7_wujud_005',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Zat dan Perubahannya',
        questionText: 'Apa nama perubahan wujud pada peristiwa berikut?',
        explanationText: 'Es jadi air itu Mencair. Air jadi es batu itu Membeku.',
        zones: [
            { id: 'zone_cair', label: 'Mencair (Padat ke Cair)' },
            { id: 'zone_beku', label: 'Membeku (Cair ke Padat)' },
        ],
        items: [
            { id: 'item_es_krim', text: 'Es Krim Meleleh', correctZoneId: 'zone_cair', image: "/assets/images/melting_icecream.png" },
            { id: 'item_mentega', text: 'Mentega di Wajan', correctZoneId: 'zone_cair', image: "/assets/images/melting_butter.png" },
            { id: 'item_es_batu', text: 'Membuat Es Batu', correctZoneId: 'zone_beku', image: "/assets/images/ice_cubes.png" },
            { id: 'item_agar', text: 'Agar-agar Mengeras', correctZoneId: 'zone_beku', image: "/assets/images/jelly.png" },
        ],
    },

    // 6. Gaya Sentuh vs Tak Sentuh
    {
        id: 'fis_smp7_gaya_006',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Gerak dan Gaya',
        questionText: 'Kelompokkan jenis gaya berikut.',
        explanationText: 'Gaya gesek dan otot butuh sentuhan. Gravitasi dan magnet bekerja tanpa sentuhan.',
        zones: [
            { id: 'zone_sentuh', label: 'Gaya Sentuh' },
            { id: 'zone_tak_sentuh', label: 'Gaya Tak Sentuh' },
        ],
        items: [
            { id: 'item_gesek', text: 'Gaya Gesek Ban', correctZoneId: 'zone_sentuh', image: "/assets/images/friction.png" },
            { id: 'item_dorong', text: 'Mendorong Meja', correctZoneId: 'zone_sentuh', image: "/assets/images/pushing_table.png" },
            { id: 'item_gravitasi', text: 'Buah Jatuh (Gravitasi)', correctZoneId: 'zone_tak_sentuh', image: "/assets/images/apple_fall.png" },
            { id: 'item_magnet', text: 'Tarik Menarik Magnet', correctZoneId: 'zone_tak_sentuh', image: "/assets/images/magnet.png" },
        ],
    },

    // 7. Sumber Energi (Terbarukan vs Tak Terbarukan)
    {
        id: 'fis_smp7_energi_007',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Energi',
        questionText: 'Mana sumber energi yang ramah lingkungan (bisa diperbarui) dan mana yang akan habis?',
        explanationText: 'Matahari dan Angin selalu ada. Bensin dan Batubara bisa habis.',
        zones: [
            { id: 'zone_terbarukan', label: 'Energi Terbarukan' },
            { id: 'zone_tak_terbarukan', label: 'Tak Terbarukan (Habis)' },
        ],
        items: [
            { id: 'item_surya', text: 'Cahaya Matahari', correctZoneId: 'zone_terbarukan', image: "/assets/images/sun_panel.png" },
            { id: 'item_angin', text: 'Angin', correctZoneId: 'zone_terbarukan', image: "/assets/images/windmill.png" },
            { id: 'item_bensin', text: 'Bensin (Minyak Bumi)', correctZoneId: 'zone_tak_terbarukan', image: "/assets/images/gasoline.png" },
            { id: 'item_batubara', text: 'Batubara', correctZoneId: 'zone_tak_terbarukan', image: "/assets/images/coal.png" },
        ],
    },

    // 8. Perpindahan Kalor (Radiasi vs Konduksi)
    {
        id: 'fis_smp7_pindah_008',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Suhu dan Kalor',
        questionText: 'Tentukan cara perpindahan panas pada peristiwa berikut.',
        explanationText: 'Konduksi merambat lewat benda padat (sendok). Radiasi memancar tanpa zat perantara (matahari).',
        zones: [
            { id: 'zone_konduksi', label: 'Konduksi (Rambatan)' },
            { id: 'zone_radiasi', label: 'Radiasi (Pancaran)' },
        ],
        items: [
            { id: 'item_sendok', text: 'Sendok di Air Panas', correctZoneId: 'zone_konduksi', image: "/assets/images/spoon_hot.png" },
            { id: 'item_setrika', text: 'Alas Setrika Panas', correctZoneId: 'zone_konduksi', image: "/assets/images/ironing.png" },
            { id: 'item_matahari', text: 'Panas Matahari', correctZoneId: 'zone_radiasi', image: "/assets/images/sun_heat.png" },
            { id: 'item_api', text: 'Panas Api Unggun', correctZoneId: 'zone_radiasi', image: "/assets/images/campfire.png" },
        ],
    },

    // 9. Satuan Internasional (SI)
    {
        id: 'fis_smp7_satuan_009',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Besaran dan Satuan',
        questionText: 'Pasangkan besaran berikut dengan Satuan Internasional (SI) yang benar.',
        explanationText: 'Massa satuannya Kilogram (kg). Waktu satuannya Sekon/Detik (s).',
        zones: [
            { id: 'zone_kg', label: 'Kilogram (kg)' },
            { id: 'zone_sekon', label: 'Sekon (s)' },
        ],
        items: [
            { id: 'item_massa_benda', text: 'Massa Benda', correctZoneId: 'zone_kg', image: "/assets/images/weight.png" },
            { id: 'item_beras', text: 'Berat Beras (Massa)', correctZoneId: 'zone_kg', image: "/assets/images/rice_sack.png" },
            { id: 'item_waktu_lari', text: 'Lama Pelari Berlari', correctZoneId: 'zone_sekon', image: "/assets/images/runner.png" },
            { id: 'item_detik', text: 'Detik', correctZoneId: 'zone_sekon', image: "/assets/images/clock_seconds.png" },
        ],
    },

    // 10. Sifat Zat (Bentuk Tetap vs Berubah)
    {
        id: 'fis_smp7_sifat_010',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'easy',
        topic: 'Zat dan Wujudnya',
        questionText: 'Kelompokkan benda berdasarkan sifat bentuknya.',
        explanationText: 'Zat padat bentuknya tetap. Zat cair dan gas bentuknya berubah mengikuti wadah.',
        zones: [
            { id: 'zone_tetap', label: 'Bentuk Tetap' },
            { id: 'zone_berubah', label: 'Bentuk Berubah (Ikut Wadah)' },
        ],
        items: [
            { id: 'item_kelereng', text: 'Kelereng', correctZoneId: 'zone_tetap', image: "/assets/images/marble.png" },
            { id: 'item_hp', text: 'Handphone', correctZoneId: 'zone_tetap', image: "/assets/images/smartphone.png" },
            { id: 'item_air', text: 'Air Teh', correctZoneId: 'zone_berubah', image: "/assets/images/tea_cup.png" },
            { id: 'item_sirup', text: 'Sirup', correctZoneId: 'zone_berubah', image: "/assets/images/syrup_bottle.png" },
        ],
    },
];