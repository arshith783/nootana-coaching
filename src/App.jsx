import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admissions from "./pages/Admissions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissions" element={<Admissions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;