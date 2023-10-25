import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import About from './pages/About/About';
import Product from './pages/Product/Product';  
import Support from './pages/Support/Support';  
import Contact from './pages/Contact/Contact';  
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Sending from './pages/Sending/Sending';

function App() {
  const [ sending, setSending ] = useState(false)

  return (
    <div className="App">
      {
        sending && <Sending />
      }
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/support' element={<Support />} />
        <Route path='/contact' element={<Contact setSending={setSending} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;