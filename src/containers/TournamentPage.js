import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneTournament } from '../reducers/tournamentReducer'
import InfoContainer from '../components/InfoContainer'
import TeamList from '../components/TeamList'
import MatchList from '../components/MatchList'

class TournamentPage extends Component {
    componentDidMount = async () => {
        const slug = this.props.tournamentSlug
        await this.props.getOneTournament(slug)
    }


    render() {
        const { tournament } = this.props
        const noTournament = () => (
            <div>Turnausta ei löytynyt</div>
        )
        const yesTournament = () => {
            const d = new Date(tournament.createdAt)
            const createdDate = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} klo ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
            const gamesPlayed =
                tournament.matches.filter(({ completed }) => completed === true).length
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
                            { head: 'Otteluita pelattu', value: `${gamesPlayed} / ${tournament.matches.length}` }
                        ]}
                    />
                    <TeamList teams={tournament.teams} />
                    <MatchList matches={tournament.matches} />
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                {tournament.name ?
                    yesTournament() :
                    noTournament()
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tournament: state.tournaments
    }
}

export default connect(
    mapStateToProps,
    { getOneTournament }
)(TournamentPage)
