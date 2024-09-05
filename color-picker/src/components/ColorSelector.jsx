import React, {useRef, useState, useEffect} from 'react';
import iro from'@jaames/iro';

function ColorInput() {
    const colPickRef = useRef();
    const [color, setColor] = useState('#ffffff');

    useEffect(()=>{
        const colorPicker = new iro.ColorPicker(colPickRef.current, {
            width: 320,
            color : '#ffffff',
            layout: [
                {
                  component: iro.ui.Wheel,
                },
            ]
        });

        colorPicker.on('color:change', (color)=>{
            setColor(color.hexString);
        })
    }, [])


    return (
        <>
            <div ref={colPickRef}></div>
            <p>selected : {color}</p>
        </>
        
    );  
}

export default function ColorSelector() {
    return (
        <div id='color-selector'>
            <ColorInput />
        </div>
    )
}

