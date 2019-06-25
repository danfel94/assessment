import React, { useState } from 'react';

import './Header.css';

const Header = () => {
  const [menuClass, setMenuClass] = useState('item1__menu hide');
  const [isActive, setActiveClass] = useState('nav__list--item menu');
  return (
    <header className="header__container">
      <p className="header__title">Example Page</p>

      <nav className="header__nav">
        <li className={isActive}>
          <span
            onClick={() => {
              setMenuClass(
                menuClass.includes('hide')
                  ? 'item1__menu show'
                  : 'item1__menu hide'
              );
              setActiveClass(
                menuClass.includes('hide')
                  ? 'nav__list--item menu active'
                  : 'nav__list--item menu'
              );
            }}
          >
            Item 1 <i className="material-icons">keyboard_arrow_down</i>
          </span>
          <ul className={menuClass}>
            <li>
              <a href="#">Item title 2a</a>
            </li>
            <li>
              <a href="#">Item 2b</a>
            </li>
          </ul>
        </li>
        <ul className="nav__list">
          <li className="nav__list--item">Item 2</li>
          <li className="nav__list--item">Item 3</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
