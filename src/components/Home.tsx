import React, {useEffect, useState} from 'react';
import Cover from '../components/elements/Cover';
import {BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
import AutoCompleteMovies from './elements/AutoCompleteMovies';
import Header from './elements/Header';
import MoviesGrid from './elements/MoviesGrid';
import Spinner from './elements/Spinner';
import useFetchMovies from './helpers/useFetchMovies';
import {Card} from './styled/Elements.styled';

const Home = () => {
  const {
    fetchStatus,
    state: {movies, currentPage, coverMovie, totalPages},
    fetchMovies,
  } = useFetchMovies();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const loadMoreMovies = () => {
    if (page + 1 <= totalPages) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    fetchMovies(page, searchTerm);
  }, [page, currentPage, fetchMovies, searchTerm]);

  const selectedItem = (val: any) => {
    setPage(1);
    setSearchTerm(val);
  };

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
          <AutoCompleteMovies onChange={selectedItem} />
          <MoviesGrid
            header={searchTerm.length > 0 ? 'Search Results' : 'Popular Movies'}
            movies={movies}
            loadMoreMovies={loadMoreMovies}
          />
        </>
      )}
      {fetchStatus === 'loading' && <Spinner />}
    </Card>
  );
};

export default Home;
