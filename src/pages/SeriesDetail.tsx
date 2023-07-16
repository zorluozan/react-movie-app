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
  useTheme,
} from "@mui/material";
import { ISeriesData } from "../@types/series";

function SeriesDetail() {
  const [seriesData, setSeriesData] = useState<ISeriesData | null>(null);
  let { seriesId } = useParams();
  const theme = useTheme();

  const getSeriesById = async (): Promise<ISeriesData> => {
    const { data } = await axios.get(
      `${BASE_URL}tv/${seriesId}?api_key=${API_KEY}`
    );
    return data;
  };

  const { data, isLoading } = useQuery<ISeriesData>(
    "seriesDetail",
    getSeriesById
  );

  useEffect(() => {
    if (data) {
      setSeriesData(data);
    }
  }, [data]);

  const posterUrl = `https://image.tmdb.org/t/p/w500/${seriesData?.poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/w500/${seriesData?.backdrop_path}`;

  return (
    <Container disableGutters>
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        seriesData && (
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
                alt={seriesData?.name}
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
                {seriesData?.original_name}
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
                    alt={seriesData?.name}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ marginBottom: "24px" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "24px",
                      fontWeight: theme.typography.fontWeightBold,
                      color: theme.palette.primary.title,
                      marginBottom: "24px",
                    }}
                  >
                    {seriesData?.tagline}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "20px",
                      color: "#8E95A9",
                      lineHeight: "32px",
                      marginBottom: "24px",
                    }}
                  >
                    {seriesData?.overview}
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
                  {seriesData?.vote_average.toFixed(1)}
                </Box>

                <Box sx={{ marginBottom: "24px" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: theme.typography.fontWeightRegular,
                      color: "#767E94",
                      marginBottom: "8px",
                    }}
                  >
                    First Air Date
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: theme.typography.fontWeightRegular,
                      color: "#C3C8D4",
                    }}
                  >
                    {seriesData?.first_air_date}
                  </Typography>
                </Box>

                <Box sx={{ marginBottom: "24px" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: theme.typography.fontWeightRegular,
                      color: "#767E94",
                      marginBottom: "8px",
                    }}
                  >
                    Production Companies
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: theme.typography.fontWeightRegular,
                      color: "#C3C8D4",
                    }}
                  >
                    {seriesData?.production_companies.map(
                      (company: any, index: number) => (
                        <span key={company.id}>
                          {company.name}
                          {index <
                            seriesData?.production_companies.length - 1 && ", "}
                        </span>
                      )
                    )}
                  </Typography>
                </Box>

                <Box sx={{ marginBottom: "24px" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: theme.typography.fontWeightRegular,
                      color: "#767E94",
                      marginBottom: "8px",
                    }}
                  >
                    Status
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: theme.typography.fontWeightRegular,
                      color: "#C3C8D4",
                    }}
                  >
                    {seriesData?.status}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: theme.typography.fontWeightRegular,
                      color: "#767E94",
                      marginBottom: "8px",
                    }}
                  >
                    Genres
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: theme.typography.fontWeightRegular,
                      color: "#C3C8D4",
                    }}
                    variant="body1"
                  >
                    {seriesData?.genres.map((genre: any, index: number) => (
                      <span key={genre.id}>
                        {genre.name}
                        {index < seriesData?.genres.length - 1 && ", "}
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

export default SeriesDetail;
