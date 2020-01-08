import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Card from '../../atoms/Card';
import translate from '../../../locale';
import LocaleContext from '../../../locale/localeContext';
import Carousel from '../../atoms/Carousel';
import config from '../../../config';

import './introduction.scss';

const Introduction = ({ noOfArticles, visitedCountries, latestArticles, history }) => {
  const onSelectCard = (articleId, categoryId) => {
    history.push({
      pathname: config.ARTICLE_DETAILS_PAGE,
      state: { categoryId, articleId }
    });
  };

  return (
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
        <LocaleContext.Consumer>
          {
            ({ lang }) => (
              <Carousel>
                {
                  latestArticles.map(({ id, title, image, parentCategoryId }) => (
                    <Card
                      key={id}
                      title={title[lang]}
                      image={image}
                      onSelect={() => onSelectCard(id, parentCategoryId)}
                    />
                  ))
                }
              </Carousel>
            )
          }
        </LocaleContext.Consumer>
      </div>
    </div>
  );
};

Introduction.propTypes = {
  noOfArticles: PropTypes.number,
  visitedCountries: PropTypes.number,
  latestArticles: PropTypes.array,
  history: PropTypes.object
};

Introduction.defaultProps = {
  noOfArticles: 0,
  visitedCountries: 0,
  latestArticles: [],
  history: {}
};

export default withRouter(Introduction);
