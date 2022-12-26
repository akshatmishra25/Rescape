import './Nav.css';
import React from 'react';

// import './style.css'
import Buttons from '../button/buttons';


const Nav = () => {
  return (
    <nav
      style={{
        backgroundColor: 'rgb(25,25,25)'
      }}
    >
      {/* <section> */}
        <div className='nav_left'>
          <img
            className='nav_logo'
            alt='logo'
            src='https://www.pngfind.com/pngs/m/625-6256136_rockstar-games-logo-png-png-download-rockstar-games.png'
          />
          <div className='nav_links'>
            <a href='/'> HOME </a>
            <a href='/'> RESUMEs </a>
            <a href='/'> CVs </a>
            <a href='/'> RESUMEs Examples </a>
            <a href='/'> CONTACT </a>
            <a href='/'> FAQs </a>
            
          </div>
        </div>
        <div className='nav_right'>
          
        <Buttons />
        
          
        </div>
      {/* </section> */}
    </nav>
  );
};

export default Nav;