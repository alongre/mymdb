import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_Response, Movie } from '../../types/tmdb';

export type FetchStatus = 'init' | 'loading' | 'ready' | 'error';
export type MovieState = {
	currentPage: number;
	totalResults: number;
	coverMovie: Movie | undefined;
	totalPages: number;
	movies: Movie[]
}

const useFetchMovies = (url: string) => {
	const [fetchStatus, setFetchStatus] = useState<FetchStatus>('init');
	const [state, setState] = useState<MovieState>({
		currentPage: 0,
		coverMovie: undefined,
		totalResults: 0,
		totalPages: 0,
		movies: []
	})
	const [error, setError] = useState(undefined);

	const fetchData = async (urlEndPoint: string) => {
		try {
			setFetchStatus('loading');
			const data: API_Response = await (await axios.get(urlEndPoint)).data;
			
			setState(prevState => {
				return {
				currentPage: data.page,
				coverMovie: prevState.coverMovie  ? prevState.coverMovie : data.results[0],
				totalResults: data.total_results,
				totalPages: data.total_pages,
				movies: [
					...prevState.movies, ...data.results
				]
			}
			});
			setFetchStatus('ready');
		} catch (error) {
			setFetchStatus('error');
			setError(error);
		}
	} 
	useEffect(() => {
		fetchData(url);
	}, [url]);
	return { state, error, fetchStatus, fetchData };
};
export default useFetchMovies;
