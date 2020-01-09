import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './menu.scss';

const Menu = ({ className, children, dropdown, label }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const onToggleMenu = (evt) => {
    evt.stopPropagation();
    setMenuToggle(!menuToggle);
  };

  return (
    <div className={`menu-container ${className} ${dropdown ? 'dropdown' : 'accordion'}`}>
      <a
        className="item menu-btn"
        onMouseEnter={() => dropdown && setMenuToggle(true)}
        onMouseLeave={() => dropdown && setMenuToggle(false)}
        onClick={onToggleMenu}
      >
        {label}
        {dropdown
          ? <span className={`menu-highlighter ${menuToggle ? 'opened' : ''}`} />
          : <i className={`arrow ${menuToggle ? 'up' : 'down'}`} />
        }
      </a>
      <div
        className={`menus ${menuToggle ? '' : 'hide'} ${dropdown ? 'blue' : ''}`}
        onMouseEnter={() => dropdown && setMenuToggle(true)}
        onMouseLeave={() => dropdown && setMenuToggle(false)}
        onClick={onToggleMenu}
      >
        {children}
      </div>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  dropdown: PropTypes.bool,
  label: PropTypes.string
};

Menu.defaultProps = {
  className: '',
  label: '',
  children: null,
  dropdown: false
};

export default Menu;
