import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IMovieType } from "../@types/movie";

function MovieCard({ movie }: IMovieType) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;

  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/movies/${id}`);
  };

  return (
    <Card
      key={movie.id}
      sx={{ height: "100%", cursor: "pointer" }}
      onClick={() => handleCardClick(movie.id.toString())}
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
        {movie.vote_average.toFixed(1)}
      </Box>

      <CardMedia component="img" image={imageUrl} alt={movie.original_title} />
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
    </Card>
  );
}

export default MovieCard;
