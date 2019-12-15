const host = process.env.REACT_APP_DOMAIN_SAMPLE_API;

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const fetchGetPosts = () => (
  async dispatch => {
    try {
      const res = await fetch(`${host}/posts`);
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          'type': GET_POSTS_SUCCESS,
          data,
          'status': res.status,
        });
      } else if (res.status === 500 || res.status === 502) {
        // return RedirectURL('/warning');
      }
      return dispatch({
        'type': GET_POSTS_FAILURE,
        'data': null,
        'status': res.status ? res.status : res,
      });
    } catch (err) {
      return dispatch({
        'type': GET_POSTS_FAILURE,
        'data': null,
        'status': err.status ? err.status : err,
      });
    }
  }
);
