import React, { useEffect, Fragment, useContext } from 'react';
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
import LocaleContext from '../../locale/localeContext';
import Category from '../../components/molecules/Category';

import './article.scss';

const ArticlePage = ({
  articleState: { categories, error, loading, metadata, latestArticles },
  articleActions,
  history,
  location: { pathname }
}) => {
  const { lang } = useContext(LocaleContext);

  const head = () => (
    <Helmet key={`article-page-${Math.random()}`}>
      <title>{translate('common.appName')}</title>
      <meta property="og:title" content={translate('common.appName')} />
      <meta name="description" content={translate('common.appDesc')} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${config.PROD_URL}${pathname || ''}`} />
    </Helmet>
  );

  const renderCategories = () => {
    return categories.map(({ title, image, articles, id, articleCount }) => (
      <Category key={id} {...{ title, image, articles, id, articleCount, lang, history }} />
    ));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    articleActions.getMetadata();
    articleActions.getLatestArticles();
    articleActions.fetchCategories();
  }, [articleActions]);

  return (
    <Fragment>
      <Introduction
        noOfArticles={metadata.articleCount}
        visitedCountries={metadata.visitedCountriesCount}
        latestArticles={latestArticles}
      />
      <div className="article-page-container" id="categories">
        {head()}
        {loading && <LoadingIndicator />}
        {!loading && error && <Message type="error" title={translate('common.oops')} description={error} />}
        <div className="row">
          {
            categories && categories.length ? (
              <div className="section">
                <h1 className="category-title">{translate('common.browseAllCategories')}</h1>
                <div className="row">{renderCategories()}</div>
              </div>
            ) : null
          }
        </div>
      </div>
      <Aboutus text={metadata.aboutus} />
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
  location: PropTypes.object
};

ArticlePage.defaultProps = {
  articleState: {},
  articleActions: {},
  history: {},
  location: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
