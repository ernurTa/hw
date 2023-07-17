import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "../../pages";
import "../../style.css";
import Header from "../header/Header";
import Rest from "../../pages/wow/Rest";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rest" element={<Rest />} />
      </Routes>
    </Router>
  );
};

export default App;
