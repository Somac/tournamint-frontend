import React, { Component } from 'react';
import { tournamentInitialization } from './reducers/tournamentReducer'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FrontPage from './containers/FrontPage'
import TournamentPage from './containers/TournamentPage'
import TournamentsPage from './containers/TournamentsPage'
import NewTournament from './containers/NewTournament'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import LeaguesPage from './containers/LeaguesPage'
import NewLeague from './containers/NewLeague'
import GamesPage from './containers/GamesPage'
import GamePage from './containers/GamePage'
import LoginPage from './containers/LoginPage'

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
                        <Route exact path="/tournaments/:slug" render={({ match }) => <TournamentPage tournament={tournamentBySlug(match.params.slug)} />} />
                        <Route exact path="/new/tournament" render={() => <NewTournament />} />
                        <Route exact path='/leagues' render={() => <LeaguesPage />} />
                        <Route exact path='/new/league' render={() => <NewLeague />} />
                        <Route exact path='/games' render={() => <GamesPage />} />
                        <Route exact path='/login' render={() => <LoginPage />} />
                        <Route exact path='/games/:id' render={({ match }) => <GamePage gameId={match.params.id} />} />
                    </div>
                    <Footer />
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
