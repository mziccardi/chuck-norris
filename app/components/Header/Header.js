import React from 'react';
import './header-style.css';

import Button from '../Button/Button'

const Header = () => {
  return (
    <div className="Header">
      <h1>Header</h1>
      <Button handleClick ={ ()=> logstuff()} />
    </div>
  );
}

export default Header;
