import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Footer />} />
        <Route path="/menu" element={<Main />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order" element={<Main />} />
        <Route path="/login" element={<Footer />} />
      </Routes>
      {/* <Hero />
      <Main />
      <Footer /> */}
    </>
  );
}

export default App;
