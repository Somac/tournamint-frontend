import React, { Component } from 'react'
import { apiUrl } from '../config'

const TeamScore = ({ team, goals, away }) => {
    const homeAway = away ? 'Away' : 'Home'
    return (
        <React.Fragment>
            {away ? '' :
                <div className='col'>
                    <h2>{goals}</h2>
                </div>}
            <div className='col-4'>
                <p className='text-center'><b>{homeAway}</b></p>
                <img className="mx-auto d-flex" src={`${apiUrl}/${team.logo}`} alt={team.name}></img>
                <p className='text-center'>{team.name}</p>
            </div >
            {away ?
                <div className='col'>
                    <h2 className='text-right'>{goals}</h2>
                </div> : ''}
        </React.Fragment>
    )
}

class MatchBoxNoLink extends Component {
    render() {
        const { match } = this.props
        const { homeTeam, awayTeam, goals } = match
        const homeGoals = goals.filter(({ homeTeam }) => homeTeam === true).length
        const awayGoals = goals.filter(({ awayTeam }) => awayTeam === true).length
        const boxStyle = match.completed ? 'completed' : 'not-completed'
        return (
            <div className={`box my-5 ${boxStyle}`}>
                <div className='d-flex align-items-center p-0'>
                    <TeamScore team={homeTeam} goals={homeGoals} away={false} />
                    <div className='col'><h1>VS</h1></div>
                    <TeamScore team={awayTeam} goals={awayGoals} away={true} />
                </div>
            </div>
        )
    }
}

export default MatchBoxNoLink