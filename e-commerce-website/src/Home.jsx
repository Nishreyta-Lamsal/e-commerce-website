import React, {useState} from 'react';
import homeImage from './assets/home-page-1.jpg'
import Card from './Card.jsx';
import cloth1 from './assets/product-1.jpg'
import cloth2 from './assets/product-2.jpg'
import cloth3 from './assets/product-3.jpg'
import cloth4 from './assets/product-4.jpg'
import cloth5 from './assets/product-5.jpg'
import cloth6 from './assets/product-6.jpg'
import cloth7 from './assets/product-7.jpg'
import cloth8 from './assets/product-8.jpg'
import cloth9 from './assets/product-11.jpg'
import cloth10 from './assets/product-13.jpg'

function Home(){
    return(
        <div className="home-container">
            <img src={homeImage} alt="Image"/>
        <div> 
            <p className="best-seller"> Our best sellers </p>
        <Card image={cloth1} name="Plaid Blazer" price="$50.99"/> 
        <Card image={cloth2} name="Classic Black Suit" price="$78.00"/>  
        <Card image={cloth3} name="Classic Brown Suit" price="$82.99"/>  
        <Card image={cloth4} name="Forest Green Jacket" price="$52.99"/>  
        <Card image={cloth5} name="Oversized Blue Blazer" price="$46.00"/>  
        <Card image={cloth6} name="Plaid Blazer and Skirt Set" price="$85.99"/>  
        <Card image={cloth7} name="Leather Overcoat with Satin Midi Skirt" price="$99.99"/>  
        <Card image={cloth8} name="Plaid Suit with WaistCoat" price="$84.99"/>  
        <Card image={cloth9} name="Integrated Shirt Suit" price="$79.00"/> 
        <Card image={cloth10} name="Classic Beige Suit" price="$87.00"/>    
        </div>     
        </div>
        
    )
}

export default Home
