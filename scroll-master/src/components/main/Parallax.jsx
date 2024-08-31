import React from 'react';
import './Parallax.css';

function SeasonText({i}) {
    const seasonalQuotes = [
        "In the tender embrace of spring, even the whispers of the earth carry the promise of rebirth.",
        "As summer dances upon the horizon, the sun writes stories of warmth and endless possibility.",
        "In the quiet descent of autumn leaves, the world prepares to unveil the beauty in letting go.",
        "Winter wraps the world in silence, where even the frost holds the elegance of forgotten dreams."
    ];
    
    return (
        <div className='season-text inner'>
            {seasonalQuotes[i]}
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
                <div className='season-title'>{seasons[idx]}</div>
                <div className='season-image' style={divStyle}></div>
                <SeasonText i={idx}/>
            </div>
        );
    });

    return (
        <section className='season'>
            {seasonImages}
        </section>
    );
}
