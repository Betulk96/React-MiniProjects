import React from 'react';
import SocialMenu from './social-menu';
import './index.scss';

const Header = () => {
    const imgSrc="https://icons.iconarchive.com/icons/iconka/cat-halloween/64/cat-mummy-icon.png";
    return (
        <div className='header'>
            <div className='logo'>
               <img src={imgSrc} width="64" height="64" alt="Cat Icon" />
            <h1>The Cat</h1>  
            </div>
           
            <div className='menu'>
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Contact</h2>
            </div>

            <SocialMenu />
        </div>
    );
};

export default Header;
