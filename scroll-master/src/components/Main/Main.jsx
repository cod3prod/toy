import React, {useRef, useEffect} from 'react';
import './Main.css'

const Intro = () => {
    const imgRefs = useRef([]);

    useEffect(()=>{
        imgRefs.current.forEach((el, idx)=>{
            setTimeout(()=>{
                el.classList.add('fade-in');
            }, (idx+1)*500);
        })
    },[])

    return (
        <section className='intro'>
            <div className="inner">
                <div ref={el=>imgRefs.current[0] = el} className="title">
                    <img src='./images/intro-title.png' alt='Title'></img>
                </div>
                <div ref={el=>imgRefs.current[1] = el} id='intro-image1'>
                    <img src='./images/intro1.png' alt='Intro Image1'></img>
                </div>
                <div ref={el=>imgRefs.current[2] = el} id='intro-image2'>
                    <img src='./images/intro2.png' alt='Intro Image2'></img>
                </div>
            </div>
        </section>
    );
}

const Main = () => {
    return (
        <div>
            <Intro />
        </div>
    );
};

export default Main;