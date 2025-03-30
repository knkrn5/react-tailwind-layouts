import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home/home";
import AboutPage from "./pages/about/aboutPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />}></Route>
        <Route index element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
