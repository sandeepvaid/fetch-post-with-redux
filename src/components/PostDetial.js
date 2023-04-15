import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../actions";
import { useSelector } from "react-redux";
import styled from "styled-components";

const PostDetailStyle = styled.div`
  margin: 10px;
`;

function PostDetail() {
  const { postId } = useParams();
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, []);

  return (
    <>
      <PostDetailStyle>
        <h2>Post details for Id {state.singlePost.id}</h2>
        <p>{state.singlePost.body}</p>
      </PostDetailStyle>
    </>
  );
}

export default PostDetail;
