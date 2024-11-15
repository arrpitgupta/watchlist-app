// import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import WatchlistPage from './pages/WatchlistPage';
import "./App.scss";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import WatchlistView from "./components/WatchlistView";
import SomethingWentWrong from "./components/SomethingWentWorng";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchlistView />} />
        </Route>
        <Route path="/error" element={<SomethingWentWrong />} />
      </Routes>
    </Router>
  );
}

export default App;
