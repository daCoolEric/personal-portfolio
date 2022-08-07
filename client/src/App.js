// import { Counter } from "./features/counter/Counter";
import { Routes, Route } from "react-router-dom";
import NavBar from "./features/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/AboutMUI";
import Footer from "./features/Footer/Footer";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import "./App.css";
import BlogDetail from "./pages/Blog/BlogDetail";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import WorkDetail from "./pages/Works/WorkDetail";

const bgColor = createTheme({
  palette: {
    primary: {
      main: red[500],
      todo: "#6a1486",
      product: "#d96f31",
      weather: "#433a29",
      movie: "#d12d38",
      calc: "#367f86",
      graphic: "#f4c702",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={bgColor}>
      <div className="app">
        {/* <Counter /> */}
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:name" element={<WorkDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blogdetails" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
