import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { BASE_URL, API_KEY } from "../config";
import { useQuery } from "react-query";
import axios from "axios";

function Home() {
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
                      alt={tvSeries.original_title || tvSeries.original_name}
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
}

export default Home;
