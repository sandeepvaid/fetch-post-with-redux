import styled from "styled-components";
import { Link } from "react-router-dom";
const Post = styled.div`
  border: 1px solid #e1e1e1;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    border: 1px solid #2196f3;
  }

  a {
    text-decoration: none;
  }

  h3 {
    margin: 0;
    padding: 0;
    font-size: 17px;
    font-weight: bold;
    color: black;
  }
`;
function Posts({ post }) {
  return (
    <>
      <Post className="post" key={`post-${post.id}`}>
        <Link to={`/post/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
      </Post>
    </>
  );
}

export default Posts;
