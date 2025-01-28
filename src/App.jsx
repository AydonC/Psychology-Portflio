import HomePage from './HomePage'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Prices from './Prices';
import BookingForm from './Bookingform';
import Contact from './Contact';
import Navbar from './Navbar';


function App() {
  

  return (
   
    <Router>
      <Navbar/>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Prices" element={<Prices />} />
        <Route path="/Bookings" element={<BookingForm />} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
      
    </Router>
  )
}

export default App
