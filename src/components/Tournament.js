import React from 'react'

const Tournament = ({tournament}) => {
    return (
        <div>
            <p>{tournament.name}</p>
            <p>{tournament.teams.length}</p>
        </div>
    )
}

export default Tournament