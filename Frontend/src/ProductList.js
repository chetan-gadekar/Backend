import React, { useEffect, useState } from 'react';

import ProData from './ProData';
import './style.css'; 
import axios from 'axios'

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const getProducts=async ()=>{
       const req= await axios.get('http://localhost:8080/products/api/v1')
        setProducts(req.data)
    }

    useEffect(()=>{
        getProducts()
    },[])

    const hadleClick= async (id)=>{
        const req= await axios.delete(`http://localhost:8080/products/api/v1/${id}`)
        console.log(req.data)
        // setProducts(req.data)
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProData props={product} key={product.id} hadleClick={hadleClick}/>
            ))}
        </div>
    );
}
