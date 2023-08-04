import React from 'react'
import AppNavbar from './components/AppNavbar'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
function App() {
  return (
    <Router>
      <AppNavbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App