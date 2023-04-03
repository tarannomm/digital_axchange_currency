import React  from 'react';
import "../../styles/css/coinPart.css";
const Coin = (props) => {
   const {img,name,symbol,price,priceChange,marketCap}=props;
    return (
        <div className="container">
            <div className="rightContainer"> 
           <img src={img} alt="coin image"/>
           <p>{symbol.toUpperCase()}</p>
           </div>
           <div className="leftContainer">
            <span>{name}</span>
            <span>$ {price.toLocaleString()}</span>
            <span id={priceChange>0 ?"positive":"negative"}> {priceChange}</span>
            <span>${marketCap}</span>
           </div>  
        </div>
        );
};

export default Coin;