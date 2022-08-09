import { Routes, Route } from "react-router-dom";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div className={'container'}>
      <Routes>
        <Route path={'/'}  element={<PostsList />} />
        <Route path={'/posts/:id'}  element={<h2>Hey :)</h2>} />
        <Route path={'*'}  element={<h1>Page is not found :(</h1>} />
      </Routes>
    </div>
  );
}

export default App;
