import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Batches from "./pages/Batches";
import Apply from "./pages/Apply";
import Alumni from "./pages/Alumni";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;