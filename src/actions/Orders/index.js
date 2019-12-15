const host = process.env.REACT_APP_BACKEND_API;

export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE';
export const POST_SERVE_ORDERS_SUCCESS = 'POST_SERVE_ORDERS_SUCCESS';
export const POST_SERVE_ORDERS_FAILURE = 'POST_SERVE_ORDERS_FAILURE';
export const CLEAR_SERVE_ORDERS_SUCCESS = 'CLEAR_SERVE_ORDERS_SUCCESS';
export const CLEAR_SERVE_ORDERS_FAILURE = 'CLEAR_SERVE_ORDERS_FAILURE';

export const fetchGetOrders = () => (
  async dispatch => {
    try {
      const res = await fetch(`${host}/orders`);
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          'type': GET_ORDERS_SUCCESS,
          data,
          'status': res.status,
        });
      } else if (res.status === 500 || res.status === 502) {
        // return RedirectURL('/warning');
      }
      return dispatch({
        'type': GET_ORDERS_FAILURE,
        'data': null,
        'status': res.status ? res.status : res,
      });
    } catch (err) {
      return dispatch({
        'type': GET_ORDERS_FAILURE,
        'data': null,
        'status': err.status ? err.status : err,
      });
    }
  }
);

export const fetchServeOrders = (lineId, orderId, productName) => (
  async dispatch => {
    try {
      const res = await fetch(`${host}/orders/serve`, {
        'headers': new Headers({
          'Content-Type': 'application/json',
        }),
        'method': 'POST',
        'body': JSON.stringify({
          orderId,
          lineId,
          productName,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          'type': POST_SERVE_ORDERS_SUCCESS,
          data,
          'status': res.status,
        });
      } else if (res.status === 500 || res.status === 502) {
        // return RedirectURL('/warning');
      }
      return dispatch({
        'type': POST_SERVE_ORDERS_FAILURE,
        'data': null,
        'status': res.status ? res.status : res,
      });
    } catch (err) {
      return dispatch({
        'type': POST_SERVE_ORDERS_FAILURE,
        'data': null,
        'status': err.status ? err.status : err,
      });
    }
  }
);

export const clearServeOrders = () => (
  async dispatch => {
    try {
      return dispatch({
        'type': CLEAR_SERVE_ORDERS_SUCCESS,
        'data' : null,
        'status': 200,
      });
    } catch (err) {
      return dispatch({
        'type': CLEAR_SERVE_ORDERS_FAILURE,
        'data': null,
        'status': err.status ? err.status : err,
      });
    }
  }
);
