import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import translate from '../../locale';

import latestArticleImage from '../../../public/assets/latest-story.jpg';

const Intro = () => (
  <div className="intro-container row">
    <div className="banner-section col s12 m12 l6">
      <h1>AMAZING</h1>
      <h1>PLACES TO</h1>
      <h1>EXPLORE</h1>
      <section className="section">
        <div className="quotes">
          <p>A Nomad couple. One goal to travel across the world.</p>
          <p>Find our story. You can surely travel through our lense.</p>
        </div>
        <div className="info-section">
          <div className="col">
            <h1>13</h1>
            <p>Countries</p>
          </div>
          <div className="col">
            <h1>10</h1>
            <p>Articles</p>
          </div>
          <div className="col">
            <h1>1</h1>
            <p>Story teller</p>
          </div>
        </div>
      </section>
    </div>
    <div className="latest-article col s12 m12 l6">
      <h1>Latest Article</h1>
      <div className="card-container">
        <div className="card medium">
          <div className="card-image">
            <LazyLoadImage alt="latest article image" src={latestArticleImage} />
          </div>
          <div className="card-content">
            <span className="card-title">Jordan: A land of mystery</span>
          </div>
          <div className="card-action">
            <span className="link">{translate('common.readMore')}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
