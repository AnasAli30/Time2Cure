import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-sage-green"
              >
                Time2Cure
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-x-6"
              >
                <Link to="/" className="hover:text-sage-green transition-colors">
                  Workshops
                </Link>
                <Link to="/about" className="hover:text-sage-green transition-colors">
                  About
                </Link>
                <Link to="/admin" className="hover:text-sage-green transition-colors">
                  Admin
                </Link>
              </motion.div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;