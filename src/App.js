import React from 'react';

import './App.css';
import Head from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <div>
      <Head/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route index element={<Main/>}/>
        <Route path='/BookingPage' element={<BookingPage/>}/>
        <Route path='/ConfirmedBooking' element={<ConfirmedBooking/>}/>
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
