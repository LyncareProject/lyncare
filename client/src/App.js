import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import About from './pages/About/About';
import Product from './pages/Product/Product';  
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/About' element={<About />} />
        <Route path='/Product' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
