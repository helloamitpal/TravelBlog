import React from 'react';

import translate from '../../../locale';
import config from '../../../config';

import facebookIcon from '../../../../public/assets/facebook.svg';
import instagramIcon from '../../../../public/assets/instagram.svg';
import emailIcon from '../../../../public/assets/email.svg';
import youtubeIcon from '../../../../public/assets/youtube.svg';

import './newsletter.scss';

const Newsletter = () => {
  const subscribeUser = (evt) => {
    evt.stopPropagation();
  };

  return (
    <div className="newsletter-container" id="newsletter">
      <div className="newsletter">
        <h2 className="title">{translate('common.newsletter')}</h2>
        <h4 className="sub-title">{translate('common.newsletterDesc')}</h4>
        <div className="row">
          <div className="col s12 m12 l4">
            <input type="text" placeholder={translate('common.fullName')} maxLength="200" />
          </div>
          <div className="col s12 m12 l4">
            <input type="email" placeholder={translate('common.email')} maxLength="200" />
          </div>
          <div className="col s12 m12 l4 subscribe-btn">
            <a className="waves-effect waves-light btn blue" onClick={subscribeUser}>{translate('common.subscribe')}</a>
          </div>
        </div>
        <div className="icon-social row">
          <a className="facebook col" href={config.FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a className="instagram col" href={config.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="instagram" />
          </a>
          <a className="col youtube" href={config.YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="youtube" />
          </a>
          <a className="col email" href={`mailto:${config.EMAIL}`}>
            <img src={emailIcon} alt="email" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
