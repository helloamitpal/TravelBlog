import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LocaleSelector from '../../atoms/LocaleSelector';
import { useScroll } from '../../hooks/useScroll';
import translate from '../../../locale';

import './header.scss';

const Header = ({ onChangeLocale }) => {
  const [menuOpen, setMenuToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYPos } = useScroll();

  useEffect(() => {
    setScrolled(scrollYPos >= 100);
  }, [scrollYPos]);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  return (
    <div className="header-container navbar-fixed">
      <nav className={scrolled ? 'blue' : 'transparent'}>
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              {translate('common.appName')}
            </a>
            <LocaleSelector className="right" onChangeLocale={onChangeLocale} />
            <span onClick={toggleMenu} className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </span>
            <div
              className="sidenav-overlay"
              style={menuOpen ? { display: 'block', opacity: 1 } : null}
              onClick={toggleMenu}
            />
            <ul
              id="slide-out"
              className="sidenav"
              style={menuOpen ? { transform: 'translateX(0px)' } : null}
            >
              <li>
                <a className="subheader">{translate('common.appName')}</a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <Link to="/" className="item" onClick={toggleMenu}>
                  {translate('common.home')}
                </Link>
              </li>
              <li>
                <Link to="/" className="item">
                  {translate('common.contactUs')}
                </Link>
              </li>
              <li>
                <Link to="/" className="item">
                  {translate('common.blogs')}
                </Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/" className="item">
                  {translate('common.contactUs')}
                </Link>
              </li>
              <li>
                <Link to="/" className="item">
                  {translate('common.blogs')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  onChangeLocale: PropTypes.func
};

Header.defaultProps = {
  onChangeLocale: null
};

export default Header;
