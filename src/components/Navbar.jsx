import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  const userEmail = localStorage.getItem("userEmail");

  return (
    <AppBar position="fixed" color="white" >
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1, color:'red' }}>
          Watchlist App
        </Typography>
        {userEmail && (
          <Typography variant="subtitle1">
            Welcome: {userEmail}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
