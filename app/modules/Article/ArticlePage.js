import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import * as articleActionCreator from './articleActionCreator';
import LoadingIndicator from '../../components/atoms/LoadingIndicator';
import Message from '../../components/atoms/Message';
import config from '../../config';
import translate from '../../locale';
import Newsletter from '../../components/molecules/Newsletter';
import Introduction from '../../components/molecules/Introduction';
import Aboutus from '../../components/molecules/Aboutus';
import Card from '../../components/atoms/Card';

import './article.scss';

const ArticlePage = ({
  articleState: { articles, error, loading },
  articleActions,
  history,
  match,
  location: { pathname }
}) => {
  const head = () => (
    <Helmet key={`article-page-${Math.random()}`}>
      <title>{translate('common.appName')}</title>
      <meta property="og:title" content={translate('common.appName')} />
      <meta name="description" content={translate('common.appDesc')} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`https://react-csr-template.herokuapp.com${pathname || ''}`} />
    </Helmet>
  );

  const gotoArticleDetails = article => {
    history.push({
      pathname: config.ARTICLE_DETAILS_PAGE,
      state: { ...article }
    });
  };

  const renderArticles = () => {
    return articles.map((article) => (
      <Card title={article.title} image={article.urlToImage} onSelect={() => gotoArticleDetails(article)} className="col s12 m6 l6 xl4" />
    ));
  };

  useEffect(() => {
    const id = (match.params && match.params.id) || '';
    window.scrollTo(0, 0);
    articleActions.fetchArticles(id);
  }, [match.params]);

  return (
    <Fragment>
      <Introduction />
      <div className="article-page-container" id="categories">
        {head()}
        {loading && <LoadingIndicator />}
        {!loading && error && <Message type="error" title={translate('common.oops')} description={error} />}
        <div className="row">
          {
            articles && articles.length ? (
              <div className="section">
                <div className="row">{renderArticles()}</div>
              </div>
            ) : null
          }
        </div>
      </div>
      <Aboutus />
      <Newsletter />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  articleState: state.article
});

const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActionCreator, dispatch)
});

ArticlePage.propTypes = {
  articleState: PropTypes.object,
  articleActions: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
};

ArticlePage.defaultProps = {
  articleState: {},
  articleActions: {},
  history: {},
  match: {},
  location: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
