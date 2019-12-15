const host = process.env.REACT_APP_BACKEND_API;

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const POST_CREATE_PRODUCTS_SUCCESS = 'POST_CREATE_PRODUCTS_SUCCESS';
export const POST_CREATE_PRODUCTS_FAILURE = 'POST_CREATE_PRODUCTS_FAILURE';
export const CLEAR_CREATE_PRODUCTS_SUCCESS = 'CLEAR_CREATE_PRODUCTS_SUCCESS';
export const CLEAR_CREATE_PRODUCTS_FAILURE = 'CLEAR_CREATE_PRODUCTS_FAILURE';
export const DELETE_PRODUCTS_SUCCESS = 'DELETE_PRODUCTS_SUCCESS';
export const DELETE_PRODUCTS_FAILURE = 'DELETE_PRODUCTS_FAILURE';
export const CLEAR_DELETE_PRODUCTS_SUCCESS = 'CLEAR_DELETE_PRODUCTS_SUCCESS';
export const CLEAR_DELETE_PRODUCTS_FAILURE = 'CLEAR_DELETE_PRODUCTS_FAILURE';

export const fetchGetProducts = () => (
  async dispatch => {
    try {
      const res = await fetch(`${host}/products`);
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          'type': GET_PRODUCTS_SUCCESS,
          data,
          'status': res.status,
        });
      } else if (res.status === 500 || res.status === 502) {
        // return RedirectURL('/warning');
      }
      return dispatch({
        'type': GET_PRODUCTS_FAILURE,
        'data': null,
        'status': res.status ? res.status : res,
      });
    } catch (err) {
      return dispatch({
        'type': GET_PRODUCTS_FAILURE,
        'data': null,
        'status': err.status ? err.status : err,
      });
    }
  }
);

export const fetchCreateProducts = (productName, productPrice, productImage) => (
  async dispatch => {
    try {
      const res = await fetch(`${host}/createProduct`,{
        'headers': new Headers({
          'Content-Type': 'application/json',
        }),
        'method': 'POST',
        'body': JSON.stringify({
          productName,
          productPrice,
          productImage,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          'type': POST_CREATE_PRODUCTS_SUCCESS,
          data,
          'status': res.status,
        });
      } else if (res.status === 500 || res.status === 502) {
        // return RedirectURL('/warning');
      }
      return dispatch({
        'type': POST_CREATE_PRODUCTS_FAILURE,
        'data': data ? data : null,
        'status': res.status ? res.status : res,
      });
    } catch (err) {
      return dispatch({
        'type': POST_CREATE_PRODUCTS_FAILURE,
        'data': null,
        'status': err.status ? err.status : err,
      });
    }
  }
);

export const clearCreateProducts = () => (
  async dispatch => {
    try {
      return dispatch({
        'type': CLEAR_CREATE_PRODUCTS_SUCCESS,
        'data' : null,
        'status': 200,
      });
    } catch (err) {
      return dispatch({
        'type': CLEAR_CREATE_PRODUCTS_FAILURE,
        'data': null,
        'status': err.status ? err.status : err,
      });
    }
  }
);

export const deleteProducts = productId => (
  async dispatch => {
    try {
      const res = await fetch(`${host}/deleteProduct`, {
        'headers': new Headers({
          'Content-Type': 'application/json',
        }),
        'method': 'DELETE',
        'body': JSON.stringify({
          productId,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          'type': DELETE_PRODUCTS_SUCCESS,
          data,
          'status': res.status,
        });
      } else if (res.status === 500 || res.status === 502) {
        // return RedirectURL('/warning');
      }
      return dispatch({
        'type': DELETE_PRODUCTS_FAILURE,
        'data': null,
        'status': res.status ? res.status : res,
      });
    } catch (err) {
      return dispatch({
        'type': DELETE_PRODUCTS_FAILURE,
        'data': null,
        'status': err.status ? err.status : err,
      });
    }
  }
);

export const clearDeleteProducts = () => (
  async dispatch => {
    try {
      return dispatch({
        'type': CLEAR_DELETE_PRODUCTS_SUCCESS,
        'data' : null,
        'status': 200,
      });
    } catch (err) {
      return dispatch({
        'type': CLEAR_DELETE_PRODUCTS_FAILURE,
        'data': null,
        'status': err.status ? err.status : err,
      });
    }
  }
);
