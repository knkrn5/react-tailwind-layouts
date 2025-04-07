import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainContent from "./pages/mainContent/mainContent";

///**You can test the all different layout here in codespace only..🎉 **/
import LayoutOne from "./layouts/layoutOne";
// import LayoutTwo from "./layouts/layoutTwo";

//pagination
import OnePaginaton from "./pagination/onePagination";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutOne />}>
          <Route index element={<MainContent />} />
          <Route path="one-pagination" element={<OnePaginaton />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
