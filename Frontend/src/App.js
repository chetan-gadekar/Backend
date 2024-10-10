import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductList from './ProductList';
import InsertProduct from './InsertProduct';


export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/add' element={<InsertProduct />} /> {/* No need for closing tag */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}
