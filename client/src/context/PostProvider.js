import {createContext, useContext, useMemo} from "react";
import {useRequest} from "../hooks/useRequest";
import postsService from "../services/posts.service";
import {useParams} from "react-router-dom";

export const usePostContext = () => useContext(PostContext);

const PostContext = createContext({});

export const PostProvider = ({children}) => {
  const {id} = useParams();
  const {loading, error, value: post} = useRequest(() => postsService.getPost(id), [id]);

  const commentsByParentId = useMemo(() => {
    if (!post?.comments) {
      return [];
    }

    const group = {};
    post.comments.forEach(comment => {
      group[comment.parentId] ||= [];
      group[comment.parentId].push(comment);
    })
    return group;
  }, [post?.comments]);

  const getReplies = parentId => commentsByParentId[parentId];

  return (
    <PostContext.Provider value={{
      post: { id, ...post },
      getReplies,
      rootComments: commentsByParentId[null],
    }}>
      {loading ? <h1>Loading...</h1> : error ? <h1 className={'error-msg'}>{error}</h1> : children}
    </PostContext.Provider>
  );
}
