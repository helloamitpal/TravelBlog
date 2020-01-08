import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import LocaleContext from '../../../locale/localeContext';

import './localeSelector.scss';

const LocaleSelector = ({ langs, onChangeLocale, className }) => {
  const { lang } = useContext(LocaleContext);

  return (
    <div className={`locale-selector-container ${className}`}>
      {
        langs.map(({ value, label }, index) => (
          <Fragment key={`locale-selector-${value}`}>
            <span className={`${lang === value ? 'bold' : ''}`} onClick={() => onChangeLocale(value)}>{label}</span>
            {index < langs.length - 1 ? <span className="divider" /> : null}
          </Fragment>
        ))
      }
    </div>
  );
};

LocaleSelector.propTypes = {
  onChangeLocale: PropTypes.func.isRequired,
  className: PropTypes.string,
  langs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};

LocaleSelector.defaultProps = {
  className: '',
  langs: [{
    label: 'EN',
    value: 'en'
  }, {
    label: 'DE',
    value: 'de'
  }]
};

export default LocaleSelector;
