import React from 'react'
import './Product.css';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const options = {
    edit: false,
    color: 'rgba(20,20,20,0.1)',
    value:5,
    activeColor: 'tomato',
    size: window.innerWidth <700?20:25,
};

function Product(props) {
    return (
     
        <div className='product'>
          <img src={props.product.img[0].url} alt="props.name" />
          <p>{props.product.name}</p>
          <div>
            <ReactStars {...options} /> <span>(3 Reveiws)</span>
          </div>
          <span>{props.product.price}</span>
        </div>
   
    );
}

export default Product
