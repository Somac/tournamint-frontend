import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Team from './Team'

class MatchBox extends Component {
  render() {
    const { match, tournamentLink } = this.props
    const { homeTeam, awayTeam, goals } = match
    const homeGoals = goals.filter(({ homeTeam }) => homeTeam === true).length
    const awayGoals = goals.filter(({ awayTeam }) => awayTeam === true).length
    const overtime = match.ot ? 'ja.' : ''
    let winnerStyle = ''
    let awayLosing = false
    let homeLosing = false
    const boxStyle = match.completed ? 'completed' : ''
    if (match.completed) {
      if (homeGoals > awayGoals) {
        winnerStyle = 'home-win'
        awayLosing = true
      } else {
        winnerStyle = 'away-win'
        homeLosing = true
      }
    }
    return (
      <div className='col-12 col-md-6 col-lg-4'>
        <Link to={tournamentLink ? `/tournaments/${tournamentLink}` : `/matches/${match.slug}`}>
          <div className={`box box-hover my-3 ${boxStyle} ${winnerStyle}`}>
            <div className='row align-items-center p-0 no-gutters'>
              <Team team={homeTeam} away={false} grayscale={homeLosing} />
              {match.completed ?
                <div className='col'><h4 className='text-center'>{homeGoals} - {awayGoals} {overtime}</h4></div>
                : homeGoals > 0 || awayGoals > 0 ?
                  <div className='col'><h4 className='text-center'>{homeGoals} - {awayGoals}</h4></div>
                  : <div className='col'></div>
              }
              <Team team={awayTeam} away={true} grayscale={awayLosing} />
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default MatchBox
