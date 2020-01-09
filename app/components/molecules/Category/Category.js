import React from 'react';
import PropTypes from 'prop-types';

import translate from '../../../locale';
import Card from '../../atoms/Card';
import config from '../../../config';

import './category.scss';

const Category = ({ title, image, articles, id, articleCount, lang, history }) => {
  const gotoAllArticles = () => {
    history.push({
      pathname: config.ARTICLE_LIST_PAGE,
      state: { categoryId: id }
    });
  };

  const gotoArticle = (articleId) => {
    history.push({
      pathname: config.ARTICLE_DETAILS_PAGE,
      state: { categoryId: id, articleId }
    });
  };

  return (
    <section className="category-container" key={id}>
      <div className="title-header-section" onClick={() => gotoAllArticles(id)}>
        <h1 className="link">{title[lang]}</h1>
        <i>{translate('article.articleCount', { COUNT: articleCount })}</i>
      </div>
      <div className="top-articles-container">
        {
          articles.map((article) => (
            <Card
              key={article.id}
              title={article.title[lang]}
              image={article.image}
              onSelect={() => gotoArticle(article.id)}
            />
          ))
        }
        {articleCount > config.TOP_ARTICLES_COUNT
          ? (
            <div className="show-all" onClick={gotoAllArticles}>
              <span className="text">{translate('common.showAll')}</span>
              <span className="arrow-with-circle right" />
            </div>
          ) : null
        }
      </div>
    </section>
  );
};

Category.propTypes = {
  title: PropTypes.object,
  image: PropTypes.string,
  articles: PropTypes.array,
  id: PropTypes.string,
  articleCount: PropTypes.number,
  lang: PropTypes.string,
  history: PropTypes.object
};

Category.defaultProps = {
  title: {},
  image: '',
  articles: [],
  id: '',
  articleCount: 0,
  lang: '',
  history: {}
};

export default Category;
