import React from 'react'
import MatchBox from './MatchBox'

const MatchList = ({ matches, rounds }) => {
    const arrayRounds = Array(rounds).fill().map((x, i) => i + 1)
    const roundMatches = arrayRounds
        .map(x => matches.filter(match => match.round === x)
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    )
    return (
        <div className='pb-3'>
            <h2 className='text-center my-5 pb-3'>Ottelut</h2>
            {roundMatches.map((round, i) => {
                return (
                    <React.Fragment key={i}>
                        <h3 className='text-center'>Kierros {i + 1}</h3>
                        {round.map(match => <MatchBox key={match._id} match={match} />)}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default MatchList
