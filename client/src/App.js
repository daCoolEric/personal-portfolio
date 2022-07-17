// import { Counter } from "./features/counter/Counter";
import { Routes, Route } from "react-router-dom";
import NavBarTest from "./features/NavBar/NavBarTest.tsx";
import NavBar from "./features/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./features/Footer/Footer";
import Works from "./pages/Works/Works";
import WorkDetail from "./pages/Works/WorkDetail";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import "./App.css";
import BlogDetail from "./pages/Blog/BlogDetail";
import AccountMenu from "./features/NavBar/MenuList";

function App() {
  return (
    <div className="app">
      {/* <Counter /> */}
      <NavBar />
      {/* <AccountMenu /> */}
      {/* <NavBarTest /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/workdetails" element={<WorkDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/blogdetails" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
