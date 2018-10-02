import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneTeam } from '../reducers/teamReducer'
import PlayerBox from '../components/PlayerBox'
import Table from '../components/Table'

class TeamPage extends Component {
    state = {
        team: {},
        players: [],
        tournaments: [],
        matches: [],
        playerArray: []
    }
    componentDidMount = async () => {
        const slug = this.props.teamSlug
        await this.props.getOneTeam(slug)

        const { team } = this.props
        const { players, tournaments, matches } = team

        const playerArray = players.map(player => {
            return [player.jerseyNumber, player.position, player.name, 0, 0, 0, 0]
        })

        playerArray.sort((a, b) => { return a[0] - b[0] })

        this.setState({
            team,
            players,
            tournaments,
            matches,
            playerArray
        })
    }

    render() {
        const playerHeaders = ['#', 'POS', 'Nimi', 'GP', 'G', 'A', 'P']
        const { team, players, tournaments, matches, playerArray } = this.state
        console.log(team)
        console.log(tournaments, matches)
        return (
            <React.Fragment>
                <img className="mx-auto mt-5 d-flex" src={`http://localhost:3001/${team.logo}`} alt={team.shortHand}></img>
                <h2 className='text-center mb-5 mt-3'>{team.name}</h2>
                <Table headers={playerHeaders} body={playerArray} />
                <div className='row'>
                    {players.map(player => <PlayerBox key={player._id} player={player} />)}
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        team: state.teams
    }
}

export default connect(
    mapStateToProps,
    { getOneTeam }
)(TeamPage)