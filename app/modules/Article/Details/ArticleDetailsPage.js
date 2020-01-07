import React, { useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import translate from '../../../locale';
import * as articleActionCreator from '../articleActionCreator';
import config from '../../../config';
import Message from '../../../components/atoms/Message';
import LoadingIndicator from '../../../components/atoms/LoadingIndicator';
import LocaleContext from '../../../locale/localeContext';

import './ArticleDetails.scss';

const ArticleDetailsPage = ({
  articleState: { article, error, loading },
  articleActions,
  history,
  location: { state, pathname }
}) => {
  const { categoryId, articleId } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
    articleActions.fetchArticleDetails(categoryId, articleId);
  }, []);

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
      {!loading && error
        ? (
          <Fragment>
            <Message
              title="Article not found"
              description="Please go back to the home page to find out all categories and related articles"
            />
            <a className="waves-effect waves-light btn blue" onClick={gotoHome}>Home</a>
          </Fragment>
        )
        : null
      }
      {article && (
        <div className="details">
          <LocaleContext.Consumer>
            {({ lang }) => (
              <Fragment>
                <h4 className="title">{article.title[lang]}</h4>
                <h5 className="published-on">{`Published on ${moment(article.created).format(config.DATE_FORMAT)}`}</h5>
                <img className="responsive-img header-img" src={article.image} alt={article.title[lang]} />
                <p>{article.description[lang]}</p>
              </Fragment>
            )}
          </LocaleContext.Consumer>
        </div>
      )}
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
