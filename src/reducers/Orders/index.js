import {
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  POST_SERVE_ORDERS_SUCCESS,
  POST_SERVE_ORDERS_FAILURE,
  CLEAR_SERVE_ORDERS_SUCCESS,
  CLEAR_SERVE_ORDERS_FAILURE,
} from '../../actions';

export const getOrders = (state = {}, action) => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS:
      return { ...state, ...action };
    case GET_ORDERS_FAILURE:
      return { ...state, ...action };
    default:
      return state;
  }
};

export const serveOrders = (state = {}, action) => {
  switch (action.type) {
    case POST_SERVE_ORDERS_SUCCESS:
      return { ...state, ...action };
    case POST_SERVE_ORDERS_FAILURE:
      return { ...state, ...action };
    case CLEAR_SERVE_ORDERS_SUCCESS:
      return { ...state, ...action };
    case CLEAR_SERVE_ORDERS_FAILURE:
      return { ...state, ...action };
    default:
      return state;
  }
};
