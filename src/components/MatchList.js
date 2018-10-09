import React from 'react'
import MatchBox from './MatchBox'
import MatchFilters from './MatchFilters'
import Togglable from './Togglable';

const MatchList = ({ matches, rounds, teams }) => {
    const arrayRounds = Array(rounds).fill().map((x, i) => i + 1)
    const roundMatches = arrayRounds
        .map(x => matches.filter(match => match.round === x)
            .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        )
    return (
        <div className='pb-3'>
            <h2 className='text-center my-5 pb-3'>Ottelut</h2>
            <MatchFilters teams={teams} />
            {roundMatches.map((round, i) => {
                return (
                    <React.Fragment key={i}>
                        <h3 className='text-center py-5'>Kierros {i + 1}</h3>
                        <Togglable label={`Näytä kierroksen ${i + 1} pelit`} cancelLabel='Piilota' visible>
                            {round.map(match => <MatchBox key={match._id} match={match} />)}
                        </Togglable>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default MatchList
