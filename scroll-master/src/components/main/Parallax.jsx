import React from 'react';

function SeasonText() {
    return (
        <div className='season-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum sapiente tempore ex in quam consequuntur obcaecati nemo iusto eos quas labore praesentium, maxime harum et dolores dolore sequi maiores.
            Quas autem culpa incidunt sequi ratione dolorem laudantium nihil voluptate dolores. Libero omnis aspernatur minima soluta. Voluptate accusamus, repellat nihil excepturi id odio reiciendis maxime assumenda, quod atque esse ad!
        </div>
    );
}

export default function SeasonImages() {
    const seasons = ['spring', 'summer', 'fall', 'winter'];
    const seasonImages = seasons.map((el, idx) => {
        const backgroundImage = `/images/${el}.jpg`;

        return (
            <div key={idx} className='season-container'>
                <div 
                    className='season-image' 
                    style={{ backgroundImage: 'url(backgroundImage)' }}
                >
                </div>
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
