import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <header className="header__container">
      <p className="header__title">Example Page</p>

      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__list--item">
            Item 1 <i class="material-icons">keyboard_arrow_down</i>
          </li>
          <li className="nav__list--item">Item 2</li>
          <li className="nav__list--item">Item 3</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
