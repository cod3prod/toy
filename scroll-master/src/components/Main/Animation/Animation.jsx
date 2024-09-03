import React, { useEffect, useRef } from 'react';
import './Animation.css';

function Box({isFadeInOn}) {
    const boxRefs = useRef([]);

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach( entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('active')
                }
            });
        }, {
            threshold: 0.5
        })

        boxRefs.current.forEach(box => {
            if(box) {
                observer.observe(box);
            }
        });

        return () => {
            boxRefs.current.forEach( box => {
                if(box) {
                    observer.unobserve(box);
                }
            });
        };

    }, []);

    const boxs = Array(5).fill(null).map((el, idx)=>{
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
 
        return (
            <div
                ref = {el => boxRefs.current[idx] = el }
                key={idx} 
                className={isFadeInOn?'box fade-in':'box fade-out'}
                style={{backgroundColor:`rgba(${r}, ${g}, ${b}, 0.5)`}}
            >    
                
                {`${isFadeInOn?'Fade-in':'Fade-out'}`}
                <br />
                {`BOX ${idx+1}`}
            
            </div>
        );
    })

    return (
        <>
            {boxs}
        </>      
    )
}


function Container({isFadeInOn}) {

    return (
        <div className='inner'>
            <Box isFadeInOn={isFadeInOn}/>
        </div>
    );
}


export default function Animation() {
    return (
        <section className='animation'>
            <Container isFadeInOn = {true}/>
            <Container isFadeInOn = {false}/>
        </section>
    );
}
