import React from 'react';
import StyledMovieLogo from '../styled/StyledMovieLogo';

type Props = {
  image: string;
};

const MovieLogo = (props: Props) => {
  const {image} = props;
  return (
    <StyledMovieLogo>
      <img src={image} alt="movie-logo" />
    </StyledMovieLogo>
  );
};

export default MovieLogo;
