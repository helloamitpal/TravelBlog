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
