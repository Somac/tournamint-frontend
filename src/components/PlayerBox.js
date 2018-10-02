import React from 'react'
import { Link } from 'react-router-dom'

const PlayerBox = ({ player }) => {
    const img = `https://nhl.bamcontent.com/images/headshots/current/168x168/${player.apiId}.jpg`
    const onError = 'https://nhl.bamcontent.com/images/headshots/current/168x168/skater.jpg'
    return (
        <div className='col-12 col-md-3'>
            <Link to={`/players/${player._id}`} >
            <div className='box box-hover mb-3'>
                <img className='mx-auto d-flex rounded-circle' onError={(e) => e.target.src=onError} src={img} alt={player.name} />
                <p className='text-center'>{player.name}</p>
            </div>
            </Link>
        </div>
    )
}

export default PlayerBox