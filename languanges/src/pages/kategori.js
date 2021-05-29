import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { Center, H1, Category, Text, ContainerCategory, Loader, BottomNav, Button } from '../styles/styles';
import Alat from '../svg/alat.svg';
import Hewan from '../svg/hewan.svg';
import Pekerjaan from '../svg/pekerjaan.svg';
import Transportasi from '../svg/transportasi.svg';
import Makanan from '../svg/makanan.svg';
import Umum from '../svg/umum.svg';

const categories = [
	{
		id: 1,
		title: 'Alat-alat',
		icon: Alat,
	},
	{
		id: 2,
		title: 'Hewan',
		icon: Hewan,
	},
	{
		id: 3,
		title: 'Pekerjaan',
		icon: Pekerjaan,
	},
	{
		id: 4,
		title: 'Transportasi',
		icon: Transportasi,
	},
	{
		id: 5,
		title: 'Makanan',
		icon: Makanan,
	},
	{
		id: 6,
		title: 'Umum',
		icon: Umum,
	},
];

function Kategori() {
	const history = useHistory();
	const location = useLocation();
	const languange = location.pathname.split('/')[2];
	const [selected, setSelected] = useState(null);
	const [kategori, setKategori] = useState(null);
	const [loader, setLoader] = useState(true);
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 1000);
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
		<ContainerCategory>
			<H1>PILIH KATEGORI</H1>
			<Center>
				<Carousel itemsToShow={3} itemsToScroll={3}>
					{categories.map((item, i) => {
						return (
							<Category
								key={item.id}
								onClick={() => {
									setSelected(item.id);
									setDisabled(false);
									setKategori(item.title);
								}}
								clicked={item.id === selected}
							>
								<img src={item.icon} height='160px' width='143px' />
								<Text clicked={item.id === selected}>{item.title}</Text>
							</Category>
						);
					})}
				</Carousel>
			</Center>
			<BottomNav>
				<div>
					<Button onClick={() => history.push('/')}>KEMBALI</Button>
					<Button
						disabled={disabled}
						active={disabled === false}
						onClick={() => {
							history.push(`/latihan/${languange}/${kategori.toLowerCase()}`);
						}}
					>
						PILIH
					</Button>
				</div>
			</BottomNav>
		</ContainerCategory>
	);
}

export default Kategori;
