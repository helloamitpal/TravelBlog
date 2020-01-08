import React, { useState, useEffect, Fragment, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LocaleSelector from '../../atoms/LocaleSelector';
import LocaleContext from '../../../locale/localeContext';
import { useScroll } from '../../hooks/useScroll';
import translate from '../../../locale';
import Menu from '../../atoms/Menu';
import config from '../../../config';

import './header.scss';

const Header = ({ onChangeLocale, isHomePage, history, articleState: { categories } }) => {
  const [menuOpen, setMenuToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useContext(LocaleContext);
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

  const gotoCategory = (categoryId) => {
    history.push({
      pathname: config.ARTICLE_LIST_PAGE,
      state: { categoryId }
    });
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
        {categories && categories.length
          ? (
            <Menu dropdown={!isToggleMenu} label={translate('common.categories')}>
              <ul className="submenu-container">
                {
                  categories.map(({ title, id }) => (
                    <li key={id} onClick={() => gotoCategory(id)}>{title[lang]}</li>
                  ))
                }
              </ul>
            </Menu>
          )
          : null
        }
      </li>
      <li>
        <Link to="/#aboutus" className="item" onClick={(evt) => toggleMenu(evt, isToggleMenu)}>
          {translate('common.aboutus')}
        </Link>
      </li>
      <li>
        <Link to="/#newsletter" className="item" onClick={(evt) => toggleMenu(evt, isToggleMenu)}>
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
            <LocaleSelector className="right" onChangeLocale={onChangeLocale} />
            <span onClick={toggleMenu} className="sidenav-trigger">
              <span />
              <span />
              <span />
            </span>
            <div className="sidenav-overlay" style={menuOpen ? { display: 'block', opacity: 1 } : null} onClick={toggleMenu} />
            <ul id="slide-out" className="sidenav" style={menuOpen ? { transform: 'translateX(0px)' } : null}>
              <li>
                <a className="subheader blue">{translate('common.appName')}</a>
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

const mapStateToProps = (state) => ({
  articleState: state.article
});

Header.propTypes = {
  onChangeLocale: PropTypes.func,
  isHomePage: PropTypes.bool,
  history: PropTypes.object,
  articleState: PropTypes.object
};

Header.defaultProps = {
  onChangeLocale: null,
  isHomePage: true,
  history: {},
  articleState: {}
};

export default connect(mapStateToProps, null)(withRouter(Header));
