import {useState, useEffect, useMemo, useCallback} from 'react';
import axios from 'axios';
import {API_Response, Movie} from '../../types/tmdb';
import {POPULAR_BASE_URL, SEARCH_BASE_URL} from '../../config';

export type FetchStatus = 'init' | 'loading' | 'ready' | 'error';
export type MovieState = {
  currentPage: number;
  totalResults: number;
  coverMovie: Movie | undefined;
  totalPages: number;
  movies: Movie[];
};

const useFetchMovies = () => {
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>('init');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const urlEndPoint = useMemo(() => {
    return searchTerm.length > 0
      ? SEARCH_BASE_URL + searchTerm
      : POPULAR_BASE_URL;
  }, [searchTerm]);

  const [state, setState] = useState<MovieState>({
    currentPage: 0,
    coverMovie: undefined,
    totalResults: 0,
    totalPages: 0,
    movies: [],
  });
  const [error, setError] = useState(undefined);
  const fetchData = useCallback(
    async () => {
      try {
        setError(undefined);
        setFetchStatus('loading');
        const result = await (
          axios.get(`${urlEndPoint}&page=${currentPage}`)
        );
        const data: API_Response = result.data;
      
        setState((prevState) => {
          return {
            currentPage: data.page,
            coverMovie: prevState.coverMovie
              ? prevState.coverMovie
              : data.results[0],
            totalResults: data.total_results,
            totalPages: data.total_pages,
            movies:
              currentPage === 1
                ? [...data.results]
                : [...prevState.movies, ...data.results],
          };
        });
        setFetchStatus('ready');
      } catch (error) {
        setFetchStatus('error');
        setError(error);
      }
    },
    [urlEndPoint, currentPage],
  )
  const fetchMovies = (page: number, search = '') => {
    setCurrentPage(page);
    setSearchTerm(search);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return {state, error, fetchStatus, fetchMovies};
};
export default useFetchMovies;
