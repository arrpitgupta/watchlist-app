import { useState } from "react";
import { Card } from "@mui/material";

import WatchlistPage from "./WatchlistPage";
import Search from "../components/Search";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="content-area">
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
      <Card sx={{ padding: "10px", marginBottom: "20px" }}>
        <Search setSearchResults={setSearchResults} />
      </Card>

      <WatchlistPage searchResults={searchResults} />
    </div>
  );
};

export default Home;
