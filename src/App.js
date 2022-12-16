import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Blogs, Blog, About, Homepage } from './Components'

function App() {
  return (
    <Router>

      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/test" element={"test"} />
      </Routes>

    </Router>
  )
}

export default App;
