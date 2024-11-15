import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { moviesData } from "../services/moviesData";

const WatchlistPage = ({ searchResults }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [movies, setMovies] = useState(moviesData);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      const newMovies = searchResults.filter((movie) => {
        return movie.imdbID && movie.Poster && movie.Title && movie.Ratings?.length > 0;
      });

      if (newMovies.length === 0) {
        navigate("/error");
      } else {
        setMovies((prevMovies) => {
          const existingIDs = prevMovies.map((movie) => movie.imdbID);
          const validMovies = newMovies.filter(
            (movie) => !existingIDs.includes(movie.imdbID)
          );
          return [ ...validMovies,...prevMovies];
        });
      }
    }
  }, [searchResults, navigate]);

  const handleAddToWatchlist = (movie) => {
    if (!isInWatchlist(movie.id)) {
      const newWatchlist = [...watchlist, movie];
      setWatchlist(newWatchlist);
      setSnackbarMessage(`${movie.Title} added to watchlist`);
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const isInWatchlist = (movieId) => watchlist.some((m) => m.id === movieId);

  return (
    <Box display="flex" flexWrap="wrap" gap={2} padding={2}>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          sx={{
            width: 200,
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
            boxShadow: 3,
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              zIndex: 1,
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
            }}
            onClick={() => handleAddToWatchlist(movie)}
            disabled={isInWatchlist(movie.id)}
          >
            {isInWatchlist(movie.id) ? (
              <CheckIcon fontSize="small" color="success" />
            ) : (
              <AddIcon fontSize="small" />
            )}
          </IconButton>

          <CardMedia
            component="img"
            height="250"
            image={movie.Poster}
            alt={movie.Title}
          />

          <CardContent sx={{ padding: "8px 16px", display: "flex", alignItems: "center" }}>
            <ThumbUpAltIcon fontSize="small" sx={{ color: "#4ce13f", marginRight: 0.5 }} />
            <Typography variant="body2" color="textSecondary" sx={{ fontWeight: "bold", mr: 0.5 }}>
              {movie.Ratings[0].Value}
            </Typography>
            
          </CardContent>

          <CardContent sx={{ padding: "0 16px 16px" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.5 }}>
              {movie.Title}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              ({movie.Year})
            </Typography>
          </CardContent>
        </Card>
      ))}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default WatchlistPage;
