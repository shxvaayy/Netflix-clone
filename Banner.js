import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.header`
  background-size: cover;
  background-position: center center;
  height: 448px;
  color: white;
  object-fit: contain;
  padding: 60px;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <h1>Welcome to Netflix</h1>
      <button>Watch Now</button>
    </BannerContainer>
  );
};

export default Banner;
