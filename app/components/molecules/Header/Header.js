import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LocaleSelector from '../../atoms/LocaleSelector';
import { useScroll } from '../../hooks/useScroll';
import translate from '../../../locale';

import './header.scss';

const Header = ({ onChangeLocale, isHomePage }) => {
  const [menuOpen, setMenuToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYPos } = useScroll();

  useEffect(() => {
    setScrolled(scrollYPos >= 50);
  }, [scrollYPos]);

  const toggleMenu = (evt, isToggleMenu = true) => {
    evt.stopPropagation();

    if (isToggleMenu) {
      setMenuToggle(!menuOpen);
    }
  };

  const getMenus = (isToggleMenu = true) => (
    <Fragment>
      <li>
        {
          (isToggleMenu || (!isToggleMenu && !isHomePage))
            ? (
              <Link to="/" className="item" onClick={(evt) => toggleMenu(evt, isToggleMenu)}>
                {translate('common.home')}
              </Link>
            )
            : null
        }
      </li>
      <li>
        <Link to="#categories" className="item" onClick={(evt) => toggleMenu(evt, isToggleMenu)}>
          {translate('common.categories')}
        </Link>
      </li>
      <li>
        <Link to="#aboutus" className="item" onClick={(evt) => toggleMenu(evt, isToggleMenu)}>
          {translate('common.aboutus')}
        </Link>
      </li>
      <li>
        <Link to="#newsletter" className="item" onClick={(evt) => toggleMenu(evt, isToggleMenu)}>
          {translate('common.contactUs')}
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className="header-container navbar-fixed">
      <nav className={(!isHomePage || scrolled) ? 'blue' : 'transparent'}>
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo" />
            <LocaleSelector className="right" onChangeLocale={onChangeLocale} />
            <span onClick={toggleMenu} className="sidenav-trigger">
              <span />
              <span />
              <span />
            </span>
            <div className="sidenav-overlay" style={menuOpen ? { display: 'block', opacity: 1 } : null} onClick={toggleMenu} />
            <ul id="slide-out" className="sidenav" style={menuOpen ? { transform: 'translateX(0px)' } : null}>
              <li>
                <a className="subheader blue" onClick={toggleMenu}>{translate('common.appName')}</a>
              </li>
              <li>
                <div className="divider" />
              </li>
              {getMenus()}
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down nav-menus">
              {getMenus(false)}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  onChangeLocale: PropTypes.func,
  isHomePage: PropTypes.bool
};

Header.defaultProps = {
  onChangeLocale: null,
  isHomePage: true
};

export default Header;
