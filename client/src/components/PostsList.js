import React from 'react';
import { Link } from "react-router-dom";
import postsService from "../services/posts.service";
import { useRequest } from "../hooks/useRequest";

const PostsList = () => {
  const { loading, error, value: posts } = useRequest(postsService.getPosts);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1 className={'error-msg'}>{error}</h1>
  }

  return (
    <div>
      {posts.map(({id, title}) => (
        <h3 key={id}>
          <Link to={`/posts/${id}`}>{title}</Link>
        </h3>
      ))}
    </div>
  );
};

export default PostsList;
