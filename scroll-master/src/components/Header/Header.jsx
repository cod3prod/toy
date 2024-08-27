import React from 'react';
import './Hedaer.css';

function MainMenu() {
    return (
        <div className='main-menu'>
            <div className='inner'>
                <ul>
                    <li className='main-menu-title'>
                        <a href=''>Parallax Scrolling</a>
                        <div className='main-menu-description'>
                                배경과 콘텐츠가 서로 다른 속도로 스크롤되는 효과입니다.
                        </div>    
                    </li>

                    <li className='main-menu-title'>
                        <a href=''>Scroll Snap</a>
                        <div className='main-menu-description'>
                                스크롤 시 콘텐츠가 특정 위치에 "스냅"되도록 하는 효과입니다.
                        </div>    
                    </li>

                    <li className='main-menu-title'>
                        <a href=''>Animation Trigger</a>
                        <div className='main-menu-description'>
                                사용자가 페이지를 스크롤할 때 애니메이션이 시작됩니다.
                        </div>    
                    </li>

                    <li className='main-menu-title'>
                        <a href=''>Sticky Elements</a>
                        <div className='main-menu-description'>
                                특정 요소가 화면에 고정되거나 스크롤 위치에 따라 고정된 상태로 유지됩니다.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default function Header() {
    return (
        <header>
            <MainMenu />
        </header>
    )
}