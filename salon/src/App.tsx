import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Branches from './pages/Branches';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Reservation from './pages/Reservation';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/subelerimiz" element={<Branches />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/rezervasyon" element={<Reservation />} />
            <Route path="/is-birlikleri" element={<Partnerships />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
