import { handle } from 'redux-pack';

import * as actionTypes from './articleActionTypes';
import translate from '../../locale';

const initialState = {
  categories: [],
  article: {},
  error: '',
  loading: false
};

// common failure function for all APIs
const failureMessage = (prevState, payload) => ({
  ...prevState,
  error:
    payload && payload.message === 'Network Error'
      ? translate('common.networkTryAgain')
      : translate('common.tryAgainSometime')
});

const articleReducer = (state = initialState, action = '') => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_CATEGORIES:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          error: '',
          loading: true
        }),
        success: prevState => {
          if (payload) {
            return {
              ...prevState,
              categories: [...payload]
            };
          }
          return failureMessage(prevState);
        },
        failure: prevState => failureMessage(prevState, payload),
        finish: prevState => ({
          ...prevState,
          loading: false
        })
      });

    case actionTypes.FETCH_ARTICLE_DETAILS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          error: '',
          loading: true
        }),
        success: prevState => {
          if (payload) {
            return {
              ...prevState,
              article: { ...payload }
            };
          }
          return failureMessage(prevState);
        },
        failure: prevState => failureMessage(prevState, payload),
        finish: prevState => ({
          ...prevState,
          loading: false
        })
      });

    default:
      return state;
  }
};

export default articleReducer;
