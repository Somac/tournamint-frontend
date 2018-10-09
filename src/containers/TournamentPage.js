import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneTournament } from '../reducers/tournamentReducer'
import { getTournamentMatches } from '../reducers/tournamentMatchReducer'
import { initFilter } from '../reducers/matchFilterReducer'
import InfoContainer from '../components/InfoContainer'
import TeamList from '../components/TeamList'
import MatchList from '../components/MatchList'
import Loading from '../components/Loading'

class TournamentPage extends Component {
    state = {
        componentDidMount: false
    }

    componentDidMount = async () => {
        const slug = this.props.tournamentSlug
        await this.props.getOneTournament(slug)
        await this.props.getTournamentMatches(slug)
        await this.props.initFilter()
        this.setState({ componentDidMount: true })
        this.forceUpdate()
    }

    render() {
        const { tournaments, tournamentMatches, filter } = this.props
        const tournament = tournaments.find(tournament => tournament.slug === this.props.tournamentSlug)
        const noTournament = () => (
            <div>Turnausta ei löytynyt</div>
        )
        const yesTournament = () => {
            const d = new Date(tournament.createdAt)
            const createdDate = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} klo ${d.getHours()}:${(d.getMinutes() < 10 ? '0' : '')}${d.getMinutes()}:${(d.getSeconds() < 10 ? '0' : '')}${d.getSeconds()}`
            const gamesPlayed =
                tournamentMatches.filter(({ completed }) => completed === true).length
            return (
                <React.Fragment>
                    <h2 className='text-center mt-5'>{tournament.name}</h2>
                    <p className='text-center mb-5'><small>Luotu: {createdDate}</small></p>
                    <p className='text-center'>{tournament.description}</p>
                    <InfoContainer
                        header={'Turnaus info'}
                        rows={[
                            { head: 'Luotu', value: createdDate },
                            { head: 'Joukkueita', value: `${tournament.teams.length} joukkuetta` },
                            { head: 'Otteluita pelattu', value: `${gamesPlayed} / ${tournamentMatches.length}` },
                            { head: 'Kierroksia', value: tournament.rounds },
                            { head: 'Playoff-viiva', value: tournament.toAdvance }
                        ]}
                    />
                    <TeamList teams={tournament.teams} />
                    <MatchList matches={tournamentMatches} rounds={tournament.rounds} teams={tournament.teams} />
                </React.Fragment>
            )
        }
        if (this.state.componentDidMount) {
            return (
                <React.Fragment>
                    {tournament ?
                        yesTournament() :
                        noTournament()
                    }
                </React.Fragment>
            )
        }
        return <Loading />
    }
}

const matchesToShow = (matches, filterState) => {
    const { filter, team } = filterState
    if (filter === 'ALL') {
        if (team === 'ALL') {
            return matches
        }
        const homeMatches = matches.filter(match => match.homeTeam._id === team)
        const awayMatches = matches.filter(match => match.awayTeam._id === team)
        return [...homeMatches, ...awayMatches]
    } else if (filter === 'COMPLETED') {
        const completedMatches = matches.filter(match => match.completed === true)
        if (team === 'ALL') {
            return completedMatches
        }
        const homeMatches = completedMatches.filter(match => match.homeTeam._id === team)
        const awayMatches = completedMatches.filter(match => match.awayTeam._id === team)
        return [...homeMatches, ...awayMatches]
    } else if (filter === 'NOT_COMPLETED') {
        const incompleteMatches = matches.filter(match => match.completed !== true)
        if (team === 'ALL') {
            return incompleteMatches
        }
        const homeMatches = incompleteMatches.filter(match => match.homeTeam._id === team)
        const awayMatches = incompleteMatches.filter(match => match.awayTeam._id === team)
        return [...homeMatches, ...awayMatches]
    }
    return []
}

const mapStateToProps = (state, props) => {
    console.log(state)
    return {
        tournaments: state.tournaments,
        tournamentMatches: matchesToShow(state.tournamentMatches, state.matchFilters),
        filter: state.matchFilters
    }
}

export default connect(
    mapStateToProps,
    { getOneTournament, getTournamentMatches, initFilter }
)(TournamentPage)
