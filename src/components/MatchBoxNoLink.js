import React, { Component } from 'react'
import Team from './Team'

class MatchBoxNoLink extends Component {
    render() {
        const { match } = this.props
        const { homeTeam, awayTeam, goals } = match
        const homeGoals = goals.filter(({ homeTeam }) => homeTeam === true).length
        const awayGoals = goals.filter(({ awayTeam }) => awayTeam === true).length
        const boxStyle = match.completed ? 'completed' : 'not-completed'
        const overtime = match.ot ? 'ja.' : ''
        let winnerStyle = ''
        if(match.completed){
            if(homeGoals > awayGoals) {
                winnerStyle = 'home-win'
            } else {
                winnerStyle = 'away-win'
            }
        } 
        return (
            <div className={`box my-5 ${boxStyle} ${winnerStyle}`}>
                <div className='d-flex align-items-center p-0'>
                    <Team team={homeTeam} away={false} />
                    <div className='col'>
                        <h4 className='text-center'>{homeGoals} - {awayGoals} {overtime}</h4>
                    </div>
                    <Team team={awayTeam} away={true} />
                </div>
            </div>
        )
    }
}

export default MatchBoxNoLink