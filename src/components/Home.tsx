import React, { useState, useEffect, useMemo } from 'react';
import { map } from 'lodash';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
import Header from './elements/Header';
import { Card } from './styled/Elements.styled';
import { Movie, API_Response } from '../types/tmdb';
import Cover from '../components/elements/Cover';
import Spinner from './elements/Spinner';
import MoviesGrid from './elements/MoviesGrid';
import StyleLoadButton from './styled/StyledLoadButton';
import useFetchMovies from './helpers/useFetchMovies';

const POPULAR_END_POINT = `${API_URL}/movie/popular?api_key=${API_KEY}`
const Home = () => {
  const { 
    fetchStatus, 
    state: {movies, currentPage, coverMovie, totalPages, totalResults},
    error,
    fetchData } = useFetchMovies(POPULAR_END_POINT);
  const [searchTerm, setSearchTerm] = useState('');
  const loadMoreMovies = () => {

    if (currentPage + 1 < totalPages) {
      fetchData(`${POPULAR_END_POINT}&page=${currentPage + 1}`)
    }
  }

  return (
    <Card>
      <Header />
      {movies && coverMovie && (
        <>
          <Cover
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${coverMovie.backdrop_path}`}
            title={coverMovie.title}
            description={coverMovie.overview}
          />
          <MoviesGrid header={searchTerm.length > 0 ? 'Search Results' : 'Popular Movies'} movies={movies} />
          <StyleLoadButton onClick={loadMoreMovies}>
            Load More Movies
          </StyleLoadButton>
        </>
      )}
      {fetchStatus === 'loading' && <Spinner/>}
    </Card>
  );
};

export default Home;
