import React, {useState, useEffect, KeyboardEvent } from 'react';

// components 
import Input from './components/Input/Input';
import Display from './components/display/Display';

let data = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
let data1 = "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
let data2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"

let arr = [data, data1, data2];

function App() {
  const [value, setValue] = useState<string>('');
  const [text, setText] = useState<Array<string>>(arr[0].split(" "));
  const [currIndex, setCurrIndex] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(59);
  const [playTime, setPlayTime] = useState<boolean>(false);
  const [totalChar, setTotalChar] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [idx, setIdx] = useState<number>(0);

  const onChange:(e:React.ChangeEvent<HTMLInputElement>) => void = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (!playTime)  {
      setPlayTime(true);
    }

    setValue(e.target.value);
  }

  const getKey = (event:any) => {

    let currText = null;

    if (event.code === 'Space') {

      text.map((item, index) => {
        if (item === value.trim() && index === currIndex) {
          currText = value.trim();
          setTotalChar(totalChar + Number(value.trim().length))
          setError(false);
        }
      })

      if (currText) {
        setCurrIndex(currIndex+1);
        setValue('');
      } 

      if (currText != value.trim()) {
        setError(true);
        setValue('');
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown',getKey);

    return () => {
      window.removeEventListener('keydown', getKey)
    }
  }, [value]);


  
  useEffect(() => {

    if (text.length === currIndex) {
      setText(arr[idx+1].split(" "));
      setIdx(idx+1);
      setCurrIndex(0);
    }

    if (playTime) {
      setTimeout(() => {
        setTimeLeft(timeLeft-1);
      }, 1000);
    }

    if (!playTime) {
      setTimeLeft(59);
    }

    if (timeLeft === 0) {
      setPlayTime(false);
      setCurrIndex(0);
      setText(arr[0].split(' '));
      setValue('');
      setLoading(true);
      setError(false);
      setIdx(0);
    }

  });

  const onRestart = () => {
    setPlayTime(false);
    setCurrIndex(0);
    setText(arr[0].split(' '));
    setTotalChar(0);
    setValue('');
    setLoading(true);
    setIdx(0);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTotalChar(0);
    }, 3000);
  }, [loading]);

  return (
    <div className="container">
      {error && (<h2 style={{ color: 'red'}}>Salah ketik...!</h2>)}
      <Display text={text} currIndex={currIndex} loading={loading} />
      <div className="typing-menu">
        <Input onChange={onChange} value={value} />
        <div className="timer">{playTime ? <p>0:{Math.abs(timeLeft)}</p> : <p>1:00</p>}</div>
        <div className="reset" onClick={() =>  onRestart()}><p>RESTART</p></div>
      </div>
      <div>
       <h2>WPM: {!playTime ? Math.floor(totalChar/5) : 0}</h2>
      </div>
    </div>
  );
}

export default App;
