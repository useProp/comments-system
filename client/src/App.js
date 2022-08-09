import { Routes, Route } from "react-router-dom";
import PostsList from "./components/PostsList";
import {PostProvider} from "./context/PostProvider";
import Post from "./components/Post";

function App() {
  return (
    <div className={'container'}>
      <Routes>
        <Route path={'/'}  element={<PostsList />} />
        <Route path={'/posts/:id'}  element={
          <PostProvider>
            <Post />
          </PostProvider>
        } />
        <Route path={'*'}  element={<h1>Page is not found :(</h1>} />
      </Routes>
    </div>
  );
}

export default App;
