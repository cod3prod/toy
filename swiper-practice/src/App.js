import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faXmark, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';


import "./styles.css";



function Modal({isModalOpen, isNavOn, slideNumber, handleSlideNumber, handelNav, handleModal}) {
  const inputNumRef = useRef();

  return(
    <div className="modal" style={{display : isModalOpen ? 'block' : 'none'}}>
      <div onClick={handleModal} className="close">
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="setting">
        <div className="setting-wrapper">
          <div className="setting-content">
            Number of Slide
          </div>
          <div className="setting-controller">
            <input
              ref={inputNumRef}
              onChange={()=>{handleSlideNumber(Number(inputNumRef.current.value))}}
              type='number'
              value={slideNumber} />
          </div>
        </div>

        <div className="setting-wrapper">
          <div className="setting-content">
            Navigation
          </div>
          <div className="setting-controller">
            <FontAwesomeIcon onClick={handelNav} icon={isNavOn?faToggleOn:faToggleOff} /> 
          </div>
        </div>

        <div className="setting-wrapper">
          <div className="setting-content">
            Pagination
          </div>
          <div className="setting-controller">
            <div className='dropdown'>
              Mode
              <div className='dropdown-contents'>
                <div className='dropdown-contents'>None</div>
                <div className='dropdown-contents'>Dynamic</div>
                <div className='dropdown-contents'>Progress</div>
                <div className='dropdown-contents'>Fraction</div>
                <div className='dropdown-contents'>Custom</div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(9);
  const [isNavOn, setIsNavOn] = useState(false);
  const [pagMode, setPagMode] = useState(false);

  function handleModal(){
    if(!isModalOpen){
      setIsModalOpen(true);
    }
    else{
      setIsModalOpen(false);
    }
  }

  function handleNav(){
    if(!isNavOn){
      setIsNavOn(true);
    }
    else{
      setIsNavOn(false);
    }
  }

  function handleSlideNumber(num){
    setSlideNumber(num);
  }

  const slides = Array(slideNumber).fill(null).map((el, idx)=>{
    return (
      <SwiperSlide key={idx}>Slide {idx+1}</SwiperSlide>
    )
  })

  return (
    <>
      <Swiper 
        className="mySwiper"
        navigation={isNavOn}
        pagination={{
          dynyamicBulltes: true,
          type:'fraction',
        }}
        modules={[Navigation, Pagination]}
      >
        <div onClick={handleModal} className="swiper-controller">
          <FontAwesomeIcon icon={faGear} />
        </div>
        {slides}
      </Swiper>
      <Modal 
        isModalOpen={isModalOpen}
        isNavOn={isNavOn}
        slideNumber={slideNumber}
        handleSlideNumber={handleSlideNumber}
        handelNav={handleNav}
        handleModal={handleModal} />
    </>
  );
}
