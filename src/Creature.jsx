import { useState } from 'react';

function Creature(props) {
    const [isAwake , setIsAwake] = useState(false);
    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'

    };


    return (
        <div style={style}>
            <img src={props.sleepImageUrl} alt={props.name} width="120" />
            <p>{props.name}, age {props.age}</p>
            <button onClick={setIsAwake(prev => !prev)} >  Awake toggle  </button>
        </div>
    );
}

export default Creature;
