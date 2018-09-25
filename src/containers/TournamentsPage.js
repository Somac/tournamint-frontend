import React from 'react'
import { connect } from 'react-redux'
import CardBox from '../components/CardBox'
import LinkButton from '../components/LinkButton'

const TournamentsPage = (props) => {
    return (
        <div>
            <h2 className='text-center my-5'>Turnaukset</h2>
            <LinkButton link='/new/tournament' text='Lisää uusi' />
            <div className='row'>
                {props.tournaments.map(tournament =>
                    <CardBox
                        key={tournament.id}
                        text={tournament.description}
                        name={tournament.name}
                        link={`/tournaments/${tournament.slug}`} />
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tournaments: state.tournaments
    }
}

export default connect(
    mapStateToProps,
)(TournamentsPage)
