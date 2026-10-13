import { useState } from 'react';

function Creature(props) {
    const [isAwake, setIsAwake] = useState(false);
    
    const [position, setPosition] = useState({
        x: props.x,
        y: props.y
    });

    
    function changeLocation() {
        setIsAwake(prev => !prev);
        
        
        const maxX = 680; 
        const maxY = 620; 
        setPosition({
            x: Math.max(0, Math.floor(Math.random() * maxX)),
            y: Math.max(0, Math.floor(Math.random() * maxY))
        });
        

    }

    const style = {
        position: 'absolute',
        left: position.x + 'px',
        top: position.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated',
       
    };

    return (
        <div style={style}>
            <img 
                src={isAwake ? props.awakeImageUrl : props.sleepImageUrl} 
                alt={props.name} 
                width="120" 
                onClick={changeLocation} 
                
            />
            <p style={{ color: 'white', fontWeight: 'bold', textShadow: '1px 1px black' }}>
                {props.name}, age {props.age}
            </p>
        </div>
    );
}

export default Creature; 