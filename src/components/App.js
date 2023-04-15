import React from "react";
import { fetchPost, getAllPosts } from "../actions";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PostDetail from "./PostDetial";
import CreatePost from "./CreatePost";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:postId" element={<PostDetail />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </Router>
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
const connectComponent = connect(mapStateToProps)(App);
export default connectComponent;
