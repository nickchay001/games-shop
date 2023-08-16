import React from 'react'

export const GameGallery = ({ images = [] }) => {

    let gallery = images.map((image, index) =>
        <img src={image} alt='preview' key={index}/>
    )
    return (
        <div className='game-gallery'>
            {gallery}
        </div>
    )
}
