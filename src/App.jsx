import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Music from "./pages/Music";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
 
          <Route element={<PrivateRoute />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/music" element={<Music />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
 
export default App;