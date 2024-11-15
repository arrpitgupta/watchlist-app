import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { searchMovieByTitle } from "../services/searchService";

const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%", 
  maxWidth: "700px", 
  display: "flex", 
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch", 
    },
  },
}));

const Search = ({ setSearchResults }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setSnackbarOpen(false); 
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = await searchMovieByTitle(query);

      if (data.Response === "True") {
        setSearchResults([data]);
      } else {
        setSearchResults([]);
        setErrorMessage(data.Error); 
        setSnackbarOpen(true); 
      }
    } catch (error) {
      console.error("Error during movie search:", error);
      setErrorMessage("Something went wrong. Please try again."); 
      setSnackbarOpen(true); 
    } finally {
      setLoading(false);
    }
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Type and press Enter or click Search..."
        inputProps={{ "aria-label": "search" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
      />
      <Button
        variant="contained"
        color="error"
        onClick={handleSearch}
        disabled={loading} 
        style={{ marginLeft: "10px" }}
      >
        Search
      </Button>
      {loading && (
        <div style={{ marginLeft: "10px" }}>
          <CircularProgress size={24} />
        </div>
      )}
    </SearchContainer>
    <Snackbar
    open={snackbarOpen}
    autoHideDuration={4000} // Auto close after 4 seconds
    onClose={handleSnackbarClose}
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
  >
    <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: "100%" }}>
      {errorMessage}
    </Alert>
  </Snackbar>
  </>
  );
};

export default Search;
