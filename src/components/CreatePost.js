import { useState } from "react";
import { useFormInput } from "../hooks";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { createPost } from "../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function CreatePost() {
  const title = useFormInput("");
  const content = useFormInput("");
  const navigate = useNavigate();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("Called1", state);
  function handleSubmit(e) {
    e.preventDefault();
    let post = {
      title: title.value,
      body: content.value,
      userId: 1,
      id: `un-${state.unId + 1}`,
    };

    dispatch(createPost(post, state.unId + 1));
    navigate("/");
  }
  const StyledButton = styled.button`
    height: 33px;
    background: ${(props) => (props.primary ? "#4caf50" : "red")};
    border: 0;
    color: #fff;
    padding: 8px;
    font-size: 15px;
    border-radius: 3px;
    cursor: pointer;
  `;
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <StyledButton primary bgColor="#2DFFEB">
          Create Post
        </StyledButton>
      </form>
    </div>
  );
}

export default CreatePost;
