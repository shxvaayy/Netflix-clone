import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const RowContainer = styled.div`
  margin-left: 20px;
`;

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <RowContainer>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </RowContainer>
  );
};

export default Row;
