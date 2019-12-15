import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  POST_CREATE_PRODUCTS_SUCCESS,
  POST_CREATE_PRODUCTS_FAILURE,
  CLEAR_CREATE_PRODUCTS_SUCCESS,
  CLEAR_CREATE_PRODUCTS_FAILURE,
  DELETE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_FAILURE,
  CLEAR_DELETE_PRODUCTS_SUCCESS,
  CLEAR_DELETE_PRODUCTS_FAILURE,
} from '../../actions';

export const getProducts = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, ...action };
    case GET_PRODUCTS_FAILURE:
      return { ...state, ...action };
    case DELETE_PRODUCTS_SUCCESS:
      return { ...state, ...action };
    case DELETE_PRODUCTS_FAILURE:
      return { ...state, ...action };
    case CLEAR_DELETE_PRODUCTS_SUCCESS:
      return { ...state, ...action };
    case CLEAR_DELETE_PRODUCTS_FAILURE:
      return { ...state, ...action };
    default:
      return state;
  }
};

export const createProducts = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_PRODUCTS_SUCCESS:
      return { ...state, ...action };
    case POST_CREATE_PRODUCTS_FAILURE:
      return { ...state, ...action };
    case CLEAR_CREATE_PRODUCTS_SUCCESS:
      return { ...state, ...action };
    case CLEAR_CREATE_PRODUCTS_FAILURE:
      return { ...state, ...action };
    default:
      return state;
  }
};
