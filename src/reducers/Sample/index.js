import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from '../../actions';

export const getPosts = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return { ...state, ...action };
    case GET_POSTS_FAILURE:
      return { ...state, ...action };
    default:
      return state;
  }
};
