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
    <div className='mb-3'>
      <h2 className='text-center my-5 pb-3'>Matches</h2>
      <MatchFilters teams={teams} />
      {roundMatches.map((round, i) => {
        if (round.length === 0) {
          return (
            <React.Fragment key={i}>
              <h3 className='text-center py-3'>Round {i + 1}</h3>
              <p className='text-center'>Couldn't find matches with selected filters</p>
            </React.Fragment>
          )
        }
        return (
          <React.Fragment key={i}>
            <h3 className='text-center py-3'>Round {i + 1}</h3>
            <Togglable label={`Näytä kierroksen ${i + 1} pelit`} cancelLabel='Piilota' visible>
              <div className='row row-eq-height justify-content-center'>
                {round.map(match => <MatchBox key={match._id} match={match} />)}
              </div>
            </Togglable>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default MatchList
