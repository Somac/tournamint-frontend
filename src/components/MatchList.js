import React from 'react'
import MatchBox from './MatchBox'

const MatchList = ({ matches }) => {
    return (
        <React.Fragment>
            <h2 className='text-center my-5 pb-3'>Ottelut</h2>
            {matches.map(match =>
                <MatchBox key={match._id} match={match} />    
            )}
        </React.Fragment>
    )
}

export default MatchList