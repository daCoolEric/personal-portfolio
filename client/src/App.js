// import { Counter } from "./features/counter/Counter";
import { Routes, Route } from "react-router-dom";
import NavBarTest from "./features/NavBar/NavBarTest.tsx";
import NavBar from "./features/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./features/Footer/Footer";
import Works from "./pages/Works/Works";
import WorkDetail from "./pages/Works/WorkDetail";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <Counter /> */}
      <NavBar />
      {/* <NavBarTest /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/workdetails" element={<WorkDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
