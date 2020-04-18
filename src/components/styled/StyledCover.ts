import styled from 'styled-components';
import { media } from './mixin.styled';

export const StyledCover = styled.div`
  background: ${(props: { image: string }) =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url(${props.image}), #1c1c1c`};
  background-size: 100%, cover;
  background-position: center, center !important;
  width: 100%;
  height: 600px;
  animation: animateCover 1s;
  .cover-content {
    max-width: 1280px;
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    padding: 20px;
    margin: 0 auto;
  }

  .cover-description {
    z-index: 100;
    max-width: 700px;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0, 0, 0, 0);
    color: #fff;
    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 48px;
      color: #fff;

      ${media.tablet`
                font-size: 38px;
                color: #fff;
            `}
    }

    p {
      font-family: 'Abel', sans-serif;
      font-size: 22px;
      line-height: 26px;
      color: #fff;

      ${media.tablet`
                font-size: 16px;
                line-height: 20px;
                color: #fff;
            `}
    }
    ${media.tablet`
            max-width: 200px;
    `}
  }

  @keyframes animateCover {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
