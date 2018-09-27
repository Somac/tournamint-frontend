import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneTournament } from '../reducers/tournamentReducer'
import InfoContainer from '../components/InfoContainer'

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
            const createdDate = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()} klo ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
            return (
                <div>
                    <h2 className='text-center mt-5'>{tournament.name}</h2>
                    <p className='text-center mb-5'><small>Luotu: {createdDate}</small></p>
                    <p className='text-center'>{tournament.description}</p>
                    <InfoContainer header={'testi'} rows={[{ head: 'test', value: 'test' }, { head: 'test2', value: 'test2' }]} />
                </div>
            )
        }
        return (
            <React.Fragment>
                {tournament === [] ?
                    noTournament() :
                    yesTournament()
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
