import {
  Box,
  Typography,
  Grid,
  Container,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { BASE_URL, API_KEY } from "../config";
import { useQuery } from "react-query";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import SeriesCard from "../components/SeriesCard";
import { useState } from "react";

function Home() {
  const [trendingMovieType, setTrendingMovieType] = useState<string>("week");
  const [trendingSeriesType, setTrendingSeriesType] = useState<string>("week");

  const handleMovieChange = (event: SelectChangeEvent) => {
    setTrendingMovieType(event.target.value as string);
  };

  const handleSeriesChange = (event: SelectChangeEvent) => {
    setTrendingSeriesType(event.target.value as string);
  };

  const fetchMovies = async (type: string) => {
    const { data } = await axios.get(
      `${BASE_URL}trending/movie/${type}?api_key=${API_KEY}`
    );
    return data.results;
  };

  const fetchTVSeries = async (type: string) => {
    const { data } = await axios.get(
      `${BASE_URL}trending/tv/${type}?api_key=${API_KEY}`
    );
    return data.results;
  };

  const { data: movieData } = useQuery(["movies", trendingMovieType], () =>
    fetchMovies(trendingMovieType)
  );
  const { data: tvData } = useQuery(["series", trendingSeriesType], () =>
    fetchTVSeries(trendingSeriesType)
  );

  // const queryClient = useQueryClient();
  return (
    <>
      <Container disableGutters>
        <Box sx={{ padding: "80px 0", maxWidth: "590px" }}>
          <Typography variant="h1">Movie App</Typography>
          <Typography variant="body1">
            Explore the movies and much more.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#767E94",
              letterSpacing: "-0.02em",
            }}
          >
            Trending Movies ({movieData?.length})
          </Typography>

          <FormControl variant="filled" sx={{ flexBasis: "20%" }}>
            <Select
              labelId="trendingType"
              id="trendingType"
              value={trendingMovieType}
              label="Trending Type"
              onChange={handleMovieChange}
              sx={{ color: "#767E94" }}
            >
              <MenuItem value="week">Weekly</MenuItem>
              <MenuItem value="day">Daily</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid
          container
          rowSpacing={2}
          columnSpacing={3}
          sx={{ marginBottom: "120px" }}
        >
          {Object.keys(movieData || {}).map((key) => {
            const movie = movieData[key];
            return (
              <Grid item xs={6} md={3} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            );
          })}
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#767E94",
              letterSpacing: "-0.02em",
            }}
          >
            Trending TV Series ({tvData?.length})
          </Typography>

          <FormControl sx={{ flexBasis: "20%" }}>
            <Select
              labelId="trendingType"
              id="trendingType"
              value={trendingSeriesType}
              label="Trending Type"
              onChange={handleSeriesChange}
              sx={{ color: "#767E94" }}
            >
              <MenuItem value="week">Weekly</MenuItem>
              <MenuItem value="day">Daily</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid
          container
          rowSpacing={2}
          columnSpacing={3}
          sx={{ marginBottom: "120px" }}
        >
          {Object.keys(tvData || {}).map((key) => {
            const tvSeries = tvData[key];
            return (
              <Grid item xs={6} md={3} key={tvSeries.id}>
                <SeriesCard series={tvSeries} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
