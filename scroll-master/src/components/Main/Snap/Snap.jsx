import React from 'react';
import './Snap.css';

function Boxs() {
    const boxs = Array(10).fill(null).map((el, idx) => {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return (
            <div
                key={idx}
                className='div-container'>
                <div 
                    className='inner'
                    style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 0.4)` }}>
                    <span>{`BOX ${idx+1}`}</span>
                </div>
            </div>
        )
    })
    return (
        <>
            {boxs}
        </>
    );
}

export default function Snap() {
    return (
        <section className='snap'>
            <Boxs />
        </section>
    );
}