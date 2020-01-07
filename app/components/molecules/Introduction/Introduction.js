import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../atoms/Card';
import translate from '../../../locale';

import './introduction.scss';
import latestArticleImage from '../../../../public/assets/latest-story.jpg';

const Introduction = ({ noOfArticles, visitedCountries }) => (
  <div className="introduction-container row">
    <div className="banner-section col s12 m12 l6">
      {translate('common.appNameIntro')}
      <section>
        <div className="quotes">
          {translate('common.tagline')}
        </div>
        <div className="info-section row">
          <div className="col">
            <h1>{visitedCountries}</h1>
            <p>{translate('common.countries')}</p>
          </div>
          <div className="col">
            <h1>{noOfArticles}</h1>
            <p>{translate('article.articles')}</p>
          </div>
        </div>
      </section>
    </div>
    <div className="latest-article col s12 m12 l6">
      <h1>{translate('article.latestArticles')}</h1>
      <Card title="Jordan: A land of mystery" image={latestArticleImage} />
    </div>
  </div>
);

Introduction.propTypes = {
  noOfArticles: PropTypes.number,
  visitedCountries: PropTypes.number
};

Introduction.defaultProps = {
  noOfArticles: 0,
  visitedCountries: 0
};

export default Introduction;
