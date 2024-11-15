import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import BackgroundImage from "../assets/login-background.jpg";

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
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
        textAlign: "center",
        animation: "fadeIn 2s ease-in-out",
        overflow: "hidden",
        "@keyframes fadeIn": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          position: "absolute",
          top: 18,
          left: "10%",
          right: "10%",
          fontWeight: "bold",
          fontFamily: "fantasy",
          color: "red",
          animation: "slideIn 1.5s ease-out",
          "@keyframes slideIn": {
            "0%": { transform: "translateY(-50px)", opacity: 0 },
            "100%": { transform: "translateY(0)", opacity: 1 },
          },
          
        }}
      >
        Watchlist
      </Typography>

      <Paper
        elevation={4}
        sx={{
          padding: 4,
          borderRadius: 3,
          width: "350px",
          maxWidth: "90%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "#fff",
          animation: "zoomIn 1.5s ease-out",
          "@keyframes zoomIn": {
            "0%": { transform: "scale(0.8)", opacity: 0 },
            "100%": { transform: "scale(1)", opacity: 1 },
          },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            fontWeight: "bold",
            fontFamily: "sans-serif",
            mb: 3,
          }}
        >
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyPress}
          fullWidth
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              transition: "all 0.3s ease-in-out",
              "& fieldset": {
                borderColor: "#fff",
              },
              "&:hover fieldset": {
                borderColor: "#fff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ff1744",
                boxShadow: "0 0 8px rgba(255, 23, 68, 0.7)",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#f5f5f5",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fff",
            },
            input: { color: "#fff" },
          }}
        />
        <Button
          variant="contained"
          color="error"
          onClick={handleLogin}
          fullWidth
          sx={{
            borderRadius: "20px",
            padding: "10px 0",
            fontWeight: "bold",
            transform: "scale(1)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: "#d32f2f",
              boxShadow: "0 4px 15px rgba(211, 47, 47, 0.6)",
            },
          }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
