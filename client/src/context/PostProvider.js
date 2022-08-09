import {createContext, useContext} from "react";
import {useRequest} from "../hooks/useRequest";
import postsService from "../services/posts.service";
import {useParams} from "react-router-dom";

export const usePostContext = () => useContext(PostContext);

const PostContext = createContext({});

export const PostProvider = ({children}) => {
  const {id} = useParams();
  const {loading, error, value: post} = useRequest(() => postsService.getPost(id), [id]);

  return (
    <PostContext.Provider value={{
      post: { id, ...post },
    }}>
      {loading ? <h1>Loading...</h1> : error ? <h1 className={'error-msg'}>{error}</h1> : children}
    </PostContext.Provider>
  );
}
