import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Row from '../components/Row';

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Row title="Netflix Originals" fetchUrl="YOUR_API_URL" />
      <Row title="Trending Now" fetchUrl="YOUR_API_URL" />
    </>
  );
};

export default Home;
