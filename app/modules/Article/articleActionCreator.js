import * as actionTypes from './articleActionTypes';

export const fetchCategories = () => (dispatch, getState, { api }) => {
  dispatch({
    type: actionTypes.FETCH_CATEGORIES,
    promise: api.get('/category/getAll'),
    payload: {}
  });
};

export const fetchArticleDetails = (categoryId, articleId) => (dispatch, getState, { api }) => {
  dispatch({
    type: actionTypes.FETCH_ARTICLE_DETAILS,
    promise: api.get(`/article/${categoryId}/${articleId}`),
    payload: {}
  });
};

export const fetchAllArticleOfCategory = (categoryId) => (dispatch, getState, { api }) => {
  dispatch({
    type: actionTypes.FETCH_ARTICLES_OF_CATEGORY,
    promise: api.get(`/category/${categoryId}/getAll`),
    payload: {}
  });
};

export const getMetadata = () => (dispatch, getState, { api }) => {
  dispatch({
    type: actionTypes.FETCH_CATEGORY_METADATA,
    promise: api.get('/category/getMetadata'),
    payload: {}
  });
};

export const getLatestArticles = () => (dispatch, getState, { api }) => {
  dispatch({
    type: actionTypes.FETCH_LATEST_ARTICLES,
    promise: api.get('/article/getLatest'),
    payload: {}
  });
};
