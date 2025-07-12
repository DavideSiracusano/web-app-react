import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import DarkTheme from "./DarkTheme";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  return (
    <Router>
      <MyNavbar />
      <DarkTheme />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
