import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LocaleContext from '../../../locale/localeContext';
import config from '../../../config';
import Menu from '../Menu';

import './localeSelector.scss';

const LocaleSelector = ({ onChangeLocale, className }) => {
  const { lang } = useContext(LocaleContext);
  const selectedLang = config.LANGUAGES.find(({ value }) => (value === lang));

  return (
    <div className={`locale-selector-container ${className}`}>
      <Menu label={selectedLang.label} dropdown>
        <div className="submenu-container">
          {
            config.LANGUAGES.map(({ value, label }) => (
              <div key={value} onClick={() => onChangeLocale(value)}>{label}</div>
            ))
          }
        </div>
      </Menu>
    </div>
  );
};

LocaleSelector.propTypes = {
  onChangeLocale: PropTypes.func.isRequired,
  className: PropTypes.string
};

LocaleSelector.defaultProps = {
  className: ''
};

export default LocaleSelector;
