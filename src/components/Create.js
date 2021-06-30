import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import postService from "../services/postService";

const Create = ({ handleCreate }) => {
  const [newPost, setnewPost] = useState({ title: "", body: "", author: "" });
  const [ready, setReady] = useState(false);
  const hist = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    postService.createPost(newPost).then((res) => {
      hist.push("/micro-blog");
    });
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={newPost.title}
          onChange={(e) => {
            setnewPost({ ...newPost, title: e.target.value });
          }}
        />
        <label>Text</label>

        <textarea
          required
          value={newPost.body}
          onChange={(e) => {
            setnewPost({ ...newPost, body: e.target.value });
          }}
        ></textarea>
        <label>Author</label>

        <input
          type="text"
          required
          value={newPost.author}
          onChange={(e) => {
            setnewPost({ ...newPost, author: e.target.value });
          }}
        />
        <button>Add Post</button>
      </form>
    </div>
  );
};

export default Create;
