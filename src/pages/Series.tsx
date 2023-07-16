import { useState, ChangeEvent } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL, API_KEY } from "../config";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  Input,
  InputAdornment,
  Container,
} from "@mui/material";
import SeriesCard from "../components/SeriesCard";

function Series() {
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSeries = async () => {
    const { data } = await axios.get(
      `${BASE_URL}tv/popular?api_key=${API_KEY}`
    );
    return data.results;
  };

  const fetchTopRatedSeries = async () => {
    const { data } = await axios.get(
      `${BASE_URL}tv/top_rated?api_key=${API_KEY}`
    );
    return data.results;
  };

  const searchSeries = async () => {
    const { data } = await axios.get(
      `${BASE_URL}search/tv?query=${searchTerm}&api_key=${API_KEY}`
    );
    return data.results;
  };

  const { data: seriesData } = useQuery("series", fetchSeries);
  const { data: topRatedSeries } = useQuery(
    "topRatedSeries",
    fetchTopRatedSeries
  );
  const { data: searchResults } = useQuery(
    ["search", searchTerm],
    searchSeries,
    {
      enabled: searchTerm !== "",
    }
  );

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }
  return (
    <Container disableGutters>
      <Box sx={{ padding: "64px 0", maxWidth: "590px" }}>
        <Typography variant="h1">Series</Typography>
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
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Series"
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
        Popular Series ({searchResults?.length || seriesData?.length})
      </Typography>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={3}
        sx={{ marginBottom: "120px" }}
      >
        {Object.keys(searchResults || seriesData || {}).map((key) => {
          const series = seriesData[key];
          return (
            <Grid item xs={6} md={3} key={series.id}>
              <SeriesCard series={series} />
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
        Top Rated Series ({topRatedSeries?.length})
      </Typography>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={3}
        sx={{ marginBottom: "120px" }}
      >
        {Object.keys(topRatedSeries || {}).map((key) => {
          const series = topRatedSeries[key];
          return (
            <Grid item xs={6} md={3} key={series.id}>
              <SeriesCard series={series} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Series;
