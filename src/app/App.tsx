import "./App.css";
import { Routes, Route } from "react-router-dom";
import Professional from "./pages/professional/professional";
import Navbar from "../components/layout/Navbar/Navbar";
import Personal from "./pages/personal/personal";

function App() {
  return (
    <div className="main-parent">
      <Navbar />
      <Routes>
        <Route path="/" element={<Professional />} />
        <Route path="/Personal" element={<Personal />} />
      </Routes>
    </div>
  );
}
export default App;
