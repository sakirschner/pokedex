import React from 'react';
import logo from '../img/react-logo.png';

const Info = () => {
  return (
    <div className="info">
      <div>
        <img src={logo} alt="react-logo" className="logo" />
      </div>
      <div>
      <a href="https://www.scottkirschner.com" class="nes-badge is-icon">
        <span class="is-dark">hi</span>
        <span class="is-warning name">Scott Kirschner</span>
      </a>
      </div>
    </div>
  );
};

export default Info;
