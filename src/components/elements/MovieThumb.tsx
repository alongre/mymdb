import React from 'react';
import StyledMovieThumb from '../styled/StyledMovieThumb';

type Props = {
  image: string;
  clickable?: boolean;
};

const MovieThumb = (props: Props) => {
  const { image, clickable = false } = props;
  return (
    <StyledMovieThumb>
      <img
        src={image}
        alt="moviethumb"
        className={clickable ? 'clickable' : ''}
      />
    </StyledMovieThumb>
  );
};

export default MovieThumb;
