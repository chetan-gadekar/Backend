import React from 'react';
import './style.css'; 

export default function ProData({props,hadleClick}) {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.thumbnail} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Price: ${props.price.toFixed(2)}</p>
                    <p className="card-text">Rating: {props.rating}</p>
                    <p className="card-text">Id: {props._id}</p>
                    <a href="/" className="btn btn-primary" onClick={()=>hadleClick(props._id)}>Go somewhere</a>
                </div>
            </div>
        </div>
    );
}
