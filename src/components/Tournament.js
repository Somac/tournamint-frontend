import React from 'react'
import { Link } from 'react-router-dom';

const Tournament = ({ tournament }) => {
    return (
        <div className='col-4'>
            <div className='box'>
                <Link to={`/tournaments/${tournament.slug}`}>{tournament.name}</Link>
                <p>{tournament.teams.length}</p>
            </div>
        </div>
    )
}

export default Tournament