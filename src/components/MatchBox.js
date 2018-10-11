import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { apiUrl } from '../config'

const Team = ({ team, away }) => {
    const homeAway = away ? 'Away' : 'Home'
    return (
        <div className='col-3 col-md-4'>
            <p className='text-center'><b>{homeAway}</b></p>
            <img className="mx-auto d-flex match-box-img" src={`${apiUrl}/${team.logo}`} alt={team.name}></img>
            <p className='text-center'>{team.name}</p>
        </div >
    )
}

class MatchBox extends Component {
    render() {
        const { match, tournamentLink } = this.props
        const { homeTeam, awayTeam, goals } = match
        const homeGoals = goals.filter(({ homeTeam }) => homeTeam === true).length
        const awayGoals = goals.filter(({ awayTeam }) => awayTeam === true).length
        const overtime = match.ot ? 'ja.' : ''
        let winnerStyle
        const boxStyle = match.completed ? 'completed' : ''
        match.completed ? winnerStyle = homeGoals > awayGoals ? 'home-win' : 'away-win' : ''
        return (
            <div className='col-12 col-md-6 col-lg-4'>
                <Link to={tournamentLink ? `/tournaments/${tournamentLink}` : `/matches/${match.slug}`}>
                    <div className={`box box-hover my-3 ${boxStyle} ${winnerStyle}`}>
                        <div className='row align-items-center p-0 no-gutters'>
                            <Team team={homeTeam} away={false} />
                            {match.completed ? 
                            <div className='col'><h4 className='text-center'>{homeGoals} - {awayGoals} {overtime}</h4></div>
                            : <div className='col'></div>
                            }
                            <Team team={awayTeam} away={true} />
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default MatchBox