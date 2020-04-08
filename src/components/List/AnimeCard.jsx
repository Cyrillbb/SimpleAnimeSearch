import React from 'react'
import './AnimeCard.css'

export default function AnimeCard(props) {
    return (
        <div className='AnimeCard'>
            {props.children}
        </div>
    )
}