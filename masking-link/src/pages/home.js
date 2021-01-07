import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
	const location = useLocation();

	useEffect(async () => {
		try {
			const response = await fetch(`https://dev.api.ditoko.com/api/v1/masking-url${location.pathname}`);
			const data = await response.json();
			const { result, status } = data;

			if (status === 'ok') {
				window.location.href = result[0].destination_url;
			}
		} catch (err) {
			console.log(err);
		}
	}, []);

	return <div className='ditoko__loadingCenter' />;
}

export default Home;
