import React, { Component } from 'react'

class TournamentPage extends Component {
    render() {
        const noTournament = () => (
            <div>Turnausta ei löytynyt</div>
        )
        const yesTournament = () => (
            <div>
                <h2>{tournament.name}</h2>
                <p>{tournament.description}</p>
            </div>
        )
        const tournament = this.props.tournament
        console.log(tournament)
        return (
            <div>
                {tournament === undefined ?
                    noTournament() :
                    yesTournament()
                }
            </div>
        )
    }
}

export default TournamentPage
