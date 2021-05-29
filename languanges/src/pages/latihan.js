import { useEffect, useState } from 'react';
import SF from '../tensorflow/SoundClassifier';
import { useSpring, animated } from 'react-spring';
import Swal from 'sweetalert2';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Center,
  Category,
  Text,
  BottomNav,
  Button,
  Bar,
  Normal,
  Loader,
  AudioPlay,
  AudioRecord,
  ProgressBar,
} from '../styles/styles';
import Volume from '../svg/volume.svg';
import mic from '../svg/microphone.svg';
import stop from '../svg/stop.svg';
import s_start from '../audio/start.mp3';
import s_stop from '../audio/stop.mp3';
import s_success from '../audio/success.mp3';
import s_incorrect from '../audio/incorrect.mp3';
// data
import {
  e_generals,
} from '../data/english';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Latihan() {
  let data = e_generals;
  let model;
  const history = useHistory();
  const location = useLocation();
  const start = new Audio(s_start);
  const off = new Audio(s_stop);
  const languange = location.pathname.split('/')[2];
  const kategori = location.pathname.split('/')[3];
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [loader, setLoader] = useState(true);
  const [index, setIndex] = useState(0);
  const [isActive, setActive] = useState(false);
  const [label, setLabel] = useState('');
  const [confidence, setConfidence] = useState('');
  const [play, setPlay] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    // classifySound();
  }, []);


  const classifySound = async () => {
    const options = { probabilityThreshold: 0.7 };
    const classification = await SF(model, options);
    classification.classify((error, result) => {
      console.log('label', result[0].label);
      if (error) {
        console.error(error);
      }

      if (result[0].label !== 'Background Noise') {
        setLabel(result[0].label);
        setConfidence(result[0].confidence.toFixed(4));
      }
    });
  };

  useEffect(() => {
    if (play !== null) {
      if (play) {
        start.play();
        SpeechRecognition.startListening({
          continuous: true,
          language: 'en-US',
        });
        classifySound();
      } else {
        off.play();
        SpeechRecognition.stopListening();
        resetTranscript();
      }
    }
  }, [play]);

  useEffect(() => {
    const keyword = transcript.split(' ')[transcript.split(' ').length - 1];
    if (confidence > 0.7) {
      if (
        keyword.toLowerCase() === label.toLowerCase() &&
        label.toLowerCase() === data[index].title.toLowerCase()
      ) {
        const s = new Audio(s_success);
        Swal.fire({
          title: 'Benar !',
          text:
            index === 4 ? 'Selamat kamu berhasil mengucapkan semua kata' : '',
          icon: 'success',
          confirmButtonText: index === 4 ? 'SELESAI' : 'KELUAR',
          confirmButtonColor: '#f15a29',
          iconColor: '#f15a29',
        }).then(() => {
          if (index === 4) {
            history.push(`/kategori/${languange}`);
          }
        });
        s.play();
        setDisabled(false);
        if (!isActive) {
          setProgress(progress + 20);
          setActive(true);
        }
      }

      // if (keyword !== label.toLowerCase()) {
      // 	const inco = new Audio(s_incorrect);
      // 	inco.play();
      // }
    }
  }, [confidence]);
  // console.log(transcript.split(' ')[transcript.split(' ').length - 1]);
  if (loader)
    return (
      <Loader>
        <div class="lds-circle">
          <div></div>
        </div>
      </Loader>
    );

  // console.log(transcript.split(' ')[transcript.split(' ').length - 1]);
  return (
    <>
      <Center>
        <AudioPlay onClick={() => data[index].audio.play()}>
          <img src={Volume} height="50px" width="50px" />
        </AudioPlay>
        <Bar>
          <div
            style={{
              width: `${progress}%`,
              height: '16px',
              backgroundColor: '#f15a29',
              borderRadius: '20px',
            }}
          />
        </Bar>
      </Center>
      <Normal>Ucapkan</Normal>
      <Center>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <Category>
            <img src={data[index].icon} height="160px" width="143px" />
            <Text>
              {data[index].title === 'DOG' ? 'HOT DOG' : data[index].title}
            </Text>
          </Category>
        </animated.div>
      </Center>
      <BottomNav>
        <div>
          <Button onClick={() => history.goBack()}>KEMBALI</Button>
          <AudioRecord onClick={() => setPlay(!play)}>
            <img src={play ? stop : mic} width="30px" height="30px" />
          </AudioRecord>
          <Button
            onClick={() => {
              if (index === 4) {
                setIndex(0);
              } else {
                setIndex(index + 1);
              }
              setDisabled(true);
              setActive(false);
            }}
            disabled={disabled}
            active={disabled === false}
          >
            SELANJUTNYA
          </Button>
        </div>
      </BottomNav>
    </>
  );
}

export default Latihan;
