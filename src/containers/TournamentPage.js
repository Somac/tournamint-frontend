import React, { Component } from 'react'

class TournamentPage extends Component {
    render() {
        const tournament = this.props.tournament
        return (
            <div>
                {tournament === undefined ?
                        <div>Turnausta ei löytynyt</div> :
                        <div>
                            <h2>{tournament.name}</h2>
                            <p>{tournament.description}</p>
                            
                        </div>
                }
            </div>
        )
    }
}

export default TournamentPage