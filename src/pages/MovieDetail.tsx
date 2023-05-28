import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL, API_KEY } from "../config";
import {
  Box,
  Container,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import { IMovieData } from "../@types/movie";

function MovieDetail() {
  const [movieData, setMovieData] = useState<IMovieData | null>(null);
  let { movieId } = useParams();

  const getMovieById = async (): Promise<IMovieData> => {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
    );
    return data;
  };

  const { data, isLoading } = useQuery<IMovieData>("movieDetail", getMovieById);

  useEffect(() => {
    if (data) {
      setMovieData(data);
    }
  }, [data]);

  const posterUrl = `https://image.tmdb.org/t/p/w500/${movieData?.poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/w500/${movieData?.backdrop_path}`;

  return (
    <Container disableGutters>
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        movieData && (
          <Box sx={{ padding: "40px 0 160px 0" }}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "32px",
              }}
            >
              <img
                style={{ width: "100%" }}
                src={backdropUrl}
                alt={movieData?.title}
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                top: "-80px",
                left: "20px",
                background: "rgba(32, 40, 62, 0.8)",
                backdropFilter: "blur(12px)",
                borderRadius: "24px",
                maxWidth: "fit-content",
                padding: "40px",
              }}
            >
              <Typography variant="h4" sx={{ color: "#fff" }}>
                {movieData?.original_title}
              </Typography>
            </Box>
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "32px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={posterUrl}
                    alt={movieData?.title}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ marginBottom: "24px" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#EBEEF5",
                      marginBottom: "24px",
                    }}
                  >
                    {movieData?.tagline}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "#8E95A9",
                      lineHeight: "32px",
                      marginBottom: "24px",
                    }}
                  >
                    {movieData?.overview}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#000000A6",
                    padding: "4px 8px",
                    color: "#FFAD49",
                    borderRadius: "8px",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    width: "fit-content",
                    marginBottom: "24px",
                  }}
                >
                  <img
                    src="../assets/star.png"
                    alt="Star"
                    style={{ marginRight: "4px" }}
                  />
                  {movieData?.vote_average.toFixed(1)}
                </Box>

                <Box sx={{ marginBottom: "24px" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#767E94",
                      marginBottom: "8px",
                    }}
                  >
                    Release Date
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "#C3C8D4",
                    }}
                  >
                    {movieData?.release_date}
                  </Typography>
                </Box>

                <Box sx={{ marginBottom: "24px" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#767E94",
                      marginBottom: "8px",
                    }}
                  >
                    Production Companies
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "#C3C8D4",
                    }}
                  >
                    {movieData?.production_companies.map(
                      (company: any, index: number) => (
                        <span key={company.id}>
                          {company.name}
                          {index < movieData.production_companies.length - 1 &&
                            ", "}
                        </span>
                      )
                    )}
                  </Typography>
                </Box>

                <Box sx={{ marginBottom: "24px" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#767E94",
                      marginBottom: "8px",
                    }}
                  >
                    Run time
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "#C3C8D4",
                    }}
                  >
                    {movieData?.runtime} min
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#767E94",
                      marginBottom: "8px",
                    }}
                  >
                    Genres
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "#C3C8D4",
                    }}
                    variant="body1"
                  >
                    {movieData?.genres.map((genre: any, index: number) => (
                      <span key={genre.id}>
                        {genre.name}
                        {index < movieData.genres.length - 1 && ", "}
                      </span>
                    ))}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )
      )}
    </Container>
  );
}

export default MovieDetail;
