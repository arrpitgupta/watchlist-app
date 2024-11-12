import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom color='red'>
        Login To See your <br /> Watchlist!!
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        sx={{ mb: 2, width: '300px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        fullWidth
        sx={{ width: '300px', borderRadius:'10px' }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
