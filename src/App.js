import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Blogs, Blog } from './Components'

function App() {
  return (
    <Router>

      <NavBar />

      <Routes>
        <Route path="/" element={"homepage"} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/test" element={"test"} />
      </Routes>

    </Router>
  )
}

export default App;
