import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneTeam } from '../reducers/teamReducer'
import PlayerBox from '../components/PlayerBox'
import Togglable from '../components/Togglable'
import Loading from '../components/Loading'
import ReactTable from 'react-table'

class TeamPage extends Component {
    state = {
        team: {},
        players: [],
        tournaments: [],
        matches: [],
        fetching: true,
        reactColumns: [],
        reactPlayerArray: []
    }
    componentDidMount = async () => {
        const slug = this.props.teamSlug
        await this.props.getOneTeam(slug)

        const { team } = this.props
        const { players, tournaments, matches } = team

        const gamesPlayed = matches.filter(({ completed }) => completed === true).length

        const reactPlayerArray = players.map(player => {
            const goals = player.goals.length
            const assists = player.assists.length
            const points = goals + assists
            return {
                jersey: player.jerseyNumber,
                position: player.position,
                name: player.name,
                gp: gamesPlayed,
                g: goals,
                a: assists,
                p: points
            }
        })

        const reactColumns = [
            { Header: '#', accessor: 'jersey' },
            { Header: 'POS', accessor: 'position' },
            { Header: 'Nimi', accessor: 'name' },
            { Header: 'GP', accessor: 'gp' },
            { Header: 'G', accessor: 'g' },
            { Header: 'A', accessor: 'a' },
            { Header: 'P', accessor: 'p' }
        ]

        this.setState({
            team,
            players,
            tournaments,
            matches,
            fetching: false,
            reactColumns,
            reactPlayerArray
        })
    }

    render() {
        const { team, players, tournaments, matches, reactPlayerArray, reactColumns } = this.state
        const completedMatches = matches.filter(match => match.completed === true).length
        const incompleteMatches = matches.filter(match => match.completed === false).length
        console.log(completedMatches, incompleteMatches)
        if (this.state.fetching) {
            return (<Loading />)
        }
        const defaultSort = [
            {
                id: 'p',
                desc: true
            }
        ]
        return (
            <React.Fragment>
                <img className="mx-auto mt-5 d-flex" src={`http://localhost:3001/${team.logo}`} alt={team.shortHand}></img>
                <h2 className='text-center mb-5 mt-3'>{team.name}</h2>
                <Togglable label='Näytä pistepörssi' cancelLabel='Piilota'>
                    <ReactTable
                        data={reactPlayerArray}
                        columns={reactColumns}
                        defaultPageSize={10}
                        defaultSorted={defaultSort}
                    />
                </Togglable>
                <h1 className='text-center my-5'>Turnaukset</h1>
                <div className='row'>
                    <div className='col-12'>
                        <div className='box'>
                            {tournaments.map(tournament => {
                                return (
                                    <p>{tournament.name}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <h1 className='text-center my-5'>Pelaajat</h1>
                <div className='row'>
                    {players
                        .sort((a, b) => {
                            if (a.name < b.name) return -1
                            if (a.name > b.name) return 1
                            return 0
                        })
                        .map(player => <PlayerBox key={player._id} player={player} />)

                    }
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