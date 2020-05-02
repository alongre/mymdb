import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Downshift from 'downshift';
import { debounce } from 'lodash';
import React, { useRef, useState } from 'react';
import {
  IMAGE_BASE_URL,
  POSTER_SMALL_SIZE,
  SEARCH_BASE_URL,
} from '../../config';
import { API_Response, Movie } from '../../types/tmdb';
import noLogo from '../images/no_image_logo.jpg';
import {
  StyledDropdown,
  StyledDropdownItem,
  StyledSearchBar,
  StyledSearchBarContent,
} from '../styled/StyledSearchBar';
import MovieLogo from './MovieLogo';

type OptionType = {
  value?: string;
};

const getMovieItem = (movie: Movie) => {
  return (
    <>
      <MovieLogo
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SMALL_SIZE}${movie.poster_path}`
            : noLogo
        }
        key={movie.id}
      />
      <span style={{ margin: 'auto 0px' }}>{movie.title}</span>
    </>
  );
};

const AutoCompleteMovies = ({ onChange }) => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(
      event.currentTarget.value?.length > 0 ? event.currentTarget.value : ''
    );
    debounceSearch.current(event.currentTarget.value);
    if (event.currentTarget.value.length === 0) {
      setMovies([]);
    }
  };

  const debounceSearch = useRef(
    debounce(async (search: string) => {
      if (search.length > 0) {
        const data: API_Response = await (
          await axios.get(SEARCH_BASE_URL + search)
        ).data;
        setMovies(data.results);
      }
    }, 1000)
  );

  return (
    <div style={{ zIndex: 1000 }}>
      <Downshift
        onChange={(selectedItem) => {
          onChange(selectedItem ? selectedItem.title : '');
        }}
        itemToString={(item: any) => {
          const movieSelection = item ? item.title : '';
          setValue(movieSelection);
          return movieSelection;
        }}
      >
        {({
          getInputProps,
          getRootProps,
          getMenuProps,
          getItemProps,
          isOpen,
          highlightedIndex,
          toggleMenu,
          selectItem,
          openMenu,
          closeMenu,
          getToggleButtonProps,
          inputValue, // we destructure this from Downshift
          clearSelection,
        }) => {
          const clear = () => {
            clearSelection();
            setValue('');
            setMovies([]);
          };
          return (
            <StyledSearchBar {...getRootProps()}>
              <StyledSearchBarContent>
                <FontAwesomeIcon
                  icon={faSearch}
                  size="2x"
                  name="search"
                  className="fa-search"
                />
                <input
                  {...getInputProps({
                    onKeyDown(e) {
                      if (e.key === 'Enter' && highlightedIndex === null) {
                        closeMenu();
                        value.length > 0 && onChange(value);
                      }
                    },
                  })}
                  onChange={(event) => {
                    handleInput(event);
                    clearSelection();
                    openMenu();
                  }}
                  value={value}
                />
                {value.length > 0 && (
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    size="2x"
                    name="clear"
                    className="fa-times-circle"
                    onClick={clear}
                  />
                )}
              </StyledSearchBarContent>
              <StyledDropdown {...getMenuProps()}>
                {isOpen &&
                  movies.map((movie, index) => (
                    <StyledDropdownItem
                      {...getItemProps({
                        style: {
                          backgroundColor:
                            index === highlightedIndex
                              ? 'darkslategray'
                              : undefined,
                        },
                        item: movie,
                        index,
                        key: movie.id,
                      })}
                      onClick={() => selectItem(movie)}
                    >
                      {getMovieItem(movie)}
                    </StyledDropdownItem>
                  ))}
              </StyledDropdown>
            </StyledSearchBar>
          );
        }}
      </Downshift>
    </div>
  );
};

export default AutoCompleteMovies;
