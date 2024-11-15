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
          textAlign: "center",
          px: { xs: 2, sm: 4, md: 6 },
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
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
          textAlign: "center",
          px: { xs: 2, sm: 4, md: 6 },
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
        }}
      >
        We couldn&apos;t load the page. Please try again later.
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={handleGoHome}
        sx={{
          padding: { xs: "8px 16px", sm: "10px 20px" },
          borderRadius: "20px",
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default SomethingWentWrong;
