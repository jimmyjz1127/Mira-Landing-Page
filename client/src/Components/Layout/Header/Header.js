//styling
import './Header.css';


import React from 'react';

import {SocialIcon} from 'react-social-icons';


function Header(props) {

    return (
            <nav className='nav-bar'>
                <div className='logo-wrapper'>
                    <img src='http://localhost:5055/logo' className='logo'/>
                    <h1 className='nav-title'>Mira <span className='navy-text'>Finance</span></h1>
                </div>

                <div className='header-socials'>
                    <div className='nav-social-item'>
                        <SocialIcon url='https://twitter.com/Mira_Finance'/>
                    </div>

                    <div className='nav-social-item' style={{backgroundColor:'white', borderRadius:'25px'}}>
                        <SocialIcon url='https://medium.com/'/>
                    </div>

                    <div className='nav-social-item' style={{backgroundColor:'white', borderRadius:'25px'}}>
                        <SocialIcon url='https://www.reddit.com/'/>
                    </div>

                    <button className='nav-social-item blog-btn'>Blog</button>
                </div>
            </nav>
    );
}

export default Header;