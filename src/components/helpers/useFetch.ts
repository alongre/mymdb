import { useState, useEffect } from 'react';
import axios from 'axios';

type Status = 'init' | 'loading' | 'ready' | 'error';

const useFetch = <T extends {}>(url: string) => {
	const [state, setState] = useState<Status>('init');
	const [data, setData] = useState<T | undefined>(undefined);
	const [error, setError] = useState(undefined);
	useEffect(() => {
		async function fetchData() {
			try {
				setState('loading');
				const data = await (await axios.get(url)).data;
				setData(data);
				setState('ready');
			} catch (error) {
				setState('error');
				setError(error);
			}
		}
		fetchData();
	}, [url]);
	return { data, error, status: state };
};
export default useFetch;
