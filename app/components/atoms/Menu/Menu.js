import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './menu.scss';

const Menu = ({ className, children, dropdown, label, history }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = (evt) => {
    evt.stopPropagation();
    setMenuToggle(!menuToggle);
  };

  history.listen(() => {
    setMenuToggle(false);
  });

  return (
    <div className={`menu-container ${className}`}>
      <a className="item menu-btn" onClick={toggleMenu}>
        {label}
        <span className={`menu-highlighter ${menuToggle ? 'opened' : ''}`} />
      </a>
      <div className={`menus ${menuToggle ? '' : 'hide'} ${dropdown ? 'dropdown' : ''}`}>
        {children}
      </div>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  dropdown: PropTypes.bool,
  label: PropTypes.string,
  history: PropTypes.object
};

Menu.defaultProps = {
  className: '',
  label: '',
  children: null,
  dropdown: false,
  history: {}
};

export default withRouter(Menu);
