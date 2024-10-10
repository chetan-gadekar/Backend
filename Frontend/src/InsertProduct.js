import React, { useState } from 'react';
import './InsertProduct.css';
import axios from 'axios';

export default function InsertProduct() {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    rating: '',
    category:'',
    thumbnail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Product submitted:', product);
    sendData(product)
  };

  const sendData=async(product)=>{
     const pro=await axios.post('http://localhost:8080/products/api/v1',product)
     console.log("send",pro.data)
  };


  return (
    <div className="insert-product">
      <h1>Add a New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            name="title" 
            value={product.title} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Price:</label>
          <input 
            type="number" 
            name="price" 
            value={product.price} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Rating:</label>
          <input 
            type="number" 
            name="rating" 
            value={product.rating} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Category:</label>
          <input 
            type="text" 
            name="category" 
            value={product.category} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Thumbnail URL:</label>
          <input 
            type="text" 
            name="thumbnail" 
            value={product.thumbnail} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
