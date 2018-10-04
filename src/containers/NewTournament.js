import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNew } from '../reducers/tournamentReducer'
import { getLeagues } from '../reducers/leagueReducer'
import { getTeams } from '../reducers/teamReducer'
import TournamentForm from '../forms/TournamentForm'
import Loading from '../components/Loading'
import { Redirect } from 'react-router'

class NewTournament extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: true,
            selectedTeams: [],
            redirect: false
        }
    }

    componentDidMount = async () => {
        await this.props.getLeagues()
        await this.props.getTeams()
        this.setState({ fetching: false })
    }

    addTournament = async (values) => {
        const teams = this.state.selectedTeams.map(t => t.id)
        const dataToSend = { ...values, teams }
        await this.props.addNew(dataToSend)
    }

    teamChange = (team) => {
        if (this.state.selectedTeams.find(t => t.id === team)) {
            const newSelected = this.state.selectedTeams
                .filter(t => t.id !== team)
            this.setState({
                selectedTeams: newSelected
            })
        } else {
            const newTeam = this.props.teams.find(t => t.id === team)
            this.setState({
                selectedTeams:
                    [...this.state.selectedTeams, newTeam]
            })
        }
    }

    leagueChange = () => {
        this.setState({ selectedTeams: [] })
    }

    render() {
        if (this.state.fetching) {
            return <Loading />
        }
        if (this.state.redirect) {
            return <Redirect to='/tournaments' />
        }
        return (
            <React.Fragment>
                <h2 className='text-center my-5'>Lisää uusi turnaus</h2>
                <div className='row d-flex justify-content-center my-5'>
                    <div className='col-12 col-md-6 box'>
                        <TournamentForm
                            onSubmit={this.addTournament}
                            leagues={this.props.leagues}
                            teams={this.props.teams}
                            teamChange={this.teamChange}
                            selectedTeams={this.state.selectedTeams}
                            leagueChange={this.leagueChange}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        leagues: state.leagues,
        teams: state.teams
    }
}

export default connect(
    mapStateToProps,
    { addNew, getLeagues, getTeams }
)(NewTournament)
