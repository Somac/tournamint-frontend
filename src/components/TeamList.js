import React from 'react'
import CardBox from './CardBox'

const TeamList = ({ teams }) => {
    return (
        <div className='row'>
            <div className='col-12'>
                <h2 className='my-3 text-center'>Turnauksen joukkueet</h2>
            </div>
            {teams.map(team =>
                <CardBox
                    key={team._id}
                    text={team.description}
                    name={team.name}
                    link={`/teams/${team.slug}`}
                    logo={team.logo} />
            )}
        </div>
    )
}

export default TeamList