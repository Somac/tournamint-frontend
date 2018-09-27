import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const TeamScore = ({ team, goals, away }) => {
    return (
        <React.Fragment>
            {away ? '' :
                <div className='col'>
                    <h2>{goals}</h2>
                </div>}
            <div className='col-4'>
                <img className="mx-auto d-flex" src={`http://localhost:3001/${team.logo}`} alt={team.name}></img>
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
        const { match } = this.props
        const { homeTeam, awayTeam, goals } = match
        const homeGoals = goals.filter(({ homeTeam }) => homeTeam === true).length
        const awayGoals = goals.filter(({ awayTeam }) => awayTeam === true).length
        return (
            <Link to={`/matches/${match.slug}`}>
                <div className='row box box-hover d-flex align-items-center my-5'>
                    <TeamScore team={homeTeam} goals={homeGoals} away={false} />
                    <div className='col'><h1>VS</h1></div>
                    <TeamScore team={awayTeam} goals={awayGoals} away={true} />
                </div>
            </Link>
        )
    }
}

export default MatchBox