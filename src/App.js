import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Blogs from './pages/Blogs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Helmet>
          <title>Aanjan Samaj - Spiritual Community</title>
          <meta name="description" content="Aanjan Samaj - A spiritual organization dedicated to spiritual growth, community service, and promoting spiritual values." />
          <meta name="keywords" content="spiritual, community, temple, events, blogs, gallery" />
          <meta name="author" content="Aanjan Samaj" />
          <meta property="og:title" content="Aanjan Samaj - Spiritual Community" />
          <meta property="og:description" content="A spiritual organization dedicated to spiritual growth and community service" />
          <meta property="og:type" content="website" />
        </Helmet>
        
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
