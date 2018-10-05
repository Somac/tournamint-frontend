import React from 'react'
import MatchBox from './MatchBox'

const MatchList = ({ matches, rounds }) => {
    return (
        <div className='pb-3'>
            <h2 className='text-center my-5 pb-3'>Ottelut</h2>
            {matches.map(match =>
                <MatchBox key={match._id} match={match} />    
            )}
        </div>
    )
}

export default MatchList