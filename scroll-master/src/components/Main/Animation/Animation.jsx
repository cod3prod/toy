import React, { useEffect, useRef, useState } from 'react';
import './Animation.css';

function Boxs() {
    // 각 박스의 가시성을 개별적으로 관리하기 위한 상태 배열
    const [visibility, setVisibility] = useState(Array(10).fill(false));

    // 각 박스에 대한 ref 배열
    const boxRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = boxRefs.current.indexOf(entry.target);
                    if (entry.isIntersecting) {
                        setVisibility(prevVisibility => {
                            const newVisibility = [...prevVisibility];
                            newVisibility[index] = true;
                            return newVisibility;
                        });
                        observer.unobserve(entry.target); // 요소가 뷰포트에 들어오면 관찰 중지
                    }
                });
            },
            { threshold: 0.1 } // 10%가 뷰포트에 보일 때 콜백 호출
        );

        // 각 박스에 대해 observer를 설정
        boxRefs.current.forEach(box => {
            if (box) {
                observer.observe(box);
            }
        });

        // Clean-up 함수에서 observer 관찰 해제
        return () => {
            boxRefs.current.forEach(box => {
                if (box) {
                    observer.unobserve(box);
                }
            });
        };
    }, []);

    const boxs = Array(10).fill(null).map((_, idx) => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return (
            <div
                key={idx}
                className={`div-container ${visibility[idx] ? 'slide-up' : 'fade-in'}`}
                ref={el => boxRefs.current[idx] = el}>
                <div 
                    className='inner'
                    style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 0.4)` }}>
                    <span>{`BOX ${idx + 1}`}</span>
                </div>
            </div>
        )
    });

    return (
        <>
            {boxs}
        </>
    );
}

export default function Animation() {
    return (
        <section className='animation'>
            <Boxs />
        </section>
    );
}
