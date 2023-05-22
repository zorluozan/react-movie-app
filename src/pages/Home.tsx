import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Grid,
  FormControl,
  Input,
  InputAdornment,
  Container,
} from "@mui/material";
import { BASE_URL, API_KEY } from "../config";
import { useQuery } from "react-query";
import axios from "axios";

const Home = () => {
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    return data.results;
  };
  const fetchTVSeries = async () => {
    const { data } = await axios.get(
      `${BASE_URL}trending/tv/day?api_key=${API_KEY}`
    );
    return data.results;
  };

  const { data: movieData } = useQuery("movies", fetchMovies);
  const { data: tvData } = useQuery("series", fetchTVSeries);

  // const queryClient = useQueryClient();
  return (
    <>
      <Container disableGutters>
        <Box sx={{ padding: "80px 0", maxWidth: "590px" }}>
          <Typography variant="h1">Movie App</Typography>
          <Typography variant="body1">
            Explore the movies and much more.
          </Typography>
          <FormControl
            fullWidth
            sx={{
              border: "1px solid #323B54",
              borderRadius: "12px",
              marginTop: "24px",
            }}
            variant="standard"
          >
            <Input
              id="search"
              placeholder="Search Movies or TV Shows"
              startAdornment={
                <InputAdornment position="start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                      stroke="#475069"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 22L20 20"
                      stroke="#475069"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Typography
          variant="h4"
          sx={{
            color: "#767E94",
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}
        >
          Trending Movies ({movieData?.length})
        </Typography>

        <Grid
          container
          rowSpacing={2}
          columnSpacing={3}
          sx={{ marginBottom: "120px" }}
        >
          {Object.keys(movieData || {}).map((key) => {
            const movie = movieData[key];
            const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
            return (
              <Grid item xs={6} md={3} key={movie.id}>
                <Card key={movie.id} sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      backgroundColor: "#000000A6",
                      padding: "4px 8px",
                      color: "#FFAD49",
                      borderRadius: "8px",
                      backdropFilter: "blur(4px)",
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      zIndex: "5",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="../assets/star.png"
                      alt="Star"
                      style={{ marginRight: "4px" }}
                    />
                    {movie.vote_average.toFixed(1)}
                  </Box>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={imageUrl}
                      alt={movie.original_title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#EBEEF5", letterSpacing: "0.02em" }}
                      >
                        {movie.original_title || movie.original_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Typography
          variant="h4"
          sx={{
            color: "#767E94",
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}
        >
          Trending TV Series ({tvData?.length})
        </Typography>

        <Grid
          container
          rowSpacing={2}
          columnSpacing={3}
          sx={{ marginBottom: "120px" }}
        >
          {Object.keys(tvData || {}).map((key) => {
            const tvSeries = tvData[key];
            const imageUrl = `https://image.tmdb.org/t/p/w500/${tvSeries.backdrop_path}`;
            return (
              <Grid item xs={6} md={3} key={tvSeries.id}>
                <Card key={tvSeries.id} sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      backgroundColor: "#000000A6",
                      padding: "4px 8px",
                      color: "#FFAD49",
                      borderRadius: "8px",
                      backdropFilter: "blur(4px)",
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      zIndex: "5",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="../assets/star.png"
                      alt="Star"
                      style={{ marginRight: "4px" }}
                    />
                    {tvSeries.vote_average.toFixed(1)}
                  </Box>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={imageUrl}
                      alt={tvSeries.original_title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#EBEEF5", letterSpacing: "0.02em" }}
                      >
                        {tvSeries.original_title || tvSeries.original_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
