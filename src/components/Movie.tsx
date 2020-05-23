import React from 'react';
import {RouteComponentProps} from '@reach/router';
import {isArray} from 'lodash';
import MovieInfo from './MovieInfo';
import Navigation from './elements/Navigation';
import Grid from './elements/Grid';
import Actor from './Actor';
import InfoBar from './MovieInfoBar';
import useFetch from 'use-http';
import {API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE} from '../config';
import Spinner from './elements/Spinner';
import ImageThumb from './ImageThumb';
import {Credits, MovieDetail, Crew} from '../types/tmdb';
import noImage from './images/no_image.jpg';
import {NavigationItem} from './elements/Navigation';
import MovieInfoBar from './MovieInfoBar';

type Props = RouteComponentProps & {
  movieId?: string;
};

const Movie = (props: Props) => {
  const {movieId} = props;
  const {
    loading: movieLoading,
    error: errorOnMovie,
    data: movie = null,
  } = useFetch<MovieDetail | undefined>(
    `${API_URL}/movie/${movieId}?api_key=${API_KEY}`,
    {},
    [movieId],
  );
  const {
    loading: creditsLoading,
    error: errorOnCredits,
    data: credits = null,
  } = useFetch<Credits | null>(
    `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
    {},
    [movieId],
  );
  if (errorOnCredits) {
    return <pre>{JSON.stringify(errorOnCredits, null, 2)}</pre>;
  }
  if (errorOnMovie) {
    return <pre>{JSON.stringify(errorOnMovie, null, 2)}</pre>;
  }
  // const directories = credits && credits.cast.filter(c => c.)
  const navItems: NavigationItem[] = [
    {
      name: 'Home',
      linkTo: '/',
    },
    {
      name: movie ? movie.title : '',
      linkTo: `/${movieId}`,
    },
  ];
  const directors: Crew[] = credits
    ? credits.crew.filter((c) => c.department === 'Directing')
    : [];
  return (
    <div>
      {movieLoading && creditsLoading ? (
        <Spinner />
      ) : (
        <>
          <Navigation navigationItems={navItems} />
          <MovieInfo movie={movie} directors={directors} />
          {/* <pre>{JSON.stringify(credits, null, 2)}</pre> */}
          <MovieInfoBar time={movie?.runtime} budget={movie?.budget} revnue={movie?.revenue}  />
          <Grid header="Cast">
            {credits &&
              movie &&
              credits.cast
                .filter((c) => c.profile_path)
                .map((c) => (
                  <Actor actor={c} key={c.id}/>
                ))}
          </Grid>
        </>
      )}

      {/* <Spinner /> */}
    </div>
  );
};

export default Movie;
