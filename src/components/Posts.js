import React, { useState, useEffect } from "react";
import { baseURL } from "../utils/constants";
const Posts = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${baseURL}/posts`);
      res
        .json()
        .then(res => setPost(res))
        .catch(err => console.error(err));
    }
    fetchData();
  }, []);

  return (
    <div>
      {posts.slice(0, 10).map(post => {
        return (
          <div className="ui piled segment" key={post.id}>
            <p className="sub header">Post {post.id}</p>
            <h4 className="ui header">{post.title}</h4>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
