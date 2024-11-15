import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorBackground from "../assets/something-wrong.jpg"; 

const SomethingWentWrong = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${ErrorBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          marginBottom: 2,
          marginLeft:60
        }}
      >
        Oops! Something Went Wrong
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
          marginBottom: 4,
          marginLeft:60
        }}
      >
        We couldn&apos;t load the page. Please try again later.
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={handleGoHome}
        sx={{
          padding: "10px 20px",
          borderRadius: "20px",
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "none",
          marginLeft:60
        }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default SomethingWentWrong;
