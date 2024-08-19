import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper 스타일시트
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Main.css';

const Intro = () => {
    const imgRefs = useRef([]);

    useEffect(() => {
        imgRefs.current.forEach((el, idx) => {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, (idx + 1) * 500);
        });
    }, []);

    return (
        <section className='intro'>
            <div className="inner">
                <div ref={el => imgRefs.current[0] = el} className="title">
                    <img src='./images/intro-title.png' alt='Title'></img>
                </div>
                <div ref={el => imgRefs.current[1] = el} id='intro-image1'>
                    <img src='./images/intro1.png' alt='Intro Image1'></img>
                </div>
                <div ref={el => imgRefs.current[2] = el} id='intro-image2'>
                    <img src='./images/intro2.png' alt='Intro Image2'></img>
                </div>
            </div>
        </section>
    );
}

const Notice = () => {
    return (
        <section className='notice'>
            <div className='notice-line'>
                <div className="bg-left"></div>
                <div className="bg-right"></div>
                <div className="inner">
                    <div className="inner__left">
                        <h2>공지사항</h2>
                        <div className="swiper-container">
                            <Swiper
                                direction='vertical'
                                slidesPerView={1}
                                autoplay={{ delay: 500 }} // Autoplay 설정
                                loop={true} // 루프 설정
                                spaceBetween={10}
                                pagination={{ clickable: true }} // 페이지네이션 추가
                                navigation // 네비게이션 추가
                                effect="fade" // 페이드 효과 추가
                                className="swiper-wrapper"
                            >
                                <SwiperSlide className='swiper-slide'>
                                    <a href="#">크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내</a>
                                </SwiperSlide>
                                <SwiperSlide className='swiper-slide'>
                                    <a href="#">[당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트</a>
                                </SwiperSlide>
                                <SwiperSlide className='swiper-slide'>
                                    <a href="#">스타벅스커피 코리아 애플리케이션 버전 업데이트 안내</a>
                                </SwiperSlide>
                                <SwiperSlide className='swiper-slide'>
                                    <a href="#">[당첨자 발표] 뉴이어 전자영수증 이벤트</a>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <a href="#" className="notice-line__more">
                            <span className="material-icons">add_circle</span>
                        </a>
                    </div>

                    <div className="inner__right">
                        <h2>스타벅스 프로모션</h2>
                        <div className="toggle-promotion open">
                            <div className="material-icons">upload</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Main = () => {
    return (
        <div>
            <Intro />
            <Notice />
        </div>
    );
};

export default Main;
