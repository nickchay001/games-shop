import React from 'react'
import { GameGallery } from '../game-gallery'

export const GameRow = ({ game = {} }) => {
    return (
        <li className='game-row'>
            <span className='game-name'>{game.name}</span>
            {game.inWhishList && <span className='game-in-whish-list'>В желаемом</span>}
            <GameGallery images={game.images} />
            <span className="game-price">{game.price}</span>
        </li>
    )
}
