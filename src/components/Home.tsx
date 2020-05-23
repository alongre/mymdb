import React, {useEffect, useState} from 'react';
import Cover from '../components/elements/Cover';
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from '../config';
import AutoCompleteMovies from './AutoCompleteMovies';
import Header from './elements/Header';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';
import useFetchMovies from './hooks/useFetchMovies';
import {Card} from './styled/Elements.styled';
import {RouteComponentProps} from '@reach/router';
import ImageThumb from './ImageThumb';
import noImage from './images/no_image.jpg';

const Home = ({...RouteComponentProps}) => {
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
      {movies && coverMovie && (
        <>
          <Cover
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${coverMovie.backdrop_path}`}
            title={coverMovie.title}
            description={coverMovie.overview}
          />
          <AutoCompleteMovies onChange={selectedItem} />
          <Grid
            header={searchTerm.length > 0 ? 'Search Results' : 'Popular Movies'}
            loadMoreData={loadMoreMovies}
          >
            {movies.map((movie) => (
              <ImageThumb
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : noImage
                }
                key={movie.id}
                imageId={movie.id}
                clickable={false}
              />
            ))}
          </Grid>
        </>
      )}
      {fetchStatus === 'loading' && <Spinner />}
    </Card>
  );
};

export default Home;
