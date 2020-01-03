import React from 'react';

import facebookIcon from '../../../../public/assets/facebook.svg';
import instagramIcon from '../../../../public/assets/instagram.svg';

import './newsletter.scss';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter">
        <h2 className="title">Newsletter</h2>
        <h4 className="sub-title">Subscribe to our newsletter or follow us on the social channels to stay tuned.</h4>
        <div className="row">
          <div className="col s12 m12 l4">
            <input type="text" placeholder="Name" />
          </div>
          <div className="col s12 m12 l4">
            <input type="email" placeholder="Email" />
          </div>
          <div className="col s12 m12 l4 subscribe-btn">
            <a className="btn blue">Subscribe</a>
          </div>
        </div>
        <div className="icon-social row">
          <a className="facebook col"><img src={facebookIcon} alt="facebook" /></a>
          <a className="instagram col"><img src={instagramIcon} alt="instagram" /></a>
          <a className="col" href="mailto:travelthroughmylense.am@gmail.com"><i className="material-icons dp48">email</i></a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
