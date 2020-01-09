/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { anchorate } from 'anchorate';

import config from '../config';
import NotFoundModule from '../modules/NotFound/Loadable';
import ArticleModule from '../modules/Article/Loadable';
import ArticleListModule from '../modules/Article/ArticleList/Loadable';
import ArticleDetailsModule from '../modules/Article/Details/Loadable';
import Header from '../components/molecules/Header';
import Footer from '../components/molecules/Footer';
import LocaleContext from '../locale/localeContext';
import { setLocaleCookie, getLocaleCookie } from '../services/cookieService';

const Router = ({ history }) => {
  const [selectedLocale, setSelectedLocale] = useState(getLocaleCookie() || config.FALLBACK_LANGUAGE);
  const { location: { pathname } } = history;
  const [homePage, setHomePage] = useState(pathname === '/');

  // setting up cookie for default language
  useEffect(() => {
    setLocaleCookie(config.FALLBACK_LANGUAGE);
  }, []);

  // adopting hash anchor
  history.listen(() => {
    anchorate();
    setHomePage(history.location.pathname === '/');
  });

  // updating cookie if language is selected
  const onChangeLocale = (val) => {
    setLocaleCookie(val);
    setSelectedLocale(val);
  };

  return (
    <LocaleContext.Provider value={{ lang: selectedLocale }}>
      <div className={`app-container ${homePage ? '' : 'non-home-page'}`}>
        <Header onChangeLocale={onChangeLocale} isHomePage={homePage} />
        <div className="body-container container">
          <Switch>
            <Route exact path={config.ARTICLE_PAGE} render={(props) => <ArticleModule {...props} />} />
            <Route exact path={config.ARTICLE_LIST_PAGE} render={(props) => <ArticleListModule {...props} />} />
            <Route exact path={config.ARTICLE_DETAILS_PAGE} render={(props) => <ArticleDetailsModule {...props} />} />
            <Route path="" render={(props) => <NotFoundModule {...props} />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </LocaleContext.Provider>
  );
};

export default withRouter(Router);
