import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import translate from '../../../locale';
import config from '../../../config';

const ArticleListPage = ({ history, location: { state, pathname } }) => {
  const { title, image } = state;

  const head = () => (
    <Helmet key={`article-list-page-${Math.random()}`}>
      <title>{translate('article.articles')}</title>
      <meta property="og:title" content={translate('article.articles')} />
      <meta name="description" content={translate('common.appDesc')} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${config.PROD_URL}${pathname || ''}`} />
    </Helmet>
  );

  return (
    <div className="article-list-container">
      {head()}
      <h4>{title}</h4>
      <img className="responsive-img" src={image} alt={title} />
    </div>
  );
};

ArticleListPage.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
};

ArticleListPage.defaultProps = {
  location: {},
  history: {}
};

export default ArticleListPage;
