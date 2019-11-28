import React, { useState } from "react";
import API from "../../adapters/API";

import { useHistory } from "react-router-dom";

const NewPost = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    API.postPost({ title, content }).then(post => {
      history.push(`/posts/${post.id}`);
    });
    setTitle("");
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default NewPost;
