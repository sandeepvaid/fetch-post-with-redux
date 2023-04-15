import {
  ADD_POST,
  ADD_POST_FAILURE,
  FETCH_ALL_POST,
  FETCH_ALL_POST_FAILURE,
  FETCH_POST,
  FETCH_POST_FAILURE,
} from "../actions";

const postInitialState = {
  posts: [],
  singlePost: {},
  success: false,
  unId: 0,
};

const reducer = (state = postInitialState, action) => {
  console.log("reducer", action);

  if (
    action.type == "FETCH_POST" &&
    Object.keys(action.singlePost).length === 0
  ) {
    console.log("andar", state.posts);
    if (state.posts.length != 0) {
      for (let post of state.posts) {
        if (post.id == action.postId) {
          action.singlePost = post;
        }
      }
    }
  }

  switch (action.type) {
    case FETCH_ALL_POST:
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
        success: action.success,
      };
    case FETCH_POST:
      return {
        ...state,
        singlePost: action.singlePost,
        success: action.success,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
        unId: action.unId,
      };
    default:
      return state;
  }
};

export default reducer;
