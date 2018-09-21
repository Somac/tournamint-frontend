import React, { Component } from 'react';
import { tournamentInitialization } from './reducers/tournamentReducer'
import { connect } from 'react-redux'
import TournamentList from './components/TournamentList'

class App extends Component {
    componentDidMount = async () => {
        this.props.tournamentInitialization()
    }

    render() {
        return (
            <div>
                <h1>tournaMINT</h1>
                <TournamentList />
            </div>
        );
    }
}

export default connect(
    null,
    { tournamentInitialization }
)(App)
