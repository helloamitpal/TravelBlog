import React from 'react';

import translate from '../../../locale';

import aboutusImg from '../../../../public/assets/aboutus.jpg';

import './aboutus.scss';

const Aboutus = () => (
  <div className="aboutus-container" id="aboutus">
    <div className="aboutus">
      <span className="profile-pic" style={{ backgroundImage: `url(${aboutusImg})` }} />
      <p>{translate('common.aboutusDesc')}</p>
    </div>
  </div>
);

export default Aboutus;
