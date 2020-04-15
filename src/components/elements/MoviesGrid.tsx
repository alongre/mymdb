import React from 'react';
import { API_Response } from '../../types/tmdb';
import { StyledGrid, StyledGridContent } from '../styled/StyledGrid';
import noImage from '../images/no_image.jpg';
import MovieThumb from './MovieThumb';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

type Props = {
  data: API_Response;
  header: string;
};

const MoviesGrid = (props: Props) => {
  const { data, header } = props;
  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent>
        {data.results.map((movie) => (
          <MovieThumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : noImage
            }
            key={movie.id}
            clickable={false}
          />
        ))}
      </StyledGridContent>
    </StyledGrid>
  );
};

export default MoviesGrid;
