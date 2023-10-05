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

  const categorySeniMusik = await Category.create({
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

  const categoryAlamLingkungan = await Category.create({
    title: 'Alam dan Lingkungan',
    description: 'Buku-buku tentang lingkungan alam dan pelestarian alam.',
    created_at: new Date(),
    updated_at: new Date()
  })

  const categoryKesehatanKedokteran = await Category.create({
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

  const bookTheAlchemist = await Book.create({
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    publisher: 'HarperOne',
    publication_year: 2014,
    isbn: '9780061122415',
    number_of_page: 197,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheAlchemist.setCategories([categoryFiksi, categoryPengembanganDiri])

  const bookEducated = await Book.create({
    title: 'Educated',
    author: 'Tara Westover',
    publisher: 'Random House',
    publication_year: 2018,
    isbn: '9780399590504',
    number_of_page: 334,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookEducated.setCategories([categoryNonFiksi, categoryPendidikan])

  const bookBecoming = await Book.create({
    title: 'Becoming',
    author: 'Michelle Obama',
    publisher: 'Crown Publishing Group',
    publication_year: 2018,
    isbn: '9781524763138',
    number_of_page: 426,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookBecoming.setCategories([categoryNonFiksi])

  const bookSapiens = await Book.create({
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    publisher: 'Harper',
    publication_year: 2015,
    isbn: '9780062316097',
    number_of_page: 443,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookSapiens.setCategories([categoryNonFiksi, categorySejarahDunia])

  const bookBadBlood = await Book.create({
    title: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup',
    author: 'John Carreyrou',
    publisher: 'Knopf',
    publication_year: 2018,
    isbn: '9781524731656',
    number_of_page: 339,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookBadBlood.setCategories([categoryNonFiksi, categoryTeknologi])

  const bookWhereTheCrawdadsSing = await Book.create({
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    publisher: 'G.P. Putnam\'s Sons',
    publication_year: 2018,
    isbn: '9780735219090',
    number_of_page: 384,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookWhereTheCrawdadsSing.setCategories([categoryFiksi, categoryHiburan])

  const bookCirce = await Book.create({
    title: 'Circe',
    author: 'Madeline Miller',
    publisher: 'Little, Brown and Company',
    publication_year: 2018,
    isbn: '9780316556347',
    number_of_page: 393,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookCirce.setCategories([categoryFiksi, categorySejarahDunia])

  const bookTheSilentPatient = await Book.create({
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    publisher: 'Celadon Books',
    publication_year: 2019,
    isbn: '9781250301697',
    number_of_page: 323,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheSilentPatient.setCategories([categoryFiksi, categoryHiburan, categoryPsikologi])

  const bookAtomicHabits = await Book.create({
    title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
    publisher: 'Avery',
    publication_year: 2018,
    isbn: '9780735211292',
    number_of_page: 319,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookAtomicHabits.setCategories([categoryNonFiksi, categoryPengembanganDiri, categoryPsikologi])

  const bookTheGirlOnTheTrain = await Book.create({
    title: 'The Girl on the Train',
    author: 'Paula Hawkins',
    publisher: 'Riverhead Books',
    publication_year: 2015,
    isbn: '9781594634024',
    number_of_page: 316,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheGirlOnTheTrain.setCategories([categoryFiksi, categoryHiburan, categoryPsikologi])

  const bookDivergent = await Book.create({
    title: 'Divergent',
    author: 'Veronica Roth',
    publisher: 'Katherine Tegen Books',
    publication_year: 2011,
    isbn: '9780062024039',
    number_of_page: 487,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookDivergent.setCategories([categoryFiksi, categoryHiburan, categorySainsAlam])

  const bookTheMazeRunner = await Book.create({
    title: 'The Maze Runner',
    author: 'James Dashner',
    publisher: 'Delacorte Press',
    publication_year: 2009,
    isbn: '9780385737951',
    number_of_page: 375,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheMazeRunner.setCategories([categoryFiksi, categoryHiburan, categorySainsAlam])

  const bookTheHungerGames = await Book.create({
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    publisher: 'Scholastic Corporation',
    publication_year: 2008,
    isbn: '9780439023481',
    number_of_page: 374,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheHungerGames.setCategories([categoryFiksi, categoryHiburan, categorySejarahDunia])

  const bookGoneGirls = await Book.create({
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    publisher: 'Crown Publishing Group',
    publication_year: 2012,
    isbn: '9780307588371',
    number_of_page: 415,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookGoneGirls.setCategories([categoryFiksi, categoryHiburan])

  const bookTheHelp = await Book.create({
    title: 'The Help',
    author: 'Kathryn Stockett',
    publisher: 'Penguin Group',
    publication_year: 2009,
    isbn: '9780399155345',
    number_of_page: 451,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheHelp.setCategories([categoryFiksi, categoryHiburan, categorySejarahDunia])

  const bookTheFaultInOurStars = await Book.create({
    title: 'The Fault in Our Stars',
    author: 'John Green',
    publisher: 'Dutton Books',
    publication_year: 2012,
    isbn: '9780525478812',
    number_of_page: 313,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheFaultInOurStars.setCategories([categoryFiksi, categoryHiburan, categorySastra])

  const bookTheImmortalLifeOfHenriettaLacks = await Book.create({
    title: 'The Immortal Life of Henrietta Lacks',
    author: 'Rebecca Skloot',
    publisher: 'Crown Publishing Group',
    publication_year: 2010,
    isbn: '9781400052172',
    number_of_page: 370,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheImmortalLifeOfHenriettaLacks.setCategories([categoryNonFiksi, categorySainsAlam])

  const bookTheBookThief = await Book.create({
    title: 'The Book Thief',
    author: 'Markus Zusak',
    publisher: 'Alfred A. Knopf',
    publication_year: 2005,
    isbn: '9780375831003',
    number_of_page: 552,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheBookThief.setCategories([categoryFiksi, categoryHiburan, categorySejarahDunia, categorySastra])

  const bookTheNightCircus = await Book.create({
    title: 'The Night Circus',
    author: 'Erin Morgenstern',
    publisher: 'Doubleday',
    publication_year: 2011,
    isbn: '9780385534635',
    number_of_page: 387,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheNightCircus.setCategories([categoryFiksi, categoryHiburan, categorySejarahDunia, categorySastra])

  const bookTheGoldfinch = await Book.create({
    title: 'The Goldfinch',
    author: 'Donna Tartt',
    publisher: 'Little, Brown and Company',
    publication_year: 2013,
    isbn: '9780316055437',
    number_of_page: 771,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheGoldfinch.setCategories([categoryFiksi, categoryHiburan, categorySejarahDunia, categorySastra, categorySeniMusik])

  const bookAGameOfThrones = await Book.create({
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    publisher: 'Bantam Books',
    publication_year: 1996,
    isbn: '9780553103540',
    number_of_page: 694,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookAGameOfThrones.setCategories([categoryFiksi, categoryHiburan, categorySejarahDunia])

  const bookTheShining = await Book.create({
    title: 'The Shining',
    author: 'Stephen King',
    publisher: 'Doubleday',
    publication_year: 1977,
    isbn: '9780385121675',
    number_of_page: 447,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheShining.setCategories([categoryFiksi, categoryHiburan, categorySejarahDunia])

  const bookTheDaVinciCode = await Book.create({
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    publisher: 'Doubleday',
    publication_year: 2003,
    isbn: '9780385504201',
    number_of_page: 454,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheDaVinciCode.setCategories([categoryFiksi, categoryHiburan, categorySejarahDunia, categoryReligi])

  const bookTheRoad = await Book.create({
    title: 'The Road',
    author: 'Cormac McCarthy',
    publisher: 'Knopf',
    publication_year: 2006,
    isbn: '9780307265432',
    number_of_page: 241,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheRoad.setCategories([categoryFiksi, categoryHiburan, categorySejarahDunia, categorySastra, categorySeniMusik])

  const bookTheCuriousIncidentOfTheDogInTheNightTime = await Book.create({
    title: 'The Curious Incident of the Dog in the Night-Time',
    author: 'Mark Haddon',
    publisher: 'Doubleday',
    publication_year: 2003,
    isbn: '9780385509459',
    number_of_page: 226,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheCuriousIncidentOfTheDogInTheNightTime.setCategories([categoryFiksi, categoryHiburan, categoryPsikologi])

  const bookTheLovelyBones = await Book.create({
    title: 'The Lovely Bones',
    author: 'Alice Sebold',
    publisher: 'Little, Brown and Company',
    publication_year: 2002,
    isbn: '9780316666343',
    number_of_page: 372,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheLovelyBones.setCategories([categoryFiksi, categorySastra])

  const bookDune = await Book.create({
    title: 'Dune',
    author: 'Frank Herbert',
    publisher: 'Ace Books',
    publication_year: 1965,
    isbn: '9780441172719',
    number_of_page: 412,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookDune.setCategories([categoryFiksi, categoryHiburan, categorySainsAlam])

  const bookToKillAMockingbird = await Book.create({
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publisher: 'J.B. Lippincott & Co.',
    publication_year: 1960,
    isbn: '9780061122415',
    number_of_page: 281,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookToKillAMockingbird.setCategories([categoryFiksi, categorySejarahDunia, categorySastra])

  const book1984 = await Book.create({
    title: '1984',
    author: 'George Orwell',
    publisher: 'Secker and Warburg',
    publication_year: 1949,
    isbn: '9780451524935',
    number_of_page: 328,
    created_at: new Date(),
    updated_at: new Date()
  })
  book1984.setCategories([categoryFiksi, categoryPolitik, categorySastra])

  const bookTheGreatGatsby = await Book.create({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publisher: "Charles Scribner's Sons",
    publication_year: 1925,
    isbn: '9780743273565',
    number_of_page: 180,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheGreatGatsby.setCategories([categoryFiksi, categorySejarahDunia, categorySastra])

  const bookBraveNewWorld = await Book.create({
    title: 'Brave New World',
    author: 'Aldous Huxley',
    publisher: 'Chatto & Windus',
    publication_year: 1932,
    isbn: '9780060850524',
    number_of_page: 288,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookBraveNewWorld.setCategories([categoryFiksi, categorySainsSosial, categoryPolitik])

  const bookTheCatcherInTheRye = await Book.create({
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publisher: 'Little, Brown and Company',
    publication_year: 1951,
    isbn: '9780316769488',
    number_of_page: 277,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheCatcherInTheRye.setCategories([categoryFiksi, categorySastra, categoryPsikologi])

  const bookLordOfTheFlies = await Book.create({
    title: 'Lord of the Flies',
    author: 'William Golding',
    publisher: 'Faber and Faber',
    publication_year: 1954,
    isbn: '9780143124290',
    number_of_page: 224,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookLordOfTheFlies.setCategories([categoryFiksi, categoryPsikologi, categorySastra])

  const bookTheHobbit = await Book.create({
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    publisher: 'Allen & Unwin',
    publication_year: 1937,
    isbn: '9780345534835',
    number_of_page: 310,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheHobbit.setCategories([categoryFiksi, categoryHiburan, categorySastra])

  const bookTheLordOfTheRings = await Book.create({
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    publisher: 'Allen & Unwin',
    publication_year: 1954,
    isbn: '9780261102385',
    number_of_page: 1178,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookTheLordOfTheRings.setCategories([categoryFiksi, categoryHiburan, categorySastra])

  const bookMobyDick = await Book.create({
    title: 'Moby-Dick',
    author: 'Herman Melville',
    publisher: 'Harper & Brothers',
    publication_year: 1851,
    isbn: '9781853260087',
    number_of_page: 625,
    created_at: new Date(),
    updated_at: new Date()
  })
  bookMobyDick.setCategories([categoryFiksi, categorySejarahDunia, categorySastra])
}