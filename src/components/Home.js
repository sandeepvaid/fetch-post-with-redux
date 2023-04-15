import React from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../actions";
import Posts from "./Posts";
import { Link } from "react-router-dom";
class Home extends React.Component {
  fetchAllPosts = async () => {
    await this.props.getAllPosts();
  };

  render() {
    const { posts } = this.props;

    return (
      <div>
        <button onClick={this.fetchAllPosts}>Fetch all posts</button>
        <button>
          <Link to={"create-post"}>Create post</Link>
        </button>
        {posts.map((post) => {
          return <Posts post={post} key={post.id} />;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
    success: state.success,
  };
}
const connectComponent = connect(mapStateToProps, { getAllPosts })(Home);
export default connectComponent;
