export type IMovieData = {
  id: number;
  title: string;
  original_title: string;
  original_name: string;
  tagline: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  production_companies: {
    id: number;
    name: string;
  }[];
  runtime: number;
  genres: {
    id: number;
    name: string;
  }[];
};

export type IMovieType = {
  movie: IMovieData;
};
