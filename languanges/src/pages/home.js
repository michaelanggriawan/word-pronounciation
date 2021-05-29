import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Swal from 'sweetalert2';
import { Card, Text, Center, H1, Arrow, Loader } from '../styles/styles';
import Inggris from '../svg/inggris.svg';
import China from '../svg/china.svg';
import Indonesia from '../svg/indonesia.svg';
import RightArrow from '../svg/right-arrow.svg';

const flags = [
	{
		id: 1,
		flag: Inggris,
		title: 'Bahasa Inggris',
	},
	{
		id: 2,
		flag: China,
		title: 'Bahasa Mandarin',
	},
	{
		id: 3,
		flag: Indonesia,
		title: 'Bahasa Indonesia',
	},
];

function Home() {
	const history = useHistory();
	const [selected, setSelected] = useState(null);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 1000);
		// classifySound();
	}, []);

	if (loader)
		return (
			<Loader>
				<div class='lds-circle'>
					<div></div>
				</div>
			</Loader>
		);

	return (
		<>
			<H1>PILIH BAHASA</H1>
			<Center>
				{flags.map((item) => {
					return (
						<Card key={item.id} onClick={() => setSelected(item.id)} clicked={item.id === selected}>
							<img src={item.flag} />
							<Text clicked={item.id === selected}>{item.title}</Text>
						</Card>
					);
				})}
			</Center>
			<Center>
				<Arrow
					onClick={() => {
						if (!selected) {
							Swal.fire({
								title: 'Error!',
								text: 'Silahkan pilih bahasa terlebih dahulu',
								icon: 'error',
								confirmButtonText: 'Close',
								confirmButtonColor: '#f15a29',
							});
						} else {
							// get languange
							const flag = flags.filter((item) => item.id === selected)[0].title.split(' ')[1];
							history.push({
								pathname: `kategori/${flag.toLowerCase()}`,
								state: {
									bahasa: flag.toLowerCase(),
								},
							});
						}
					}}
				>
					<img src={RightArrow} width='80px' />
				</Arrow>
			</Center>
		</>
	);
}

export default Home;
