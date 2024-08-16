import React, { useRef, useEffect } from 'react';
import './Header.css';

const SubMenu = () => {
    const searchRef = useRef();
    const inputRef = useRef();

    function searchClicked() {
        inputRef.current.focus();
    }

    function inputFoucsed() {
        searchRef.current.classList.add('focused');
    }

    function inputBlured() {
        searchRef.current.classList.remove('focused');
    }

    return (
        <div className='sub-menu'>
            <ul className='menu'>

                <li>
                    <a href='/'>Lorem</a>
                </li>
                <li>
                    <a href='/'>ipsum</a>
                </li>
                <li>
                    <a href='/'>dolor</a>
                </li>
            </ul>
            <div ref={searchRef} onClick={searchClicked} className='search'>
                <input
                    ref={inputRef}
                    type="text"
                    onFocus={inputFoucsed}
                    onBlur={inputBlured} />
                <span class="material-icons">search</span>
            </div>
        </div>

    );
};

const MainMenu = () => {
    return (
        <ul className="main-menu">
            <li className="item">
                <div className="item__name">Lorem ipsum</div>
                <div className="item__contents">
                    <div className="contents__menu">
                        <ul className="inner">
                            <li>
                                <h4>Lorem ipsum dolor</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Lorem ipsum dolor sit</h4>
                                <ul>
                                    <li>Ut enim ad minim veniam</li>
                                    <li>Quis nostrud exercitation ullamco laboris</li>
                                    <li>Nisi ut aliquip ex ea commodo consequat</li>
                                    <li>Duis aute irure dolor in reprehenderit</li>
                                    <li>In voluptate velit esse cillum dolore</li>
                                    <li>Eu fugiat nulla pariatur</li>
                                    <li>Excepteur sint occaecat cupidatat non proident</li>
                                    <li>Sunt in culpa qui officia deserunt mollit anim id est laborum</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Lorem ipsum dolor sit</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                    <li>Quis nostrud exercitation ullamco laboris</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="contents__texture">
                        <div className="inner">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <h4>Sed do eiusmod tempor incididunt</h4>
                            <p>Ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item">
                <div className="item__name">Lorem ipsum</div>
                <div className="item__contents">
                    <div className="contents__menu">
                        <ul className="inner">
                            <li>
                                <h4>Lorem ipsum dolor sit</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                    <li>Quis nostrud exercitation ullamco laboris</li>
                                    <li>Nisi ut aliquip ex ea commodo consequat</li>
                                    <li>Duis aute irure dolor in reprehenderit</li>
                                    <li>In voluptate velit esse cillum dolore</li>
                                    <li>Eu fugiat nulla pariatur</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Lorem ipsum dolor sit</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                    <li>Quis nostrud exercitation ullamco laboris</li>
                                    <li>Nisi ut aliquip ex ea commodo consequat</li>
                                    <li>Duis aute irure dolor in reprehenderit</li>
                                    <li>In voluptate velit esse cillum dolore</li>
                                    <li>Eu fugiat nulla pariatur</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Lorem ipsum dolor sit</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Lorem ipsum dolor sit</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                    <li>Quis nostrud exercitation ullamco laboris</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="contents__texture">
                        <div className="inner">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item">
                <div className="item__name">Lorem ipsum</div>
                <div className="item__contents">
                    <div className="contents__menu">
                        <ul className="inner">
                            <li>
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                    <li>Quis nostrud exercitation ullamco laboris</li>
                                    <li>Nisi ut aliquip ex ea commodo consequat</li>
                                    <li>Duis aute irure dolor in reprehenderit</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="contents__texture">
                        <div className="inner">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item">
                <div className="item__name">Lorem ipsum</div>
                <div className="item__contents">
                    <div className="contents__menu">
                        <ul className="inner">
                            <li>
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                    <li>Quis nostrud exercitation ullamco laboris</li>
                                    <li>Nisi ut aliquip ex ea commodo consequat</li>
                                    <li>Duis aute irure dolor in reprehenderit</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                    <li>Quis nostrud exercitation ullamco laboris</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut enim ad minim veniam</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="contents__texture">
                        <div className="inner">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

    );
}

const Badges = () => {
    const badgesRef = useRef();
    
    useEffect(()=>{
        const ctlBadges = ()=>{
            if(window.scrollY > 500){
                badgesRef.current.classList.remove('active');
            }
            else {
                badgesRef.current.classList.add('active');
            }
        }
        ctlBadges()

        window.addEventListener('scroll', ctlBadges);
        

        return () => {
            window.removeEventListener('scroll', ctlBadges);
        }
    }, []);

    return (
        <div ref={badgesRef} className="badges active">
            <div className="badge">
                <img src='./images/badge1.png' alt='Badge'></img>
            </div>
            <div className="badge">
                <img src='./images/badge2.png' alt='Badge'></img>
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <header>
            <div className="inner">
                <a href="/" class='logo'>
                    <img src='./logo.png' alt="Logo" />
                </a>
                <SubMenu />
                <MainMenu />
            </div>
            <Badges />
        </header>
    );
};

export default Header;
