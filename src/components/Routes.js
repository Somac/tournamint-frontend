import React, { Component } from 'react';
import FrontPage from '../containers/FrontPage'
import TournamentPage from '../containers/TournamentPage'
import TournamentsPage from '../containers/TournamentsPage'
import NewTournament from '../containers/NewTournament'
import LeaguesPage from '../containers/LeaguesPage'
import NewLeague from '../containers/NewLeague'
import GamesPage from '../containers/GamesPage'
import GamePage from '../containers/GamePage'
import LoginPage from '../containers/LoginPage'
import TeamsPage from '../containers/TeamsPage'
import NewTeam from '../containers/NewTeam'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound'
import TeamPage from '../containers/TeamPage'
import LeaguePage from '../containers/LeaguePage'
import Logout from '../containers/Logout'
import { Route, Switch } from 'react-router-dom'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <FrontPage />} />
                <Route exact path="/tournaments" render={() => <TournamentsPage />} />
                <Route exact path="/tournaments/:slug" render={({ match }) => <TournamentPage tournamentSlug={(match.params.slug)} />} />
                <Route exact path="/new/tournament" render={() => <NewTournament />} />
                <Route exact path='/leagues' render={() => <LeaguesPage />} />
                <Route exact path='/new/league' render={() => <NewLeague />} />
                <Route exact path='/games' render={() => <GamesPage />} />
                <Route exact path='/login' render={() => <LoginPage />} />
                <Route exact path='/games/:id' render={({ match }) => <GamePage gameId={match.params.id} />} />
                <Route exact path='/teams' render={() => <TeamsPage />} />
                <Route exact path='/new/team' render={() => <NewTeam />} />
                <Route exact path='/register' render={() => <Register />} />
                <Route exact path='/teams/:slug' render={({ match }) => <TeamPage teamSlug={match.params.slug} />} />
                <Route exact path='/leagues/:id' render={({ match }) => <LeaguePage leagueId={match.params.id} />} />
                <Route exact path='/logout' render={() => <Logout />} />
                <Route render={() => <NotFound />} />
            </Switch>
        );
    }
}

export default Routes;