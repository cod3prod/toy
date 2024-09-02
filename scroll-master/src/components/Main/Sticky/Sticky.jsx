import React from 'react';
import './Sticky.css';

function Cards() {
    const cards = Array(20).fill(null).map((el, idx) => {
        return (
            <div 
                key={idx}
                className='card inner'
                style={{top:`calc(100px + ${idx} * 10px)`}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus quis explicabo fugiat inventore, harum numquam? Obcaecati, nisi molestias. Corrupti incidunt ad omnis. Distinctio necessitatibus asperiores esse dignissimos aliquam itaque vitae tenetur eius officiis nihil. Reprehenderit exercitationem illum, nam nostrum fugiat iure consequatur animi nesciunt laborum veritatis, dignissimos minus quo distinctio magnam! Cumque at repudiandae exercitationem, tempora architecto iste, nam delectus rerum ut quis sunt earum perspiciatis et placeat quaerat maxime tenetur beatae quae possimus dignissimos reprehenderit officiis eius. Quibusdam cum adipisci quod. Nihil mollitia officiis officia quam tempora voluptas, odit eos totam delectus quos reprehenderit quibusdam placeat. Commodi, impedit.
            </div>
        );
    })

    return (
        <div className='cards-container'>
            {cards}
        </div>
    );
}

export default function Sticky() {
    return (
        <section className='sticky'>
            <Cards />
        </section>
    );
}