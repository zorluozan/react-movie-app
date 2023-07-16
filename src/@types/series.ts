export type ISeriesData = {
  id: number;
  name: string;
  original_name: string;
  tagline: string;
  overview: string;
  first_air_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  status: string;
  production_companies: {
    id: number;
    name: string;
  }[];
  genres: {
    id: number;
    name: string;
  }[];
};

export type ISeriesType = {
  series: ISeriesData;
};
