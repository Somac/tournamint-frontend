import React from 'react'
import { Link } from 'react-router-dom'

const PlayerSmallBox = ({ player }) => {
    return (
        <div className='col-4 col-md-2'>
            <Link to={`/players/${player._id}`} >
                <div className='box box-hover my-3'>
                    #{player.jerseyNumber} - {player.name} <br />
                    {player.team.name}
                </div>
            </Link>
        </div>
    )
}

export default PlayerSmallBox