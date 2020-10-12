import React from 'react'
import './Card.css'

// we create the props that the card will take in
//the props get rendered out if they exist as a property
function Card( {src, title, description, price} ) {
    return (
        <div className='card'>
            <img src={src} class="" alt="" />
            <div className='card__info'>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card
