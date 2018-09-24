import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNew } from '../reducers/tournamentReducer'
import { getLeagues } from '../reducers/leagueReducer'
import TournamentForm from '../forms/TournamentForm'

class NewTournament extends Component {
    componentDidMount = async() => {
        await this.props.getLeagues()
    }
    
    addTournament = (values) => {
        console.log(values)
    }

    render() {
        return (
            <div>
                <h2>Lisää uusi</h2>
                <TournamentForm onSubmit={this.addTournament} leagues={this.props.leagues}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        leagues: state.leagues
    }
}

export default connect(
    mapStateToProps,
    { addNew, getLeagues }
)(NewTournament)