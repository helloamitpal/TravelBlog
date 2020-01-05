import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LocaleSelector from '../../atoms/LocaleSelector';
import { useScroll } from '../../hooks/useScroll';
import translate from '../../../locale';

import './header.scss';

const Header = ({ onChangeLocale, navbarClassName }) => {
  const [menuOpen, setMenuToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYPos } = useScroll();

  useEffect(() => {
    setScrolled(scrollYPos >= 50);
  }, [scrollYPos]);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const menus = (
    <Fragment>
      <li>
        <Link to="#categories" className="item">
          {translate('common.categories')}
        </Link>
      </li>
      <li>
        <Link to="#aboutus" className="item">
          {translate('common.aboutus')}
        </Link>
      </li>
      <li>
        <Link to="#newsletter" className="item">
          {translate('common.contactUs')}
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className="header-container navbar-fixed">
      <nav className={navbarClassName || (scrolled ? 'blue' : 'transparent')}>
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo" />
            <LocaleSelector className="right" onChangeLocale={onChangeLocale} />
            <span onClick={toggleMenu} className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </span>
            <div className="sidenav-overlay" style={menuOpen ? { display: 'block', opacity: 1 } : null} onClick={toggleMenu} />
            <ul id="slide-out" className="sidenav" style={menuOpen ? { transform: 'translateX(0px)' } : null}>
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
              {menus}
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down nav-menus">
              {menus}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  onChangeLocale: PropTypes.func,
  navbarClassName: PropTypes.string
};

Header.defaultProps = {
  onChangeLocale: null,
  navbarClassName: ''
};

export default Header;
