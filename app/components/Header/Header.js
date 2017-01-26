import React from 'react';
import './header-style.scss';
import {Link} from 'react-router'

import Button from '../Button/Button'

const Header = () => {
  return (
    <div className="header-container">
      <Link className='main-header' to='/'><h1 className='main-header'>CHUCK NORRIS JOKE MACHINE</h1> </Link>
      <Link to='/settings'><button className='settings-btn'>SETTINGS</button></Link>
    </div>
  );
}

export default Header;
