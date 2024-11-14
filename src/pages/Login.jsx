import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email) {
      localStorage.setItem("userEmail", email);
      navigate("/");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{ backgroundColor: "#f0f2f5" }}
    >
      <Paper elevation={4} sx={{ padding: 4, borderRadius: 3, width: "350px" }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Login to Your Watchlist!
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyPress}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
          sx={{ borderRadius: "20px", padding: "10px 0", fontWeight: "bold" }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
