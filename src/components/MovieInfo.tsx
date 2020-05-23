import React from 'react';
import {MovieDetail, Crew} from '../types/tmdb';
import {StyledMovieInfo} from './styled/StyledMovieInfo';
import ImageThumb from './ImageThumb';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../config';

const MovieInfo = (props: {movie: MovieDetail | null; directors: Crew[]}) => {
  const {movie, directors} = props;

  return (
    movie && (
      <StyledMovieInfo backdrop={movie.backdrop_path}>
        <div className="movieinfo-content">
          <div className="movieinfo-thumb">
            <ImageThumb
              image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
              key={movie.id}
              imageId={movie.id}
              clickable={false}
            />
          </div>
          <div className="movieinfo-text">
            <h1>{movie.title}</h1>
            <h3>PLOT</h3>
            <p>{movie.overview}</p>

            <div className="rating-director">
              <div>
                <h3>RATING</h3>
                <div className="score">{movie.vote_average}</div>
              </div>

              <div className="director">
                <h3>Directed By</h3>
                {directors.map((d) => (
                  <p key={d.id}>{d.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </StyledMovieInfo>
    )
  );
};

export default MovieInfo;
