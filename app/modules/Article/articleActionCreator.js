import * as actionTypes from './articleActionTypes';
import config from '../../config';

export const fetchArticles = source => (dispatch, getState, { api }) => {
  const param = source ? `sources=${source}` : 'country=us';

  api.get('/api/v1/category/getAll').then((resp) => {
    debugger;
  }, () => {
    debugger;
  });

  dispatch({
    type: actionTypes.FETCH_ARTICLES,
    promise: api.get(`/top-headlines?${param}&apiKey=${config.API_KEY}`),
    payload: {}
  });
};
