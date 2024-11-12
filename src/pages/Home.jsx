import { Card } from "@mui/material";

import WatchlistPage from "./WatchlistPage";
import Seacrh from "../components/Seacrh";

const Home = () => {
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
        <Seacrh />
      </Card>

      <WatchlistPage />
    </div>
  );
};

export default Home;
