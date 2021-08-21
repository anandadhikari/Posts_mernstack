import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionTypes';

const initialState = {
  postsList: [],
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL:
      return { ...state, postsList: payload };

    case CREATE:
      return { ...state, postsList: [...state.postsList, payload] };

    case UPDATE:
      return {
        ...state,
        postsList: state.postsList.map((post) =>
          post._id === payload._id ? payload : post
        ),
      };

    case DELETE:
      return {
        ...state,
        postsList: state.postsList.filter((post) => post._id !== payload),
      };
    default:
      return state;
  }
};

export default postsReducer;
