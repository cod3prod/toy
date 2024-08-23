import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faXmark, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import "./styles.css";

function Modal({
  isModalOpen,
  isNavOn,
  isScrollOn,
  isVertical,
  isLoopOn,
  isAutoOn,
  slideNumber,
  slidesPerView,
  handleSlideNumber,
  handlePerView,
  handleNav,
  handleScroll,
  handleVertical,
  handleLoop,
  handleModal,
  handlePagination,
  handleAuto
}) {
  const inputNumRef = useRef();
  const inputPerViewRef = useRef();

  const dropdownContentsList = ['None','Default','Dynamic', 'Progress', 'Fraction'];
  const dropdownContents = dropdownContentsList.map((el, idx) => (
    <div
      onClick={() => { handlePagination(idx); }}
      key={idx}
      className='dropdown-content'
    >
      {el}
    </div>
  ));

  return (
    <div className="modal" style={{ display: isModalOpen ? 'block' : 'none' }}>
      <div onClick={handleModal} className="close">
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="setting">
        <div className="setting-wrapper">
          <div className="setting-content">Number of Slides</div>
          <div className="setting-controller">
            <input
              ref={inputNumRef}
              onChange={() => {
                const value = Number(inputNumRef.current.value);
                if (!isNaN(value) && value > 0) {
                  handleSlideNumber(value);
                }
              }}
              type='text'
              value={slideNumber}
            />
          </div>
        </div>

        <div className="setting-wrapper">
          <div className="setting-content">Slides Per View</div>
          <div className="setting-controller">
            <input
              ref={inputPerViewRef}
              onChange={() => {
                const value = Number(inputPerViewRef.current.value);
                if (!isNaN(value) && value >= 0) {
                  handlePerView(value);
                }
              }}
              type='text'
              value={slidesPerView}
            />
          </div>
        </div>

        <div className="setting-wrapper">
          <div className="setting-content">Pagination</div>
          <div className="setting-controller">
            <div className='dropdown'>
              Mode
              <div className='dropdown-contents'>{dropdownContents}</div>
            </div>
          </div>
        </div>

        <div className="setting-wrapper">
          <div className="setting-content">Navigation</div>
          <div onClick={handleNav} className="setting-controller">
            <FontAwesomeIcon icon={isNavOn ? faToggleOn : faToggleOff} />
          </div>
        </div>

        <div className="setting-wrapper">
          <div className="setting-content">Scrollbar</div>
          <div onClick={handleScroll} className="setting-controller">
            <FontAwesomeIcon icon={isScrollOn ? faToggleOn : faToggleOff} />
          </div>
        </div>

        <div className="setting-wrapper">
          <div className="setting-content">Vertical</div>
          <div onClick={handleVertical} className="setting-controller">
            <FontAwesomeIcon icon={isVertical ? faToggleOn : faToggleOff} />
          </div>
        </div>

        <div className="setting-wrapper">
          <div className="setting-content">Loop</div>
          <div onClick={handleLoop} className="setting-controller">
            <FontAwesomeIcon icon={isLoopOn ? faToggleOn : faToggleOff} />
          </div>
        </div>

        <div className="setting-wrapper">
          <div className="setting-content">Autoplay</div>
          <div onClick={handleAuto} className="setting-controller">
            <FontAwesomeIcon icon={isAutoOn ? faToggleOn : faToggleOff} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(9);
  const [slidesPerView, setSlidesPerView] = useState(1); // Default to 1, as 0 might be invalid
  const [isNavOn, setIsNavOn] = useState(true);
  const [isScrollOn, setIsScrollOn] = useState(true);
  const [isVertical, setIsVertical] = useState(false);
  const [isLoopOn, setIsLoopOn] = useState(false);
  const [isAutoOn, setIsAutoOn] = useState(true);
  const [pgMode, setPgMode] = useState(1);

  const pgModeList = [
    false,
    { clickable: true },
    { clickable: true, dynamicBullets: true },
    { type: 'progressbar' },
    { type: 'fraction' }
  ];

  function handleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleNav() {
    setIsNavOn(!isNavOn);
  }

  function handleScroll() {
    setIsScrollOn(!isScrollOn);
  }

  function handleVertical() {
    setIsVertical(!isVertical);
  }

  function handleLoop() {
    setIsLoopOn(!isLoopOn);
  }

  function handlePagination(i) {
    setPgMode(i);
  }

  function handleSlideNumber(num) {
    setSlideNumber(num);
  }

  function handlePerView(num) {
    setSlidesPerView(num);
  }

  function handleAuto(){
    if(!isAutoOn){
      setIsAutoOn(true);
    }
    else{
      setIsAutoOn(false);
    }
  }

  const slides = Array(slideNumber).fill(null).map((_, idx) => (
    <SwiperSlide key={idx}>Slide {idx + 1}</SwiperSlide>
  ));

  return (
    <>
      <Swiper
        key={`${pgMode}+10*${isLoopOn}+100*${isAutoOn}`}
        className="mySwiper"
        navigation={isNavOn}
        pagination={pgModeList[pgMode]}
        scrollbar={{ hide: isScrollOn }}
        direction={isVertical ? 'vertical' : 'horizontal'}
        loop={isLoopOn}
        slidesPerView={slidesPerView}
        autoplay={isAutoOn?{
          delay: 1000,
          disableOnInteraction: false,
        }:false}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      >
        <div onClick={handleModal} className="swiper-controller">
          <FontAwesomeIcon icon={faGear} />
        </div>
        {slides}
      </Swiper>
      <Modal
        isModalOpen={isModalOpen}
        isNavOn={isNavOn}
        isScrollOn={isScrollOn}
        isVertical={isVertical}
        isLoopOn={isLoopOn}
        isAutoOn={isAutoOn}
        slideNumber={slideNumber}
        slidesPerView={slidesPerView}
        handleSlideNumber={handleSlideNumber}
        handlePerView={handlePerView}
        handleNav={handleNav}
        handlePagination={handlePagination}
        handleVertical={handleVertical}
        handleLoop={handleLoop}
        handleModal={handleModal}
        handleScroll={handleScroll}
        handleAuto={handleAuto}
      />
    </>
  );
}
