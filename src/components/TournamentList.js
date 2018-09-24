import React from 'react'
import { connect } from 'react-redux'
import Tournament from './Tournament'
import { Link } from 'react-router-dom';

const TournamentList = (props) => (
    <div>
        <h2 className='text-center'>Turnaukset</h2>
        <Link to='/new/tournament'>Lisää uusi</Link>
        <div className='row'>
            {props.tournaments.map(tournament =>
                <Tournament key={tournament.id} tournament={tournament} />
            )}
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        tournaments: state.tournaments
    }
}

export default connect(
    mapStateToProps,
)(TournamentList)