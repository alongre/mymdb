import React from 'react';
import StyledMovieThumb from './styled/StyledMovieThumb';
import {Link} from '@reach/router';

type Props = {
  image: string;
  clickable?: boolean;
  imageId: number;
};

const ImageThumb = (props: Props) => {
  const {image,imageId, clickable = false} = props;
  return (
    <StyledMovieThumb>
      <Link to={`/${imageId}`}>
        <img
          src={image}
          alt="moviethumb"
          className={clickable ? 'clickable' : ''}
        />
      </Link>
    </StyledMovieThumb>
  );
};

export default ImageThumb;
