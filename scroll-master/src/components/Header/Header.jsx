import React from 'react';
import './Header.css'; 

function MainMenu({ setActiveComponent }) {
    const componentsList = ['Parallax', 'Snap', 'Animation', 'Sticky'];
    const menuDescription = [
        ['Parallax Scrolling', '배경과 콘텐츠가 서로 다른 속도로 스크롤되는 효과입니다.'],
        ['Scroll Snap', '스크롤 시 콘텐츠가 특정 위치에 "스냅"되도록 하는 효과입니다.'],
        ['Animation Trigger', '사용자가 페이지를 스크롤할 때 애니메이션이 시작됩니다.'],
        ['Sticky Elements', '특정 요소가 화면에 고정되거나 스크롤 위치에 따라 고정된 상태로 유지됩니다.']
    ];

    function handleClick(index) {
        return (event) => {
            event.preventDefault();
            setActiveComponent(componentsList[index]);
        };
    }

    return (
        <div className='main-menu'>
            <div className='inner'>
                <ul>
                    {menuDescription.map((description, index) => (
                        <li className='main-menu-title' key={index}>
                            <a href='#' onClick={handleClick(index)}>
                                {description[0]}
                            </a>
                            <div className='main-menu-description'>
                                {description[1]}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Header({ setActiveComponent }) {
    return (
        <header>
            <MainMenu setActiveComponent={setActiveComponent} />
        </header>
    );
}
