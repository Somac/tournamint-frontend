import React from 'react'
import { connect } from 'react-redux'
import { getTournaments } from '../reducers/tournamentReducer'
import CardBox from '../components/CardBox'
import LinkButton from '../components/LinkButton'

class TournamentsPage extends React.Component {
    componentDidMount = async () => {
        await this.props.getTournaments()
    }

    render() {
        return (
            <div>
                <h2 className='text-center my-5'>Turnaukset</h2>
                <LinkButton link='/new/tournament' text='Lisää uusi' />
                <div className='row'>
                    {Array.isArray(this.props.tournaments) ?
                        this.props.tournaments.map(tournament =>
                        <CardBox
                            key={tournament.id}
                            text={tournament.description}
                            name={tournament.name}
                            link={`/tournaments/${tournament.slug}`} />) :
                        <h1>Turnauksia ei löytynyt</h1>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tournaments: state.tournaments
    }
}

export default connect(
    mapStateToProps,
    { getTournaments }
)(TournamentsPage)
