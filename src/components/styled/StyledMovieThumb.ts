import styled from 'styled-components';

const StyledMovieThumb = styled.div`
  /* z-index: -10; */
  img {
    width: 100%;
    transition: all 0.3s;
    object-fit: cover;

    border-radius: 20px;
    animation: animateMovieThumb 0.5s;

    :hover {
      opacity: 0.8;
      animation: animateRotateMovie 0.5s;
    }

    .clickable {
      cursor: pointer;
    }

    @keyframes animateMovieThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes animateRotateMovie {
      from {
        transform: rotateX(0);
      }
      to {
        transform: rotateX(180);
      }
    }
  }
`;

export default StyledMovieThumb;
