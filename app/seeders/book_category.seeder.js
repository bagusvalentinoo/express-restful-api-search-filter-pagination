const { Category, Book } = require('../models/index')

exports.addBooksAndCategoriesForStartingSeeder = async () => {
  const categoryFiksi = await Category.create({
    title: 'Fiksi',
    description: 'Buku-buku fiksi termasuk novel dan cerita pendek.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryNonFiksi = await Category.create({
    title: 'Non-Fiksi',
    description: 'Buku-buku non-fiksi termasuk ensiklopedia, buku panduan, dan biografi.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categorySainsAlam = await Category.create({
    title: 'Sains Alam',
    description: 'Buku-buku ilmiah tentang alam, termasuk biologi, fisika, dan kimia.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categorySainsSosial = await Category.create({
    title: 'Sains Sosial',
    description: 'Buku-buku ilmiah tentang masyarakat, politik, dan ekonomi.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categorySejarahDunia = await Category.create({
    title: 'Sejarah Dunia',
    description: 'Buku-buku tentang sejarah dunia dan peristiwa-peristiwa penting.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categorySeniDanMusik = await Category.create({
    title: 'Seni dan Musik',
    description: 'Buku-buku tentang seni rupa, musik, dan seni pertunjukan.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryPendidikan = await Category.create({
    title: 'Pendidikan',
    description: 'Buku-buku tentang pendidikan dan metode pengajaran.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryHiburan = await Category.create({
    title: 'Hiburan',
    description: 'Buku-buku hiburan termasuk komik, novel grafis, dan buku permainan.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryReligi = await Category.create({
    title: 'Religi',
    description: 'Buku-buku tentang agama, kepercayaan, dan spiritualitas.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryKuliner = await Category.create({
    title: 'Kuliner',
    description: 'Buku-buku tentang masakan dan resep kuliner.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryWisata = await Category.create({
    title: 'Wisata',
    description: 'Buku-buku panduan tentang tempat-tempat wisata dan petualangan.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryOlahraga = await Category.create({
    title: 'Olahraga',
    description: 'Buku-buku tentang olahraga dan kebugaran.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryTeknologi = await Category.create({
    title: 'Teknologi',
    description: 'Buku-buku tentang teknologi dan inovasi.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryHewanPeliharaan = await Category.create({
    title: 'Hewan Peliharaan',
    description: 'Buku-buku tentang hewan peliharaan dan perawatannya.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryAlamDanLingkungan = await Category.create({
    title: 'Alam dan Lingkungan',
    description: 'Buku-buku tentang lingkungan alam dan pelestarian alam.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryKesehatanDanKedokteran = await Category.create({
    title: 'Kesehatan dan Kedokteran',
    description: 'Buku-buku tentang kesehatan dan bidang kedokteran.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryPengembanganDiri = await Category.create({
    title: 'Pengembangan Diri',
    description: 'Buku-buku pengembangan diri dan motivasi.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categorySastra = await Category.create({
    title: 'Sastra',
    description: 'Buku-buku sastra, puisi, dan karya sastra lainnya.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryTeknik = await Category.create({
    title: 'Teknik',
    description: 'Buku-buku teknik dan rekayasa.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryPertanian = await Category.create({
    title: 'Pertanian',
    description: 'Buku-buku tentang pertanian dan hortikultura.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryPsikologi = await Category.create({
    title: 'Psikologi',
    description: 'Buku-buku tentang psikologi manusia dan perilaku.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryHukum = await Category.create({
    title: 'Hukum',
    description: 'Buku-buku tentang hukum dan peraturan.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryPariwisata = await Category.create({
    title: 'Pariwisata',
    description: 'Buku-buku tentang industri pariwisata dan manajemen destinasi.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryDesain = await Category.create({
    title: 'Desain',
    description: 'Buku-buku tentang desain grafis, desain produk, dan seni rupa.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryEkonomi = await Category.create({
    title: 'Ekonomi',
    description: 'Buku-buku tentang ekonomi makro dan mikro.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryPolitik = await Category.create({
    title: 'Politik',
    description: 'Buku-buku tentang teori politik dan ilmu politik.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryFilsafat = await Category.create({
    title: 'Filsafat',
    description: 'Buku-buku tentang filsafat dan pemikiran manusia.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryKesenian = await Category.create({
    title: 'Kesenian',
    description: 'Buku-buku tentang seni dan karya seni.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryMusik = await Category.create({
    title: 'Musik',
    description: 'Buku-buku tentang teori musik dan sejarah musik.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryFilm = await Category.create({
    title: 'Film',
    description: 'Buku-buku tentang teori film dan sejarah perfilman.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const book1 = await Book.create({
    title: 'Beyond the Horizon: Exploring the Unknown',
    author: 'Emily Johnson',
    publisher: 'HarperCollins',
    publication_year: 2015,
    isbn: '978-1452159869',
    number_of_pages: 320,
    created_at: new Date(),
    updated_at: new Date()
  })
  book1.setCategories([categoryFiksi, categorySejarahDunia, categoryAlamDanLingkungan])

  const book2 = await Book.create({
    title: 'The Power of Human Connection',
    author: 'Michael Anderson',
    publisher: 'Random House',
    publication_year: 2013,
    isbn: '978-0679767892',
    number_of_pages: 280,
    created_at: new Date(),
    updated_at: new Date()
  })
  book2.setCategories([categoryNonFiksi, categoryPsikologi, categoryPengembanganDiri])

  const book3 = await Book.create({
    title: 'Innovation in the Digital Age',
    author: 'Sarah Clark',
    publisher: 'MIT Press',
    publication_year: 2017,
    isbn: '978-0262535439',
    number_of_pages: 240,
    created_at: new Date(),
    updated_at: new Date()
  })
  book3.setCategories([categoryTeknologi, categoryEkonomi, categoryPengembanganDiri])

  const book4 = await Book.create({
    title: 'The Art of Culinary Masterpieces',
    author: 'Jacques Leblanc',
    publisher: "Chef's Editions",
    publication_year: 2012,
    isbn: '978-0987654321',
    number_of_pages: 200,
    created_at: new Date(),
    updated_at: new Date()
  })
  book4.setCategories([categoryKuliner, categorySeniDanMusik, categoryPendidikan])

  const book5 = await Book.create({
    title: 'Eco-Friendly Living: A Guide to Sustainability',
    author: 'Emma Green',
    publisher: 'EcoPress',
    publication_year: 2014,
    isbn: '978-0615436892',
    number_of_pages: 180,
    created_at: new Date(),
    updated_at: new Date()
  })
  book5.setCategories([categoryAlamDanLingkungan, categoryPendidikan, categoryTeknologi])

  const book6 = await Book.create({
    title: 'The World of Politics: A Comprehensive Overview',
    author: 'David Mitchell',
    publisher: 'Oxford University Press',
    publication_year: 2016,
    isbn: '978-0198745375',
    number_of_pages: 350,
    created_at: new Date(),
    updated_at: new Date()
  })
  book6.setCategories([categoryPolitik, categorySejarahDunia, categoryFilsafat])

  const book7 = await Book.create({
    title: 'Rhythms of the Soul: Exploring Music Across Cultures',
    author: 'Maria Rodriguez',
    publisher: 'Global Soundscapes',
    publication_year: 2018,
    isbn: '978-1554075823',
    number_of_pages: 280,
    created_at: new Date(),
    updated_at: new Date()
  })
  book7.setCategories([categoryMusik, categorySeniDanMusik, categorySastra])

  const book8 = await Book.create({
    title: 'The Mind-Body Connection: Understanding Mental and Physical Health',
    author: 'Dr. Emily White',
    publisher: 'Health Harmony',
    publication_year: 2011,
    isbn: '978-0987654321',
    number_of_pages: 220,
    created_at: new Date(),
    updated_at: new Date()
  })
  book8.setCategories([categoryKesehatanDanKedokteran, categoryPsikologi, categoryPengembanganDiri])

  const book9 = await Book.create({
    title: 'The Universe Within: Discovering Our Inner Cosmos',
    author: 'Alan Foster',
    publisher: 'Cosmos Publishing',
    publication_year: 2019,
    isbn: '978-1635305948',
    number_of_pages: 300,
    created_at: new Date(),
    updated_at: new Date()
  })
  book9.setCategories([categorySainsAlam, categoryFilsafat, categorySastra])

  const book10 = await Book.create({
    title: 'Beyond Borders: A Global Perspective on Economics',
    author: 'Laura Davis',
    publisher: 'Worldview Publications',
    publication_year: 2014,
    isbn: '978-0987654321',
    number_of_pages: 260,
    created_at: new Date(),
    updated_at: new Date()
  })
  book10.setCategories([categoryEkonomi, categoryPolitik, categorySejarahDunia])

  const book11 = await Book.create({
    title: 'The Quantum Paradox: Exploring the Mysteries of Subatomic World',
    author: 'Dr. Jonathan Lee',
    publisher: 'Quantum Books',
    publication_year: 2016,
    isbn: '978-1543210987',
    number_of_pages: 280,
    created_at: new Date(),
    updated_at: new Date()
  })
  book11.setCategories([categorySainsAlam, categoryFilsafat, categoryTeknologi])

  const book12 = await Book.create({
    title: 'The Art of Mindfulness: Cultivating Inner Peace',
    author: 'Olivia Williams',
    publisher: 'Serenity Press',
    publication_year: 2013,
    isbn: '978-1628657893',
    number_of_pages: 240,
    created_at: new Date(),
    updated_at: new Date()
  })
  book12.setCategories([categoryKesehatanDanKedokteran, categoryPengembanganDiri, categoryFilsafat])

  const book13 = await Book.create({
    title: 'Sculpting Dreams: A Journey into Surrealist Art',
    author: 'Elena Martinez',
    publisher: 'Dreamweaver Publications',
    publication_year: 2017,
    isbn: '978-1789345672',
    number_of_pages: 320,
    created_at: new Date(),
    updated_at: new Date()
  })
  book13.setCategories([categorySeniDanMusik, categorySastra, categorySejarahDunia])

  const book14 = await Book.create({
    title: 'Coding the Future: Innovations in Computer Science',
    author: 'Alex Turner',
    publisher: 'CodeCrafters',
    publication_year: 2015,
    isbn: '978-0998743210',
    number_of_pages: 260,
    created_at: new Date(),
    updated_at: new Date()
  })
  book14.setCategories([categoryTeknologi, categoryPendidikan, categoryFilsafat])

  const book15 = await Book.create({
    title: 'Harmony in Diversity: Exploring Multiculturalism in the Modern World',
    author: 'Maya Singh',
    publisher: 'Global Harmony Publishers',
    publication_year: 2018,
    isbn: '978-1635498712',
    number_of_pages: 300,
    created_at: new Date(),
    updated_at: new Date()
  })
  book15.setCategories([categorySainsSosial, categoryFilsafat, categoryPolitik])

  const book16 = await Book.create({
    title: 'Culinary Adventures: A Global Gastronomic Tour',
    author: 'Carlos Mendez',
    publisher: 'Foodie Journeys',
    publication_year: 2014,
    isbn: '978-1456789012',
    number_of_pages: 220,
    created_at: new Date(),
    updated_at: new Date()
  })
  book16.setCategories([categoryKuliner, categoryWisata, categorySejarahDunia])

  const book17 = await Book.create({
    title: 'Beyond Boundaries: The Intersection of Science and Spirituality',
    author: 'Dr. Sophia Carter',
    publisher: 'SpiritScience Publications',
    publication_year: 2019,
    isbn: '978-1786423094',
    number_of_pages: 280,
    created_at: new Date(),
    updated_at: new Date()
  })
  book17.setCategories([categorySainsAlam, categoryFilsafat])

  const book18 = await Book.create({
    title: "The Entrepreneur's Blueprint: Building Successful Ventures",
    author: 'Mark Anderson',
    publisher: 'Startup Press',
    publication_year: 2016,
    isbn: '978-1627364092',
    number_of_pages: 250,
    created_at: new Date(),
    updated_at: new Date()
  })
  book18.setCategories([categoryEkonomi, categoryPengembanganDiri])

  const book19 = await Book.create({
    title: 'Beyond the Stars: Exploring the Universe\'s Wonders',
    author: 'Dr. Amanda Roberts',
    publisher: 'Stellar Publishing',
    publication_year: 2012,
    isbn: '978-1443210987',
    number_of_pages: 290,
    created_at: new Date(),
    updated_at: new Date()
  })
  book19.setCategories([categorySainsAlam, categoryFilsafat, categorySastra])

  const book20 = await Book.create({
    title: 'The Art of Cinematography: Crafting Visual Stories',
    author: 'Daniel Lee',
    publisher: 'Cinematic Creations',
    publication_year: 2017,
    isbn: '978-1789065432',
    number_of_pages: 270,
    created_at: new Date(),
    updated_at: new Date()
  })
  book20.setCategories([categorySeniDanMusik, categoryFilm, categoryDesain])

  const book21 = await Book.create({
    title: 'The Age of Artificial Intelligence: Navigating the Future',
    author: 'Dr. Sarah Chen',
    publisher: 'TechVision Publishing',
    publication_year: 2019,
    isbn: '978-1796543210',
    number_of_pages: 310,
    created_at: new Date(),
    updated_at: new Date()
  })
  book21.setCategories([categoryTeknologi, categoryFilsafat, categorySainsAlam])

  const book22 = await Book.create({
    title: 'Infinite Horizons: Understanding the Cosmos',
    author: 'Dr. Richard Turner',
    publisher: 'Cosmic Explorations',
    publication_year: 2018,
    isbn: '978-1632456789',
    number_of_pages: 290,
    created_at: new Date(),
    updated_at: new Date()
  })
  book22.setCategories([categorySainsAlam, categoryFilsafat, categoryPendidikan])

  const book23 = await Book.create({
    title: 'The Art of Diplomacy: Navigating Global Politics',
    author: 'Ambassador Mia Johnson',
    publisher: 'Diplomatic Press',
    publication_year: 2017,
    isbn: '978-1452678903',
    number_of_pages: 280,
    created_at: new Date(),
    updated_at: new Date()
  })
  book23.setCategories([categoryPolitik, categoryFilsafat, categorySejarahDunia])

  const book24 = await Book.create({
    title: 'Rhythms of the Rainforest: Exploring Biodiversity',
    author: 'Dr. Linda Martinez',
    publisher: 'Rainforest Publications',
    publication_year: 2015,
    isbn: '978-1623456789',
    number_of_pages: 270,
    created_at: new Date(),
    updated_at: new Date()
  })
  book24.setCategories([categoryAlamDanLingkungan, categorySainsAlam, categoryPendidikan])

  const book25 = await Book.create({
    title: 'The Epicurean Explorer: A Gastronomic Journey',
    author: 'Chef Pierre Laroche',
    publisher: 'Epicurean Press',
    publication_year: 2013,
    isbn: '978-1567890123',
    number_of_pages: 260,
    created_at: new Date(),
    updated_at: new Date()
  })
  book25.setCategories([categoryKuliner, categoryWisata, categorySeniDanMusik])

  const book26 = await Book.create({
    title: 'Digital Renaissance: Artistry in the Age of Technology',
    author: 'Dr. Maria Rodriguez',
    publisher: 'TechnoArt Publications',
    publication_year: 2016,
    isbn: '978-1623456123',
    number_of_pages: 280,
    created_at: new Date(),
    updated_at: new Date()
  })
  book26.setCategories([categorySeniDanMusik, categoryTeknologi, categorySejarahDunia])

  const book27 = await Book.create({
    title: 'The Wellness Revolution: A Holistic Approach to Health',
    author: 'Dr. Emily Davis',
    publisher: 'Wellness Publications',
    publication_year: 2014,
    isbn: '978-1543210654',
    number_of_pages: 250,
    created_at: new Date(),
    updated_at: new Date()
  })
  book27.setCategories([categoryKesehatanDanKedokteran, categoryPengembanganDiri, categoryAlamDanLingkungan])

  const book28 = await Book.create({
    title: 'Voices of Freedom: Stories from Civil Rights Movements',
    author: 'Jessica Thompson',
    publisher: 'Freedom Chronicles',
    publication_year: 2015,
    isbn: '978-1634567890',
    number_of_pages: 290,
    created_at: new Date(),
    updated_at: new Date()
  })
  book28.setCategories([categorySejarahDunia, categoryPolitik, categorySastra])

  const book29 = await Book.create({
    title: "The Innovator's Dilemma: Disruptive Technologies and Business Transformation",
    author: 'Clayton Christensen',
    publisher: 'Harvard Business Review Press',
    publication_year: 2011,
    isbn: '978-1633678901',
    number_of_pages: 240,
    created_at: new Date(),
    updated_at: new Date()
  })
  book29.setCategories([categoryTeknologi, categoryEkonomi])

  const book30 = await Book.create({
    title: 'The Art of Influence: Persuasion in a Changing World',
    author: 'Dr. Vanessa Carter',
    publisher: 'Influence Dynamics',
    publication_year: 2018,
    isbn: '978-1789345678',
    number_of_pages: 270,
    created_at: new Date(),
    updated_at: new Date()
  })
  book30.setCategories([categoryPsikologi, categoryFilsafat, categoryPendidikan])

  const book31 = await Book.create({
    title: 'The Infinite Mind: Exploring Consciousness and Beyond',
    author: 'Dr. Alan Parker',
    publisher: 'Mindful Publishing',
    publication_year: 2017,
    isbn: '978-1687654321',
    number_of_pages: 320,
    created_at: new Date(),
    updated_at: new Date()
  })
  book31.setCategories([categoryPsikologi, categoryFilsafat, categorySainsAlam])

  const book32 = await Book.create({
    title: 'The Future of Work: Embracing Technological Change',
    author: 'Dr. Rebecca Johnson',
    publisher: 'Workforce Books',
    publication_year: 2019,
    isbn: '978-1798765432',
    number_of_pages: 280,
    created_at: new Date(),
    updated_at: new Date()
  })
  book32.setCategories([categoryTeknologi, categoryEkonomi, categoryPendidikan])

  const book33 = await Book.create({
    title: 'The Creative Entrepreneur: Nurturing Innovation in Business',
    author: 'Sarah Collins',
    publisher: 'Innovation Press',
    publication_year: 2016,
    isbn: '978-1632908765',
    number_of_pages: 250,
    created_at: new Date(),
    updated_at: new Date()
  })
  book33.setCategories([categorySeniDanMusik, categoryPengembanganDiri])

  const book34 = await Book.create({
    title: 'The Quantum World: Unraveling the Mysteries of Particle Physics',
    author: 'Dr. Christopher Lee',
    publisher: 'Quantum Publications',
    publication_year: 2018,
    isbn: '978-1543210987',
    number_of_pages: 300,
    created_at: new Date(),
    updated_at: new Date()
  })
  book34.setCategories([categorySainsAlam, categoryFilsafat, categoryTeknologi])

  const book35 = await Book.create({
    title: 'The Nature of Reality: Exploring Quantum Mechanics',
    author: 'Dr. Evelyn Adams',
    publisher: 'Reality Press',
    publication_year: 2015,
    isbn: '978-1623456982',
    number_of_pages: 270,
    created_at: new Date(),
    updated_at: new Date()
  })
  book35.setCategories([categorySainsAlam, categoryFilsafat, categoryPendidikan])

  const book36 = await Book.create({
    title: 'The Power of Compassion: Transforming Lives Through Kindness',
    author: 'Lily Johnson',
    publisher: 'Compassion Books',
    publication_year: 2013,
    isbn: '978-1456782345',
    number_of_pages: 220,
    created_at: new Date(),
    updated_at: new Date()
  })
  book36.setCategories([categoryPsikologi, categoryPengembanganDiri])

  const book37 = await Book.create({
    title: 'The Global Citizen: Navigating Cultural Diversity',
    author: 'Dr. Michael Brown',
    publisher: 'Global Harmony Publications',
    publication_year: 2017,
    isbn: '978-1635498712',
    number_of_pages: 280,
    created_at: new Date(),
    updated_at: new Date()
  })
  book37.setCategories([categorySainsSosial, categoryFilsafat, categoryPolitik])

  const book38 = await Book.create({
    title: 'The Age of Exploration: Discovering New Worlds',
    author: 'Victoria Turner',
    publisher: 'Exploration Press',
    publication_year: 2014,
    isbn: '978-1627364092',
    number_of_pages: 260,
    created_at: new Date(),
    updated_at: new Date()
  })
  book38.setCategories([categorySejarahDunia, categoryPendidikan, categorySainsAlam])

  const book39 = await Book.create({
    title: 'The Digital Revolution: Transforming Industries and Societies',
    author: 'Dr. Andrew Mitchell',
    publisher: 'Digital Dynamics',
    publication_year: 2016,
    isbn: '978-1638907654',
    number_of_pages: 290,
    created_at: new Date(),
    updated_at: new Date()
  })
  book39.setCategories([categoryTeknologi, categorySainsSosial, categoryEkonomi])

  const book40 = await Book.create({
    title: 'The Creative Mind: Cultivating Imagination and Innovation',
    author: 'Emily Roberts',
    publisher: 'Creative Insights',
    publication_year: 2018,
    isbn: '978-1789345678',
    number_of_pages: 270,
    created_at: new Date(),
    updated_at: new Date()
  })
  book40.setCategories([categorySeniDanMusik, categoryPsikologi, categoryPendidikan])

  const book41 = await Book.create({
    title: 'The Age of Connection: Embracing the Digital Era',
    author: 'Dr. Samantha White',
    publisher: 'Connectivity Books',
    publication_year: 2019,
    isbn: '978-1798765432',
    number_of_pages: 320,
    created_at: new Date(),
    updated_at: new Date()
  })
  book41.setCategories([categoryTeknologi, categorySainsSosial, categoryFilsafat])

  const book42 = await Book.create({
    title: 'The Quantum Revolution: Unlocking the Secrets of Quantum Computing',
    author: 'Dr. Benjamin Hayes',
    publisher: 'Quantum Computing Press',
    publication_year: 2020,
    isbn: '978-1632908765',
    number_of_pages: 300,
    created_at: new Date(),
    updated_at: new Date()
  })
  book42.setCategories([categoryTeknologi, categoryFilsafat, categorySainsAlam])

  const book43 = await Book.create({
    title: 'The Mindful Leader: Nurturing Emotional Intelligence in Leadership',
    author: 'Emma Thompson',
    publisher: 'Leadership Press',
    publication_year: 2018,
    isbn: '978-1623456982',
    number_of_pages: 280,
    created_at: new Date(),
    updated_at: new Date()
  })
  book43.setCategories([categoryPsikologi, categoryPengembanganDiri])

  const book44 = await Book.create({
    title: 'The New Renaissance: Innovations in Arts and Culture',
    author: 'Dr. Adrian Bennett',
    publisher: 'Renaissance Publishing',
    publication_year: 2017,
    isbn: '978-1456782345',
    number_of_pages: 250,
    created_at: new Date(),
    updated_at: new Date()
  })
  book44.setCategories([categorySeniDanMusik, categoryTeknologi, categorySejarahDunia])

  const book45 = await Book.create({
    title: 'The Ethics of AI: Navigating the Moral Landscape of Artificial Intelligence',
    author: 'Dr. Sophia Miller',
    publisher: 'Ethical Insights',
    publication_year: 2021,
    isbn: '978-1543210987',
    number_of_pages: 270,
    created_at: new Date(),
    updated_at: new Date()
  })
  book45.setCategories([categoryTeknologi, categoryFilsafat, categorySainsSosial])

  const book46 = await Book.create({
    title: 'The Resilient Mind: Building Mental Toughness in the Face of Adversity',
    author: 'Dr. Alex Turner',
    publisher: 'Resilience Books',
    publication_year: 2019,
    isbn: '978-1789345678',
    number_of_pages: 260,
    created_at: new Date(),
    updated_at: new Date()
  })
  book46.setCategories([categoryPsikologi, categoryPengembanganDiri, categoryKesehatanDanKedokteran])

  const book47 = await Book.create({
    title: 'The Green Revolution: Sustainable Living in the Modern World',
    author: 'Dr. Emily Green',
    publisher: 'EcoLiving Publications',
    publication_year: 2016,
    isbn: '978-1635498712',
    number_of_pages: 290,
    created_at: new Date(),
    updated_at: new Date()
  })
  book47.setCategories([categoryAlamDanLingkungan, categoryTeknologi, categoryPengembanganDiri])

  const book48 = await Book.create({
    title: 'The Mindful Athlete: Achieving Peak Performance Through Mental Training',
    author: 'Michael Johnson',
    publisher: "Athlete's Edge",
    publication_year: 2015,
    isbn: '978-1627364092',
    number_of_pages: 280,
    created_at: new Date(),
    updated_at: new Date()
  })
  book48.setCategories([categoryOlahraga, categoryPsikologi, categoryPengembanganDiri])

  const book49 = await Book.create({
    title: 'The Age of Biotechnology: Transforming Medicine and Agriculture',
    author: 'Dr. Olivia Parker',
    publisher: 'BioTech Books',
    publication_year: 2022,
    isbn: '978-1638907654',
    number_of_pages: 310,
    created_at: new Date(),
    updated_at: new Date()
  })
  book49.setCategories([categoryKesehatanDanKedokteran, categoryPertanian, categoryTeknologi])

  const book50 = await Book.create({
    title: 'The Infinite Cosmos: Exploring the Universe\'s Greatest Mysteries',
    author: 'Dr. Robert Anderson',
    publisher: 'Cosmos Explorations',
    publication_year: 2020,
    isbn: '978-1789065432',
    number_of_pages: 320,
    created_at: new Date(),
    updated_at: new Date()
  })
  book50.setCategories([categorySainsAlam, categoryFilsafat, categoryPendidikan])
}