export type MovieType = {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
  release_date: number;
  runtime: number;
  genres: Array<{ id: number; name: string }>;
  popularity: number;
};

export type TVShowType = {
  id: number;
  poster_path: string;
  original_name: string;
  overview: string;
  vote_average: number;
  first_air_date: number;
  genres: Array<{ id: number; name: string }>;
  popularity: number;
};

export type MovieOrTVShowType = {
  type: 'tvshow' | 'movie';
  id: number;
  name: string;
  genres: Array<{ id: number; name: string }>;
  popularity: number;
  poster_path: string;
}

export type MovieCardData = Omit<
    MovieOrTVShowType,
    "genres" | "popularity"
    >;