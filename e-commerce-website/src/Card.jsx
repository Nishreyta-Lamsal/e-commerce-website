import React, {useState} from 'react';

function Card(props){

    const[addedMessage, setAddedMessage] = useState("");

    function handleCart(){
        setAddedMessage("Added");

        setTimeout(() => {
            setAddedMessage("");
        },2000);
    };

    return(
        <div className="card-container">
            <img src={props.image} alt="Description" />
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <p className="added-message"> {addedMessage}</p>
            <button onClick={handleCart}> Add to Cart </button>
        </div>

    );

}

export default Card