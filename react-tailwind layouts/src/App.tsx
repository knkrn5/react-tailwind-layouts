import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home/home";
import MainContent from "./pages/mainContent/mainContent";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />}>
          <Route index element={<MainContent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
