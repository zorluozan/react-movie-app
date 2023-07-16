import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ISeriesType } from "../@types/series";

function SeriesCard({ series }: ISeriesType) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${series?.backdrop_path}`;
  const theme = useTheme();

  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/series/${id}`);
  };

  return (
    <Card
      key={series.id}
      sx={{ height: "100%", cursor: "pointer" }}
      onClick={() => handleCardClick(series.id.toString())}
    >
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
        {series?.vote_average.toFixed(1)}
      </Box>

      <CardMedia component="img" image={imageUrl} alt={series?.name} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: theme.palette.primary.title, letterSpacing: "0.02em" }}
        >
          {series?.original_name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SeriesCard;
