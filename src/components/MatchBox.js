import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { apiUrl } from '../config'

const TeamScore = ({ team, goals, away }) => {
    const homeAway = away ? 'Away' : 'Home'
    return (
        <React.Fragment>
            {away ? '' :
                <div className='col'>
                    <h2>{goals}</h2>
                </div>}
            <div className='col-3 col-md-4'>
                <p className='text-center'><b>{homeAway}</b></p>
                <img className="mx-auto d-flex match-box-img" src={`${apiUrl}/${team.logo}`} alt={team.name}></img>
                <p className='text-center'>{team.name}</p>
            </div >
            {away ?
                <div className='col'>
                    <h2 className='text-right'>{goals}</h2>
                </div> : ''}
        </React.Fragment>
    )
}

class MatchBox extends Component {
    render() {
        const { match, tournamentLink } = this.props
        const { homeTeam, awayTeam, goals } = match
        const homeGoals = goals.filter(({ homeTeam }) => homeTeam === true).length
        const awayGoals = goals.filter(({ awayTeam }) => awayTeam === true).length
        const boxStyle = match.completed ? 'completed' : 'not-completed'
        return (
            <Link to={tournamentLink ? `/tournaments/${tournamentLink}` : `/matches/${match.slug}`}>
                <div className={`box box-hover my-5 ${boxStyle}`}>
                    <div className='d-flex align-items-center p-0'>
                        <TeamScore team={homeTeam} goals={homeGoals} away={false} />
                        <div className='col'><h1>VS</h1></div>
                        <TeamScore team={awayTeam} goals={awayGoals} away={true} />
                    </div>
                </div>
            </Link>
        )
    }
}

export default MatchBox