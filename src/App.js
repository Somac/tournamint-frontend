import React, { Component } from 'react';
import { tournamentInitialization } from './reducers/tournamentReducer'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FrontPage from './containers/FrontPage'
import TournamentPage from './containers/TournamentPage'
import TournamentsPage from './containers/TournamentsPage'
import NewTournament from './containers/NewTournament'
import MainMenu from './containers/MainMenu'

class App extends Component {
    componentDidMount = async () => {
        this.props.tournamentInitialization()
    }

    render() {
        const tournamentBySlug = (slug) => {
            return this.props.tournaments.find(tournament => tournament.slug === slug)
        }
        return (
            <Router>
                <div>
                    <MainMenu />
                    <div className='container'>
                        <Route exact path="/" render={() => <FrontPage />} />
                        <Route exact path="/tournaments" render={() => <TournamentsPage />} />
                        <Route exact path="/tournaments/:slug" render={({match}) => <TournamentPage tournament={tournamentBySlug(match.params.slug)}/>} />
                        <Route exact path="/new/tournament" render={() => <NewTournament />} />
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tournaments: state.tournaments
    }
}

export default connect(
    mapStateToProps,
    { tournamentInitialization }
)(App)
