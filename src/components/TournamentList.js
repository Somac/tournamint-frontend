import React from 'react'
import { connect } from 'react-redux'
import Tournament from './Tournament'

const TournamentList = (props) => (
    <div>
        <h2>Tournament list</h2>
        {props.tournaments.map(tournament =>
            <Tournament key={tournament.id} tournament={tournament}/>    
        )}
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