import { useState } from "react";
import { Card, Box } from "@mui/material";

import WatchlistPage from "./WatchlistPage";
import Search from "../components/Search";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Box className="content-area" sx={{ padding: "20px" }}>
      <Card
        elevation={3}
        sx={{ padding: "20px", borderRadius: "20px", marginBottom: "20px" }}
      >
        <h1> Welcome to Watchlist</h1>
        <br />
        <p>
          Browse movies, add them to your watchlist and share them with your
          friends
        </p>
        <br />
        <p>Just click on the + icon to add movie to your watchlist</p>
      </Card>

      <Card
        sx={{
          padding: "20px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Search setSearchResults={setSearchResults} />
      </Card>

      <WatchlistPage searchResults={searchResults} />
    </Box>
  );
};

export default Home;
