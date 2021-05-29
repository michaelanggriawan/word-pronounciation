// generals
import Up from '../svg/generals/up.svg';
import Down from '../svg/generals/down.svg';
import Left from '../svg/generals/left.svg';
import Right from '../svg/generals/right.svg';
import No from '../svg/generals/no.svg';
import Yes from '../svg/generals/yes.svg';
import Stop from '../svg/generals/stop.svg';
import Go from '../svg/generals/go.svg';

import s_up from '../audio/english/generals/up.mp3';
import s_down from '../audio/english/generals/down.mp3';
import s_left from '../audio/english/generals/left.mp3';
import s_right from '../audio/english/generals/right.mp3';
import s_no from '../audio/english/generals/no.mp3';
import s_yes from '../audio/english/generals/yes.mp3';
import s_stop from '../audio/english/generals/stop.mp3';
import s_go from '../audio/english/generals/go.mp3';

// tools
import Hammer from '../svg/tools/hammer.svg';
import Machete from '../svg/tools/machete.svg';
import Glove from '../svg/tools/glove.svg';
import Saw from '../svg/tools/saw.svg';
import Screwdriver from '../svg/tools/screwdriver.svg';

import s_hammer from '../audio/english/tools/hammer.mp3';
import s_machete from '../audio/english/tools/machete.mp3';
import s_glove from '../audio/english/tools/glove.mp3';
import s_saw from '../audio/english/tools/saw.mp3';
import s_screwdriver from '../audio/english/tools/screwdriver.mp3';

// animal
import Frog from '../svg/animal/frog.svg';
import Goose from '../svg/animal/goose.svg';
import Lion from '../svg/animal/lion.svg';
import Penguin from '../svg/animal/penguin.svg';
import Tiger from '../svg/animal/tiger.svg';

import s_frog from '../audio/english/animal/frog.mp3';
import s_goose from '../audio/english/animal/goose.mp3';
import s_lion from '../audio/english/animal/lion.mp3';
import s_penguin from '../audio/english/animal/penguin.mp3';
import s_tiger from '../audio/english/animal/tiger.mp3';

// jobs
import Dancer from '../svg/jobs/dancer.svg';
import Doctor from '../svg/jobs/doctor.svg';
import Pilot from '../svg/jobs/pilot.svg';
import Producer from '../svg/jobs/producer.svg';
import Programmer from '../svg/jobs/programmer.svg';

import s_dancer from '../audio/english/jobs/dancer.mp3';
import s_doctor from '../audio/english/jobs/doctor.mp3';
import s_pilot from '../audio/english/jobs/pilot.mp3';
import s_producer from '../audio/english/jobs/producer.mp3';
import s_programmer from '../audio/english/jobs/programmer.mp3';

// transportation
import Bicycle from '../svg/transportation/bicycle.svg';
import Airplane from '../svg/transportation/airplane.svg';
import Boat from '../svg/transportation/boat.svg';
import Car from '../svg/transportation/car.svg';
import Motorcycle from '../svg/transportation/motorcycle.svg';

import s_bicycle from '../audio/english/transportation/bike.mp3';
import s_airplane from '../audio/english/transportation/airplane.mp3';
import s_boat from '../audio/english/transportation/boat.mp3';
import s_car from '../audio/english/transportation/car.mp3';
import s_motorcycle from '../audio/english/transportation/motorcycle.mp3';

// food
import Vegetables from '../svg/food/vegetables.svg';
import Hotdog from '../svg/food/hotdog.svg';
import Pie from '../svg/food/pie.svg';
import Rice from '../svg/food/rice.svg';
import Sandwich from '../svg/food/sandwich.svg';

import s_vegetable from '../audio/english/food/vegetable.mp3';
import s_hotdog from '../audio/english/food/hotdog.mp3';
import s_pie from '../audio/english/food/pie.mp3';
import s_rice from '../audio/english/food/rice.mp3';
import s_sandwich from '../audio/english/food/sandwich.mp3';

