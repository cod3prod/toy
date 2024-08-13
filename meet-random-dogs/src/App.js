import React, { useEffect, useState } from 'react';

function Modal({ onActive, onCloseClick, images, imgIdx }) {
  return (
    <div
      className='modal'
      style={{
        display: onActive ? 'block' : 'none'
      }}
    >
      <span className='modal-close' onClick={onCloseClick}>&times;</span>
      {images.length ? (
        <>
          <span className='modal-description'>{images[imgIdx][1]}</span>
          <img className='modal-image' src={images[imgIdx][0]} alt='dog' />
        </>
      ) : (
        <span className='modal-description'>이미지를 불러오는 중입니다...</span>
      )}
    </div>
  );
}

export default function Container() {
  const [dogImgs, setDogImgs] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [curImgIdx, setCurImgIdx] = useState(null);

  async function getDogs(onFetch) {
    const fetchPromises = Array.from({ length: 32 }, () => {
      return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json());
    });

    try {
      const results = await Promise.all(fetchPromises);
      const images = results.map(result => [result.message, result.message.split('/')[4]]);
      console.log(images);
      onFetch(images);
    }
    catch (error) {
      console.error('Fetch 에러 : ', error);
    }
  }

  useEffect(() => {
    getDogs(setDogImgs);
  }, []);

  function openModal(i) {
    setCurImgIdx(i);
    setIsModalActive(true);
  }

  function closeModal() {
    setIsModalActive(false);
  }

  const doors = Array(32).fill(null).map((el, idx) => {
    return (
      <div key={idx} className='door'>
        <div
          onClick={() => { openModal(idx) }}
          style={{
            backgroundImage: `url('/doors/img${idx + 1}.jpg')`
          }}
          className='image'></div>
      </div>
    );
  });

  return (
    <>
      <Modal onActive={isModalActive} onCloseClick={closeModal} images={dogImgs} imgIdx={curImgIdx} />
      <div className='container'>
        <div className='doors'>
          {doors}
        </div>
        <h1 className='title'>Meet Random Dogs</h1>
      </div>
    </>
  );
}
