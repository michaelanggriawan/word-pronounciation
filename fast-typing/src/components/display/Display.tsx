import React from 'react';

import './Display.css';

type Props = {
    text: Array<string>,
    currIndex: number,
    loading: boolean
} 

function Display(props: Props) {
    return (
        <div className="display-container">
            {props.loading ? <img src="https://i.imgur.com/aR2WaUf.gif" height="50" width="50"/> : props.text.map((word, index) => {
            return <span style={{ borderRadius: 5, backgroundColor: props.currIndex === index ? '#dddddd' : '#fff'}} >{`${word} `}</span>;
        })}
        </div>
    )
}

export default Display;