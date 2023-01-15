import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Footer />} />
        <Route path="/menu" element={<Main />} />
        <Route path="/reservations" element={<Main />} />
        <Route path="/order" element={<Main />} />
        <Route path="/login" element={<Footer />} />
      </Routes>
      {/* <Hero />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
