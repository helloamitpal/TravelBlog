import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LocaleContext from '../../../locale/localeContext';
import aboutusImg from '../../../../public/assets/aboutus.jpg';

import './aboutus.scss';

const Aboutus = ({ text }) => {
  const { lang } = useContext(LocaleContext);

  return (
    <div className="aboutus-container" id="aboutus">
      <div className="aboutus">
        <span className="profile-pic" style={{ backgroundImage: `url(${aboutusImg})` }} />
        <p>{text[lang]}</p>
      </div>
    </div>
  );
};

Aboutus.propTypes = {
  text: PropTypes.object
};

Aboutus.defaultProps = {
  text: {}
};

export default Aboutus;
