import Home from './pages/Home/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Hotels from './pages/Hotels/Hotels.jsx';
import HotelRoom from './pages/HotelRoom/HotelRoom.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllData } from './redux/slice/roomslice.js';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(getAllData());
  },[])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotelroom/:id" element={<HotelRoom />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
