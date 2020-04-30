import React from 'react';
import { Movie } from '../../types/tmdb';
import { StyledGrid, StyledGridContent } from '../styled/StyledGrid';
import noImage from '../images/no_image.jpg';
import MovieThumb from './MovieThumb';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

type Props = {
  movies: Movie[];
  header: string;
  loadMoreMovies: () => void
};
const SCROLL_OFFSET = 20

const MoviesGrid = (props: Props) => {
  const { movies, header, loadMoreMovies } = props;

  const handleScroll = event => {
    const {scrollTop, scrollHeight, clientHeight} = event.currentTarget;
    if (scrollHeight - scrollTop < (clientHeight + SCROLL_OFFSET)) {
      loadMoreMovies()
    }
    
  }


  return (
    <StyledGrid >
      <h1>{header}</h1>
      <StyledGridContent onScroll={handleScroll}>
        {movies.map((movie) => (
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
