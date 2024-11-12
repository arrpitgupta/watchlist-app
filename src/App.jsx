// import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import WatchlistPage from './pages/WatchlistPage';
import "./App.scss";
import Layout from './layout/Layout';
import Login from './pages/Login';
function App() {
  


  return (
    <Router>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route element={<Layout />}>
        <Route path="/" element={<Home  />} />
        {/* <Route path="/watchlist" element={<WatchlistPage  />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
