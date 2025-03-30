import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainContent from "./pages/mainContent/mainContent";

///**You can test the all different layout here in codespace only..🎉 **/
import LayoutOne from "./layouts/layoutOne";
// import LayoutTwo from "./layouts/layoutTwo";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutOne />}>
          <Route index element={<MainContent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
