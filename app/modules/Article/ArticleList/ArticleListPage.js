import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import translate from '../../../locale';
import * as articleActionCreator from '../articleActionCreator';
import Message from '../../../components/atoms/Message';
import LoadingIndicator from '../../../components/atoms/LoadingIndicator';
import LocaleContext from '../../../locale/localeContext';
import config from '../../../config';
import Card from '../../../components/atoms/Card';

import './articleList.scss';

const ArticleListPage = ({
  articleState: { category, error, loading },
  articleActions,
  history,
  location: { state, pathname }
}) => {
  const { categoryId } = state || {};
  const { lang } = useContext(LocaleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    articleActions.fetchAllArticleOfCategory(categoryId);
  }, [categoryId, articleActions]);

  const gotoHome = () => {
    history.push({
      pathname: config.ARTICLE_PAGE
    });
  };

  const gotoArticle = (currentCategoryId, articleId) => {
    history.push({
      pathname: config.ARTICLE_DETAILS_PAGE,
      state: { currentCategoryId, articleId }
    });
  };

  const head = () => (
    <Helmet key={`article-list-page-${Math.random()}`}>
      <title>{translate('article.browseAllArticles')}</title>
      <meta property="og:title" content={translate('article.browseAllArticles')} />
      <meta name="description" content={translate('common.appDesc')} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${config.PROD_URL}${pathname || ''}`} />
    </Helmet>
  );

  return (
    <div className="article-list-container container">
      {head()}
      {loading && <LoadingIndicator />}
      {!loading && error && (!category || !Object.keys(category).length)
        ? (
          <Message title={translate('article.noFound')} description={translate('common.backToHomeDesc')}>
            <a className="waves-effect waves-light btn blue" onClick={gotoHome}>{translate('common.home')}</a>
          </Message>
        )
        : null
      }
      {category && Object.keys(category).length && (
        <section className="section category-container" key={category.id}>
          <div className="title-header-section">
            <h1 className="title">{category.title[lang]}</h1>
          </div>
          <img className="responsive-img header-img framed" src={category.image} alt={category.title[lang]} />
          <p className="description" dangerouslySetInnerHTML={{ __html: category.description[lang] }} />
          <h5>{translate('common.categoryNote')}</h5>
          <div className="top-articles-container">
            {
              category.articles.map((article) => (
                <Card
                  key={article.id}
                  title={article.title[lang]}
                  image={article.image}
                  onSelect={() => gotoArticle(category.id, article.id)}
                />
              ))
            }
          </div>
        </section>
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

ArticleListPage.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  articleState: PropTypes.object,
  articleActions: PropTypes.object
};

ArticleListPage.defaultProps = {
  location: {},
  history: {},
  articleState: {},
  articleActions: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListPage);
