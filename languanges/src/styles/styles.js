import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;1,700&display=swap');
    font-family: 'Poppins';
  }
`;

export const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Card = styled.div`
	border-radius: 16px;
	border-style: solid;
	border-width: 2px 2px 4px;
	cursor: pointer;
	display: inline-block;
	flex: 1 1 auto;
	margin: 12px;
	max-width: 240px;
	min-height: 217px;
	min-width: 200px;
	padding: 12px 12px 24px;
	text-align: center;
	border-color: #e5e5e5;
	background-color: ${(props) => (props.clicked ? '#f15a29' : '#ffffff')};
	&:hover {
		background-color: ${(props) => (props.clicked ? '#f15a29' : '#e5e5e5')};
	}
`;

export const Category = styled.div`
	border-radius: 16px;
	border-style: solid;
	border-width: 2px 2px 4px;
	cursor: pointer;
	display: inline-block;
	margin: 12px;
	height: 200px;
	width: 194px;
	padding: 12px 12px 24px;
	text-align: center;
	border-color: #e5e5e5;
	background-color: ${(props) => (props.clicked ? '#f15a29' : '#ffffff')};

	&:focus {
		outline: none;
	}

	&:hover {
		background-color: ${(props) => (props.clicked ? '#f15a29' : '#e5e5e5')};
	}
`;

export const ContainerCategory = styled.div`
	.rec-dot_active {
		background-color: #f15a29;
		border-color: #f15a29;
		ouline: none;
		box-shadow: none;
	}

	.rec-arrow:hover:not([disabled]) {
		background-color: #f15a29;
	}

	.rec-carousel-item .rec-item-wrapper div:focus {
		outline: none;
	}
`;

export const Text = styled.div`
	color: #f15a29;
	font-size: 17px;
	font-weight: 700;
	line-height: 1.2;
	margin-top: 10px;
	margin-bottom: 0;
	color: ${(props) => (props.clicked ? '#ffffff' : '#f15a29')};
`;

export const H1 = styled.h1`
	color: #f15a29;
	margin-top: ${(props) => (props.normal ? '5%' : `10%`)};
	text-align: center;
`;

export const Button = styled.button`
	border-style: solid;
	border-width: 2px 2px 4px;
	font-size: 17px;
	text-align: center;
	color: ${(props) => (props.active ? '#fff' : '#afafaf')};
	background-color: ${(props) => (props.disabled ? '#e5e5e5' : props.active ? '#f15a29' : '#fff')};
	height: 50px;
	width: 150px;
	border-radius: 16px;
	border-color: ${(props) => (props.active ? 'rgba(0, 0, 0, 0.2)' : '#e5e5e5')};
	font-weight: 700;
	&:focus {
		outline: none;
	}

	&:hover:not([disabled]) {
		border-style: solid;
		border-width: 2px 2px 4px;
		cursor: pointer;
		background-color: ${(props) => (props.active ? '#EF9377' : '#e5e5e5')};
		border-color: ${(props) => (props.active ? 'rgba(0, 0, 0, 0.2)' : '#afafaf')};
	}
`;

export const Arrow = styled.div`
	margin-top: 10px;
	&:hover {
		cursor: pointer;
	}
`;

export const BottomNav = styled.div`
	margin-top: 20px;
	height: 140x;
	border-top: 2px solid #e5e5e5;
	width: 100%;

	div {
		margin-top: 3%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`;

export const Bar = styled.div`
	margin-top: 10%;
	width: 70%;
	height: 16px;
	background-color: #e5e5e5;
	border-radius: 20px;
`;

export const Normal = styled.h1`
	text-align: center;
	color: #f15a29;
`;

export const AudioPlay = styled.span`
	position: absolute;
	&:hover {
		cursor: pointer;
	}
`;

export const AudioRecord = styled.button`
	border: none;
	border-radius: 50%;
	width: 65px;
	height: 65px;
	background: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
	-moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
	-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
	-o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);

	&:focus {
		outline: none;
	}

	&:hover {
		cursor: pointer;
	}
`;

export const Loader = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20%;

	.lds-circle {
		display: inline-block;
		transform: translateZ(1px);
	}
	.lds-circle > div {
		display: inline-block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		background: #e5e5e5;
		animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}
	@keyframes lds-circle {
		0%,
		100% {
			animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
		}
		0% {
			transform: rotateY(0deg);
		}
		50% {
			transform: rotateY(1800deg);
			animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
		}
		100% {
			transform: rotateY(3600deg);
		}
	}
`;