export const e_foods = [
	{
		id: 1,
		title: 'SANDWICH',
		audio: new Audio(s_sandwich),
		icon: Sandwich,
	},
	{
		id: 2,
		title: 'DOG',
		audio: new Audio(s_hotdog),
		icon: Hotdog,
	},
	{
		id: 3,
		title: 'PIE',
		audio: new Audio(s_pie),
		icon: Pie,
	},
	{
		id: 4,
		title: 'RICE',
		audio: new Audio(s_rice),
		icon: Rice,
	},
	{
		id: 1,
		title: 'VEGETABLE',
		audio: new Audio(s_vegetable),
		icon: Vegetables,
	},
];

export const e_transportation = [
	{
		id: 1,
		title: 'BIKE',
		audio: new Audio(s_bicycle),
		icon: Bicycle,
	},
	{
		id: 2,
		title: 'AIRPLANE',
		audio: new Audio(s_airplane),
		icon: Airplane,
	},
	{
		id: 3,
		title: 'CAR',
		audio: new Audio(s_car),
		icon: Car,
	},
	{
		id: 4,
		title: 'BOAT',
		audio: new Audio(s_boat),
		icon: Boat,
	},
	{
		id: 5,
		title: 'MOTORCYCLE',
		audio: new Audio(s_motorcycle),
		icon: Motorcycle,
	},
];

export const e_jobs = [
	{
		id: 1,
		title: 'DANCER',
		audio: new Audio(s_dancer),
		icon: Dancer,
	},
	{
		id: 2,
		title: 'DOCTOR',
		audio: new Audio(s_doctor),
		icon: Doctor,
	},
	{
		id: 3,
		title: 'PILOT',
		audio: new Audio(s_pilot),
		icon: Pilot,
	},
	{
		id: 4,
		title: 'PRODUCER',
		audio: new Audio(s_producer),
		icon: Producer,
	},
	{
		id: 5,
		title: 'PROGRAMMER',
		audio: new Audio(s_programmer),
		icon: Programmer,
	},
];

export const e_animals = [
	{
		id: 1,
		title: 'GOOSE',
		audio: new Audio(s_goose),
		icon: Goose,
	},
	{
		id: 2,
		title: 'TIGER',
		audio: new Audio(s_tiger),
		icon: Tiger,
	},
	{
		id: 3,
		title: 'LION',
		audio: new Audio(s_lion),
		icon: Lion,
	},
	{
		id: 4,
		title: 'PENGUIN',
		audio: new Audio(s_penguin),
		icon: Penguin,
	},
	{
		id: 5,
		title: 'FROG',
		audio: new Audio(s_frog),
		icon: Frog,
	},
];

export const e_tools = [
	{
		id: 1,
		title: 'HAMMER',
		audio: new Audio(s_hammer),
		icon: Hammer,
	},
	{
		id: 2,
		title: 'MACHETE',
		audio: new Audio(s_machete),
		icon: Machete,
	},
	{
		id: 3,
		title: 'GLOVE',
		audio: new Audio(s_glove),
		icon: Glove,
	},
	{
		id: 4,
		title: 'SAW',
		audio: new Audio(s_saw),
		icon: Saw,
	},
	{
		id: 5,
		title: 'SCREWDRIVER',
		audio: new Audio(s_screwdriver),
		icon: Screwdriver,
	},
];

export const e_generals = [
	{
		id: 1,
		title: 'UP',
		audio: new Audio(s_up),
		icon: Up,
	},
	{
		id: 2,
		title: 'DOWN',
		audio: new Audio(s_down),
		icon: Down,
	},
	{
		id: 3,
		title: 'LEFT',
		audio: new Audio(s_left),
		icon: Left,
	},
	{
		id: 4,
		title: 'RIGHT',
		audio: new Audio(s_right),
		icon: Right,
	},
	{
		id: 5,
		title: 'NO',
		audio: new Audio(s_no),
		icon: No,
	},
	{
		id: 6,
		title: 'GO',
		audio: new Audio(s_go),
		icon: Go,
	},
	{
		id: 7,
		title: 'STOP',
		audio: new Audio(s_stop),
		icon: Stop,
	},
	{
		id: 8,
		title: 'YES',
		audio: new Audio(s_yes),
		icon: Yes,
	},
];
