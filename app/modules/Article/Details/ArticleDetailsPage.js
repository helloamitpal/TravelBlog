import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import translate from '../../../locale';

const ArticleDetailsPage = ({ history, location: { state, pathname } }) => {
  const { title, urlToImage, description, content } = state;

  const head = () => (
    <Helmet key={`article-details-page-${Math.random()}`}>
      <title>{translate('article.article')}</title>
      <meta property="og:title" content={`${translate('article.article')} - ${title}`} />
      <meta name="description" content={translate('common.appDesc')} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`https://react-csr-template.herokuapp.com${pathname || ''}`} />
    </Helmet>
  );

  return (
    <div className="article-details-container">
      {head()}
      <h4>{title}</h4>
      <img className="responsive-img" src={urlToImage} alt={title} />
      <p>{description}</p>
      <p>{content}</p>
    </div>
  );
};

ArticleDetailsPage.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
};

ArticleDetailsPage.defaultProps = {
  location: {},
  history: {}
};

export default ArticleDetailsPage;
