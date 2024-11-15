import { useEffect, useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useNavigate } from "react-router-dom";

const WatchlistView = () => {
  const navigate = useNavigate();
  const [watchlist, setWatchlist] = useState([]);
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    
    if (!userEmail) {
      navigate("/login");
    }

    // Retrieve watchlist from localStorage
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, [userEmail, navigate]);

  const handleDelete = (movieId) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  return (
    <Box display="flex" flexWrap="wrap" gap={3} padding={3} >
      {watchlist.length > 0 ? (
        watchlist.map((movie) => (
          <Card
            key={movie.id}
            sx={{
              width: 220,
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 4,
              position: "relative",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                zIndex: 1,
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
              }}
              onClick={() => handleDelete(movie.id)}
              aria-label="delete"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
            <CardMedia
              component="img"
              height="250"
              image={movie.Poster}
              alt={movie.Title}
              sx={{ objectFit: "cover" }}
            />
             <CardContent sx={{ padding: "8px 16px", display: "flex", alignItems: "center" }}>
            <ThumbUpAltIcon fontSize="small" sx={{ color: "#4ce13f", marginRight: 0.5 }} />
            <Typography variant="body2" color="textSecondary" sx={{ fontWeight: "bold", mr: 0.5 }}>
              {movie.Ratings[0].Value}
            </Typography>
            
          </CardContent>
            <CardContent sx={{ padding: "12px 16px" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.5 }}>
                {movie.Title}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                ({movie.Year})
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h6" color="textSecondary">
          No movies in your watchlist.
        </Typography>
      )}
    </Box>
  );
};

export default WatchlistView;
