import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Row from './components/Row';
import Home from './pages/Home';
import Login from './pages/Login';
const API_URL = process.env.REACT_APP_API_URL;


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <Banner />
            {/* Replace YOUR_API_URL with the actual backend API URL */}
            <Row title="Netflix Originals" fetchUrl="http://localhost:5000/api/videos" />
            <Row title="Trending Now" fetchUrl="http://localhost:5000/api/videos" />
            {/* Add more rows as needed */}
          </>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

