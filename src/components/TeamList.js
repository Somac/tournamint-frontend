import React from 'react'
import CardBox from './CardBox'

const TeamList = ({ teams }) => {
    return (
        <div className='row d-flex justify-content-center'>
            <div className='col-12'>
                <h2 className='my-5 text-center'>Turnauksen joukkueet</h2>
            </div>
            {teams.map(team =>
                <CardBox
                    key={team._id}
                    text={team.gamerName}
                    name={team.name}
                    link={`/teams/${team.slug}`}
                    logo={team.logo} 
                    size='3'
                />
            )}
        </div>
    )
}

export default TeamList