import { useState, useEffect } from "react";
import axios from "axios";
import postService from "../services/postService";

const useFetch = (id = "") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const abortController = new AbortController();
  const signal = abortController.signal;
  var fet = postService.getPosts;
  if (id != "")
    fet = () => {
      return postService.getPostById(id);
    };

  useEffect(() => {
    fet().then(
      (res) => {
        setIsPending(false);
        setData(res);
        setError(null);
      },
      (err) => {
        setIsPending(false);
        setError(err.message);
      }
    );
  }, [id]);

  return { data, isPending, error };
};
export default useFetch;
