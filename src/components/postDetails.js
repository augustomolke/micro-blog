import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import axios from "axios";
import { useHistory } from "react-router-dom";
import postService from "../services/postService";

const PostDetails = () => {
  const { id } = useParams();
  const hist = useHistory();
  const { data, error, isPending } = useFetch(id);

  const handleDelete = () => {
    postService.deletePost(id);
    hist.push("/micro-blog");
  };
  return (
    <div className="postdetails">
      {isPending && <div>Pending...</div>}
      {error && <div>error</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Author: {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleDelete}>delete post</button>
        </article>
      )}
    </div>
  );
};

export default PostDetails;
