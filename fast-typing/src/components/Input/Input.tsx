import React from 'react';

import './Input.css';

type Props = {
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    value: string
}

function Input(props: Props) {
    return (
        <div className="typing-container">
            <input type="text" name="typing" className="typing" onChange={(e) => props.onChange(e)} value={props.value} />
        </div>
    )
}

export default Input