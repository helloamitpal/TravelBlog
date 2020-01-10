import React, { useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Img from 'react-image';

import translate from '../../../locale';
import util from '../../../services/util';
import * as articleActionCreator from '../articleActionCreator';
import config from '../../../config';
import Message from '../../../components/atoms/Message';
import LoadingIndicator from '../../../components/atoms/LoadingIndicator';
import LocaleContext from '../../../locale/localeContext';

import defaultImg from '../../../../public/assets/preview.jpg';

import './ArticleDetails.scss';

const ArticleDetailsPage = ({
  articleState: { article, error, loading },
  articleActions,
  history,
  location: { state, pathname }
}) => {
  const { categoryId, articleId } = state || {};
  const { lang } = useContext(LocaleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    articleActions.fetchArticleDetails(categoryId, articleId);
  }, [categoryId, articleId, articleActions]);

  const head = () => (
    <Helmet key={`article-details-page-${Math.random()}`}>
      <title>{translate('article.article')}</title>
      <meta property="og:title" content={translate('article.article')} />
      <meta name="description" content={translate('common.appDesc')} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${config.PROD_URL}${pathname || ''}`} />
    </Helmet>
  );

  const gotoHome = () => {
    history.push({
      pathname: config.ARTICLE_PAGE
    });
  };

  return (
    <div className="article-details-container container">
      {head()}
      {loading && <LoadingIndicator />}
      {!loading && error && (!article || !Object.keys(article).length)
        ? (
          <Message title={translate('article.noFound')} description={translate('common.backToHomeDesc')}>
            <a className="waves-effect waves-light btn blue" onClick={gotoHome}>{translate('common.home')}</a>
          </Message>
        )
        : null
      }
      {Object.keys(article).length ? (
        <div className="details">
          <h4 className="title">{article.title[lang]}</h4>
          <h5 className="published-on">{translate('common.publishedOn', { DATE: util.formatDate(article.created) })}</h5>
          <Img crossOrigin="anonymous" className="responsive-img header-img framed" src={[article.image, defaultImg]} alt={article.title[lang]} />
          <p dangerouslySetInnerHTML={{ __html: article.description[lang] }} />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  articleState: state.article
});

const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActionCreator, dispatch)
});

ArticleDetailsPage.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  articleState: PropTypes.object,
  articleActions: PropTypes.object
};

ArticleDetailsPage.defaultProps = {
  location: {},
  history: {},
  articleState: {},
  articleActions: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailsPage);
