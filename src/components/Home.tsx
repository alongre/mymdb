import React, { useState, useEffect, useMemo } from 'react';
import { map } from 'lodash';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
import Header from './elements/Header';
import useFetch from './helpers/useFetch';
import { Card } from './styled/Elements.styled';
import { Movie, API_Response } from '../types/tmdb';
import Cover from '../components/elements/Cover';

const Home = () => {
	const { status, data, error } = useFetch<API_Response>(`${API_URL}/movie/popular?api_key=${API_KEY}`);
	const mainMovie = useMemo(() => {
		return data && data.results[0];
	}, [data]);
	// console.log(state)
	return (
		<Card>
			<Header />
            {mainMovie && 
            <Cover 
            
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${mainMovie.backdrop_path}`}
            title={mainMovie.title} 
            description={mainMovie.overview} />}
		</Card>
	);
};

export default Home;
