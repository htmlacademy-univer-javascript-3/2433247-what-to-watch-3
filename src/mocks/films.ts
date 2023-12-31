import MediaInfo from '../types/media-info';
import MediaType from '../types/media-type';

const MediaList: ReadonlyArray<MediaInfo> = [
  {
    id: '1',
    title: 'The Grand Budapest Hotel',
    releaseDate: '$release_date of "The Grand Budapest Hotel"',
    director: ['$director of "The Grand Budapest Hotel"'],
    cast: ['$cast_member of "The Grand Budapest Hotel"'],
    description: '"The Grand Budapest Hotel" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    poster: 'img/the-grand-budapest-hotel-poster.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '2',
    title: 'Aviator',
    releaseDate: '$release_date of "Aviator"',
    director: ['$director of "Aviator"'],
    cast: ['$cast_member of "Aviator"'],
    description: '"Aviator" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/aviator.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '3',
    title: 'Bohemian Rhapsody',
    releaseDate: '$release_date of "Bohemian Rhapsody"',
    director: ['$director of "Bohemian Rhapsody"'],
    cast: ['$cast_member of "Bohemian Rhapsody"'],
    description: '"Bohemian Rhapsody" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/bohemian-rhapsody.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '4',
    title: 'Dardjeeling Limited',
    releaseDate: '$release_date of "Dardjeeling Limited"',
    director: ['$director of "Dardjeeling Limited"'],
    cast: ['$cast_member of "Dardjeeling Limited"'],
    description: '"Dardjeeling Limited" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/dardjeeling-limited.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '5',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    releaseDate: '$release_date of "Fantastic Beasts: The Crimes of Grindelwald"',
    director: ['$director of "Fantastic Beasts: The Crimes of Grindelwald"'],
    cast: ['$cast_member of "Fantastic Beasts: The Crimes of Grindelwald"'],
    description: '"Fantastic Beasts: The Crimes of Grindelwald" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '6',
    title: 'Johnny English',
    releaseDate: '$release_date of "Johnny English"',
    director: ['$director of "Johnny English"'],
    cast: ['$cast_member of "Johnny English"'],
    description: '"Johnny English" $movie_description',
    score: 0,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/johnny-english.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '7',
    title: 'Macbeth',
    releaseDate: '$release_date of "Macbeth"',
    director: ['$director of "Macbeth"'],
    cast: ['$cast_member of "Macbeth"'],
    description: '"Macbeth" $movie_description',
    score: 7,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/macbeth.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '8',
    title: 'Midnight Special',
    releaseDate: '$release_date of "Midnight Special"',
    director: ['$director of "Midnight Special"'],
    cast: ['$cast_member of "Midnight Special"'],
    description: '"Midnight Special" $movie_description',
    score: 5,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/midnight-special.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '9',
    title: 'Mindhunter',
    releaseDate: '$release_date of "Mindhunter"',
    director: ['$director of "Mindhunter"'],
    cast: ['$cast_member of "Mindhunter"'],
    description: '"Mindhunter" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Series,
    preview: 'img/mindhunter.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '10',
    title: 'Moonrise Kingdom',
    releaseDate: '$release_date of "Moonrise Kingdom"',
    director: ['$director of "Moonrise Kingdom"'],
    cast: ['$cast_member of "Moonrise Kingdom"'],
    description: '"Moonrise Kingdom" $movie_description',
    score: 3,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/moonrise-kingdom.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '11',
    title: 'No Country for Old Men',
    releaseDate: '$release_date of "No Country for Old Men"',
    director: ['Ethan Coen', 'Joel Coen'],
    cast: ['$cast_member of "No Country for Old Men"'],
    description: '"No Country for Old Men" $movie_description',
    score: 10,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/no-country-for-old-men.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '12',
    title: 'Orlando',
    releaseDate: '$release_date of "Orlando"',
    director: ['$director of "Orlando"'],
    cast: ['$cast_member of "Orlando"'],
    description: '"Orlando" $movie_description',
    score: 1,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/orlando.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '13',
    title: 'Pulp Fiction',
    releaseDate: '$release_date of "Pulp Fiction"',
    director: ['$director of "Pulp Fiction"'],
    cast: ['$cast_member of "Pulp Fiction"'],
    description: '"Pulp Fiction" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/pulp-fiction.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '14',
    title: 'Revenant',
    releaseDate: '$release_date of "Revenant"',
    director: ['$director of "Revenant"'],
    cast: ['$cast_member of "Revenant"'],
    description: '"Revenant" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/revenant.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '15',
    title: 'Seven Years in Tibet',
    releaseDate: '$release_date of "Seven Years in Tibet"',
    director: ['$director of "Seven Years in Tibet"'],
    cast: ['$cast_member of "Seven Years in Tibet"'],
    description: '"Seven Years in Tibet" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/seven-years-in-tibet.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '16',
    title: 'Shutter Island',
    releaseDate: '$release_date of "Shutter Island"',
    director: ['$director of "Shutter Island"'],
    cast: ['$cast_member of "Shutter Island"'],
    description: '"Shutter Island" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/shutter-island.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '17',
    title: 'Snatch',
    releaseDate: '$release_date of "Snatch"',
    director: ['$director of "Snatch"'],
    cast: ['$cast_member of "Snatch"'],
    description: '"Snatch" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/snatch.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '18',
    title: 'War of the Worlds',
    releaseDate: '$release_date of "War of the Worlds"',
    director: ['$director of "War of the Worlds"'],
    cast: ['$cast_member of "War of the Worlds"'],
    description: '"War of the Worlds" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/war-of-the-worlds.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '19',
    title: 'We Need to Talk About Kevin',
    releaseDate: '$release_date of "We Need to Talk About Kevin"',
    director: ['$director of "We Need to Talk About Kevin"'],
    cast: ['$cast_member of "We Need to Talk About Kevin"'],
    description: '"We Need to Talk About Kevin" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/we-need-to-talk-about-kevin.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: '20',
    title: 'What We Do in the Shadows',
    releaseDate: '$release_date of "What We Do in the Shadows"',
    director: ['$director of "What We Do in the Shadows"'],
    cast: ['$cast_member of "What We Do in the Shadows"'],
    description: '"What We Do in the Shadows" $movie_description',
    score: 9,
    ratings: 343,
    type: MediaType.Movie,
    preview: 'img/what-we-do-in-the-shadows.jpg',
    mediaLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
];

export {MediaList as mediaList};
