import React from 'react';
import './Parallax.css';

function SeasonText() {
    return (
        <div className='season-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
        </div>
    );
}

export default function SeasonImages() {
    const seasons = ['spring', 'summer', 'fall', 'winter'];
    const seasonImages = seasons.map((el, idx) => {
        const divStyle = {
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/${el}.jpg)`,
        };

        return (
            <div key={idx} className='season-container'>
                <div className='season-image' style={divStyle}></div>
                <SeasonText />
            </div>
        );
    });

    return (
        <section className='season'>
            {seasonImages}
        </section>
    );
}
