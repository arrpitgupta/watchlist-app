import { useState } from "react";
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
import { moviesData } from "../data/moviesData";

const WatchlistPage = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleAddToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
    setSnackbarMessage(`${movie.title} added to watchlist`);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const isInWatchlist = (movieId) => watchlist.some((m) => m.id === movieId);

  return (
    <Box display="flex" flexWrap="wrap" gap={2} padding={2}>
      {moviesData.map((movie) => (
        <Card
          key={movie.id}
          sx={{
            width: 200,
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
            boxShadow: 3,
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
            height="140"
            image={movie.poster}
            alt={movie.title}
          />

          <CardContent
            sx={{ padding: "8px 16px", display: "flex", alignItems: "center" }}
          >
            <ThumbUpAltIcon
              fontSize="small"
              sx={{ color: "#4ce13f", marginRight: 0.5 }}
            />
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontWeight: "bold", mr: 0.5 }}
            >
              {movie.rating}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              /100
            </Typography>
          </CardContent>

          <CardContent sx={{ padding: "0 16px 16px" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.5 }}>
              {movie.title}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              ({movie.year})
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
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default WatchlistPage;
