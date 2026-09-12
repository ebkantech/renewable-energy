import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import Execution from "./pages/Execution";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/execution" element={<Execution />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;