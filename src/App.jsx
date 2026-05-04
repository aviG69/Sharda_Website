import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Batches from "./pages/Batches";
import Apply from "./pages/Apply";
import Alumni from "./pages/Alumni";

function App() {
  return (
    <BrowserRouter>
      <div className="page-corner-icons">
        <a href="https://www.youtube.com/channel/UCiVzwYNYKlM5aCNj7cLccfw" target="_blank" rel="noopener noreferrer">
          <FaYoutube style={{ color: '#FF0000', fontSize: '22px' }} />
        </a>
        <a href="https://www.facebook.com/sharda-tutorial" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={{ color: '#1877F2', fontSize: '22px' }} />
        </a>
        <a href="https://www.instagram.com/sharda_tutorial" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ color: '#E4405F', fontSize: '22px' }} />
        </a>
        <a href="https://www.twitter.com/sharda_tutorial" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={{ color: '#1DA1F2', fontSize: '22px' }} />
        </a>
      </div>
      <div className="app-content">
        <Navbar />
        <main className="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/alumni" element={<Alumni />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;