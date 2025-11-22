import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Branches from './pages/Branches';
import Eryaman from './pages/Eryaman';
import Ivedik from './pages/Ivedik';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Reservation from './pages/Reservation';
import Reviews from './pages/Reviews';
import FAQ from './pages/FAQ';

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
            <Route path="/eryaman" element={<Eryaman />} />
            <Route path="/ivedik" element={<Ivedik />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/rezervasyon" element={<Reservation />} />
            <Route path="/is-birlikleri" element={<Partnerships />} />
            <Route path="/yorumlar" element={<Reviews />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/sikca-sorulan-sorular" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
