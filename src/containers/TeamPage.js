import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneTeam } from '../reducers/teamReducer'
import PlayerBox from '../components/PlayerBox'
import Table from '../components/Table'
import Togglable from '../components/Togglable'
import Loading from '../components/Loading'

class TeamPage extends Component {
    state = {
        team: {},
        players: [],
        tournaments: [],
        matches: [],
        playerArray: [],
        fetching: true
    }
    componentDidMount = async () => {
        const slug = this.props.teamSlug
        await this.props.getOneTeam(slug)

        const { team } = this.props
        const { players, tournaments, matches } = team

        const gamesPlayed = matches.filter(({ completed }) => completed === true).length

        const playerArray = players.map(player => {
            const goals = player.goals.length
            const assists = player.assists.length
            const points = goals + assists
            return [player.jerseyNumber, player.position, player.name, gamesPlayed, goals, assists, points]
        })

        playerArray.sort((a, b) => { return a[1] - b[1] })

        this.setState({
            team,
            players,
            tournaments,
            matches,
            playerArray,
            fetching: false
        })
    }

    render() {
        const playerHeaders = ['#', 'POS', 'Nimi', 'GP', 'G', 'A', 'P']
        const { team, players, tournaments, matches, playerArray } = this.state
        if (this.state.fetching) {
            return (<Loading />)
        }
        return (
            <React.Fragment>
                <img className="mx-auto mt-5 d-flex" src={`http://localhost:3001/${team.logo}`} alt={team.shortHand}></img>
                <h2 className='text-center mb-5 mt-3'>{team.name}</h2>
                <Togglable label='Näytä pistepörssi' cancelLabel='Piilota'>
                    <Table headers={playerHeaders} body={playerArray} />
                </Togglable> 
                <h1 className='text-center my-5'>Pelaajat</h1>
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