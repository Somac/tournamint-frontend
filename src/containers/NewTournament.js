import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNew } from '../reducers/tournamentReducer'
import { getLeagues } from '../reducers/leagueReducer'
import { getTeams } from '../reducers/teamReducer'
import TournamentForm from '../forms/TournamentForm'
import Loading from '../components/Loading'

class NewTournament extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: true,
            selectedTeams: []
        }
    }

    componentDidMount = async () => {
        await this.props.getLeagues()
        await this.props.getTeams()
        this.setState({ fetching: false })
    }

    addTournament = (values) => {
        const teams = this.state.selectedTeams.map(t => t.id)
        console.log({ ...values, teams })
    }

    teamChange = (team) => {
        if (this.state.selectedTeams.find(t => t.id === team)) {
            console.log('Team already added')
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
            return (<Loading />)
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
