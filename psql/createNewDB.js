const db = require("../models");
const page = 'createNewDB';
const movieDb = [
  {
    "movie_id": 11,
    "title": "Star Wars",
    "budget": 11000000,
    "homepage": "http://www.starwars.com/films/star-wars-episode-iv-a-new-hope",
    "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    "popularity": 126.393695,
    "release_date": "1977-05-25",
    "revenue": 775398007,
    "runtime": 121
  },
  {
    "movie_id": 12,
    "title": "Finding Nemo",
    "budget": 94000000,
    "homepage": "http://movies.disney.com/finding-nemo",
    "overview": "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
    "popularity": 85.688789,
    "release_date": "2003-05-30",
    "revenue": 940335536,
    "runtime": 100
  },
  {
    "movie_id": 13,
    "title": "Forrest Gump",
    "budget": 55000000,
    "homepage": "",
    "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.",
    "popularity": 138.133331,
    "release_date": "1994-07-06",
    "revenue": 677945399,
    "runtime": 142
  },
  {
    "movie_id": 14,
    "title": "American Beauty",
    "budget": 15000000,
    "homepage": "http://www.dreamworks.com/ab/",
    "overview": "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.",
    "popularity": 80.878605,
    "release_date": "1999-09-15",
    "revenue": 356296601,
    "runtime": 122
  },
  {
    "movie_id": 85,
    "title": "Raiders of the Lost Ark",
    "budget": 18000000,
    "homepage": "http://www.indianajones.com",
    "overview": "When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.",
    "popularity": 68.159596,
    "release_date": "1981-06-12",
    "revenue": 389925971,
    "runtime": 115
  },
  {
    "movie_id": 87,
    "title": "Indiana Jones and the Temple of Doom",
    "budget": 28000000,
    "homepage": "http://www.indianajones.com",
    "overview": "After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees – and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.",
    "popularity": 66.976776,
    "release_date": "1984-05-23",
    "revenue": 333000000,
    "runtime": 118
  },
  {
    "movie_id": 89,
    "title": "Indiana Jones and the Last Crusade",
    "budget": 48000000,
    "homepage": "http://www.indianajones.com/crusade",
    "overview": "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
    "popularity": 80.972475,
    "release_date": "1989-05-24",
    "revenue": 474171806,
    "runtime": 127
  },
  {
    "movie_id": 90,
    "title": "Beverly Hills Cop",
    "budget": 15000000,
    "homepage": "",
    "overview": "Tough-talking Detroit cop Axel Foley heads to the rarified world of Beverly Hills in his beat-up Chevy Nova to investigate a friend's murder. But soon, he realizes he's stumbled onto something much more complicated. Bungling rookie detective Billy Rosewood joins the fish-out-of-water Axel and shows him the West Los Angeles ropes.",
    "popularity": 29.843818,
    "release_date": "1984-11-29",
    "revenue": 316360478,
    "runtime": 105
  },
  {
    "movie_id": 95,
    "title": "Armageddon",
    "budget": 140000000,
    "homepage": "",
    "overview": "When an asteroid threatens to collide with Earth, NASA honcho Dan Truman determines the only way to stop it is to drill into its surface and detonate a nuclear bomb. This leads him to renowned driller Harry Stamper, who agrees to helm the dangerous space mission provided he can bring along his own hotshot crew. Among them is the cocksure A.J. who Harry thinks isn't good enough for his daughter, until the mission proves otherwise.",
    "popularity": 58.485967,
    "release_date": "1998-07-01",
    "revenue": 553799566,
    "runtime": 151
  },
  {
    "movie_id": 96,
    "title": "Beverly Hills Cop II",
    "budget": 20000000,
    "homepage": "",
    "overview": "Detroit cop, Axel Foley heads for the land of sunshine and palm trees to find out who shot police Captain Andrew Bogomil. Thanks to a couple of old friends, Axel's investigation uncovers a series of robberies masterminded by a heartless weapons kingpin – and the chase is on.",
    "popularity": 25.284360,
    "release_date": "1987-05-18",
    "revenue": 299965036,
    "runtime": 100
  },
  {
    "movie_id": 98,
    "title": "Gladiator",
    "budget": 103000000,
    "homepage": "",
    "overview": "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders. Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences. His battle skills serve him well, and he becomes one of the most famous and admired men to fight in the Colosseum. Determined to avenge himself against the man who took away his freedom and laid waste to his family, Maximus believes that he can use his fame and skill in the ring to avenge the loss of his family and former glory. As the gladiator begins to challenge his rule, Commodus decides to put his own fighting mettle to the test by squaring off with Maximus in a battle to the death.",
    "popularity": 95.301296,
    "release_date": "2000-05-01",
    "revenue": 457640427,
    "runtime": 155
  },
  {
    "movie_id": 105,
    "title": "Back to the Future",
    "budget": 19000000,
    "homepage": "http://www.backtothefuture.com/movies/backtothefuture1",
    "overview": "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
    "popularity": 76.603233,
    "release_date": "1985-07-03",
    "revenue": 381109762,
    "runtime": 116
  },
  {
    "movie_id": 106,
    "title": "Predator",
    "budget": 18000000,
    "homepage": "",
    "overview": "Dutch and his group of commandos are hired by the CIA to rescue downed airmen from guerillas in a Central American jungle. The mission goes well but as they return they find that something is hunting them. Nearly invisible, it blends in with the forest, taking trophies from the bodies of its victims as it goes along. Occasionally seeing through its eyes, the audience sees it is an intelligent alien hunter, hunting them for sport, killing them off one at a time.",
    "popularity": 50.009408,
    "release_date": "1987-06-11",
    "revenue": 98235548,
    "runtime": 107
  },
  {
    "movie_id": 117,
    "title": "The Untouchables",
    "budget": 25000000,
    "homepage": "",
    "overview": "Young Treasury Agent Elliot Ness arrives in Chicago and is determined to take down Al Capone, but it's not going to be easy because Capone has the police in his pocket. Ness meets Jimmy Malone, a veteran patrolman and probably the most honorable one on the force. He asks Malone to help him get Capone, but Malone warns him that if he goes after Capone, he is going to war.",
    "popularity": 38.272889,
    "release_date": "1987-06-02",
    "revenue": 76270454,
    "runtime": 119
  },
  {
    "movie_id": 118,
    "title": "Charlie and the Chocolate Factory",
    "budget": 150000000,
    "homepage": "https://www.warnerbros.com/charlie-and-chocolate-factory",
    "overview": "A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker.",
    "popularity": 53.905592,
    "release_date": "2005-07-13",
    "revenue": 474968763,
    "runtime": 115
  },
  {
    "movie_id": 120,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "budget": 93000000,
    "homepage": "http://www.lordoftherings.net/",
    "overview": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    "popularity": 138.049577,
    "release_date": "2001-12-18",
    "revenue": 871368364,
    "runtime": 178
  },
  {
    "movie_id": 121,
    "title": "The Lord of the Rings: The Two Towers",
    "budget": 79000000,
    "homepage": "http://www.lordoftherings.net/",
    "overview": "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
    "popularity": 106.914973,
    "release_date": "2002-12-18",
    "revenue": 926287400,
    "runtime": 179
  },
  {
    "movie_id": 122,
    "title": "The Lord of the Rings: The Return of the King",
    "budget": 94000000,
    "homepage": "http://www.lordoftherings.net",
    "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
    "popularity": 123.630332,
    "release_date": "2003-12-01",
    "revenue": 1118888979,
    "runtime": 201
  }
]
const createMovies = async () => {
  const func = 'createMovies';
  try {
    // Save Query in database
    const data = await db.movie.bulkCreate(movieDb);    // const data = await sequelize.query('SELECT title FROM movies.movie')
  } catch (e) {
    console.error(`${page}, ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).json();
  }
};
const foodDb = [
  {
    id: 10,
    name: "Strawberry",
    protein: 0,
    calories: 15,
    fat: 0,
    size: 1,
    portion: 'unit',
    category: 'Fruits',
  },
  {
    id: 11,
    name: "Egg",
    protein: 10,
    calories: 75,
    fat: 5,
    size: 1,
    portion: 'unit',
    category: 'Protein',
  },
  {
    id: 12,
    name: "Salomon",
    protein: 29,
    calories: 43,
    fat: 7,
    size: 100,
    portion: 'g',
    category: 'Fish',
  },
  {
    id: 13,
    name: "Tuna in oil",
    protein: 23,
    calories: 243,
    fat: 2,
    size: 100,
    portion: 'g',
    category: 'Fish',
  },
  {
    id: 14,
    name: "Tuna in water",
    protein: 25,
    calories: 176,
    fat: 5,
    size: 100,
    portion: 'g',
    category: 'Fish',
  },
  {
    id: 15,
    name: "Shrimp dried",
    protein: 12,
    calories: 47,
    fat: 14,
    size: 50,
    portion: 'g',
    category: 'Fish',
  },
  {
    id: 16,
    name: "Anchovy canned",
    protein: 16,
    calories: 69,
    fat: 10,
    size: 50,
    portion: 'g',
    category: 'Fish',
  },
  {
    id: 17,
    name: "Shrimp",
    protein: 15,
    calories: 65,
    fat: 14,
    size: 50,
    portion: 'g',
    category: 'Fish',
  },
  {
    id: 18,
    name: "KFC chicken wings",
    protein: 32,
    calories: 354,
    fat: 26,
    size: 100,
    portion: 'g',
    category: 'Fast Food',
  },
  {
    id: 19,
    name: "Mcdonalds Chicken McNUGGETS",
    protein: 15,
    calories: 220,
    fat: 17,
    size: 50,
    portion: 'g',
    category: 'Fast Food',
  },
  {
    id: 20,
    name: "Mcdonalds double Cheeseburger",
    protein: 26,
    calories: 540,
    fat: 38,
    size: 100,
    portion: 'g',
    category: 'Fast Food',
  },
  {
    id: 21,
    name: "Pizza",
    protein: 13,
    calories: 210,
    fat: 24,
    size: 1,
    portion: 'unit',
    category: 'Fast Food',
  }
]
const createFood = async () => {
  const func = 'createFood';
  try {
    // Save Query in database
    const data = await db.food.bulkCreate(foodDb);    // const data = await sequelize.query('SELECT title FROM movies.movie')
  } catch (e) {
    console.error(`${page}, ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).json();
  }
};
const actorsDb = [
  {
    id: 10,
    name: "BRAD PITT",
    age: 57,
    gender: 'Male',
    popular: 97,
    birthday: '1985-04-16',
    movies: 23,
    valued: 38000000
  },
  {
    id: 11,
    name: "ROBERT DOWNEY JR.",
    age: 46,
    gender: 'Male',
    popular: 75,
    birthday: '1976-08-26',
    movies: 23,
    valued: 16000000
  },
  {
    id: 12,
    name: "CHRIS EVANS",
    age: 38,
    gender: 'Male',
    popular: 89,
    birthday: '1985-03-06',
    valued: 24000000
  },
  {
    id: 13,
    name: "JENNIFER LAWRENCE",
    age: 39,
    gender: 'Female',
    popular: 80,
    birthday: '1990-07-26',
    valued: 4500000
  },
  {
    id: 14,
    name: "GEORGE CLOONEY",
    age: 61,
    gender: 'Male',
    popular: 88,
    birthday: '1974-01-12',
    valued: 32800000
  },
  {
    id: 15,
    name: "JOHNNY DEPP",
    age: 64,
    gender: 'Male',
    popular: 92,
    birthday: '1963-02-02',
    valued: 30400000
  },
  {
    id: 16,
    name: "MARGOT ROBBIE",
    age: 37,
    gender: 'Female',
    popular: 82,
    birthday: '1991-03-01',
    valued: 19500000
  },
  {
    id: 17,
    name: "RYAN REYNOLDS",
    age: 45,
    gender: 'Male',
    popular: 90,
    birthday: '1981-07-08',
    valued: 24800000
  },
  {
    id: 18,
    name: "SCARLETT JOHANSSON",
    age: 40,
    gender: 'Female',
    popular: 81,
    birthday: '1981-10-08',
    valued: 22500000
  },
  {
    id: 19,
    name: "CARA DELEVINGNE",
    age: 32,
    gender: 'Female',
    popular: 65,
    birthday: '1993-10-10',
    valued: 9500000
  },
  {
    id: 20,
    name: "CHARLIZE THERON",
    age: 45,
    gender: 'Female',
    popular: 71,
    birthday: '1978-06-18',
    valued: 29250000
  },
  {
    id: 21,
    name: "BRADLEY COOPER",
    age: 41,
    gender: 'Male',
    popular: 67,
    birthday: '1981-07-08',
    valued: 17000000
  }
]
const createActors = async (req, res) => {
  const func = 'createActors';
  try {
    // Save Query in database
    const data = await db.actor.bulkCreate(actorsDb);    // const data = await sequelize.query('SELECT title FROM movies.movie')

  } catch (e) {
    console.error(`${page}, ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).json();
  }
};

