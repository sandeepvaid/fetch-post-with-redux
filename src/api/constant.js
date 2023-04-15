import { API_URLS } from "../constants";
const customFetch = async (url, { body, ...customConfig }) => {
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = body;
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (data) {
      return {
        data: data,
        success: true,
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error("error");
    return {
      message: error.message,
      success: false,
    };
  }
};

export const getPost = async (postId) => {
  return customFetch(API_URLS.getPost(postId), {
    method: "GET",
  });
};

export const fetchAllPosts = async () => {
  return customFetch(API_URLS.fetchAllPosts(), {
    method: "GET",
  });
};
