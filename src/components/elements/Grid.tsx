import React from 'react';
import {Movie} from '../../types/tmdb';
import {StyledGrid, StyledGridContent} from '../styled/StyledGrid';


type Props = {
  header: string;
  loadMoreData?: () => void;
};
const SCROLL_OFFSET = 20;

const Grid: React.FC<Props> = ({children, header, loadMoreData}) => {

  const handleScroll = (event) => {
    const {scrollTop, scrollHeight, clientHeight} = event.currentTarget;
    if (scrollHeight - scrollTop < clientHeight + SCROLL_OFFSET) {
      if (loadMoreData) {
        loadMoreData()
      };
    }
  };

  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent onScroll={handleScroll}>
        {children}
      </StyledGridContent>
    </StyledGrid>
  );
};

export default Grid;
