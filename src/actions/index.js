import { getPost, fetchAllPosts } from "../api/constant";
//action types
export const ADD_POST = "ADD_POST";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const FETCH_POST = "FETCH_POST";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";
export const FETCH_ALL_POST = "FETCH_ALL_POST";
export const FETCH_ALL_POST_FAILURE = "FETCH_ALL_POST_FAILURE";

//action creator
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function getAllPosts() {
  return function (dispatch) {
    return fetchAllPosts()
      .then((posts) => {
        // dispatch

        return dispatch({
          type: FETCH_ALL_POST,
          posts: posts.data,
          success: posts.success,
          singlePost: {},
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ALL_POST_FAILURE,
          posts: error.message,
        });
      });
  };
}

export function fetchPost(postId) {
  return function (dispatch) {
    return getPost(postId)
      .then((posts) => {
        // dispatch
        return dispatch({
          type: FETCH_POST,
          singlePost: posts.data,
          success: posts.success,
          postId: postId,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_POST_FAILURE,
          posts: error.message,
        });
      });
  };
}

export function createPost(post, unId) {
  console.log("Action Uid", unId);
  return function (dispatch) {
    return dispatch({
      type: ADD_POST,
      post: post,
      unId: unId,
      success: true,
    });
  };
}
