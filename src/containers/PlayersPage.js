import React, { Component } from 'react'
import { connect } from 'react-redux'

class PlayersPage extends Component {
    componentDidMount = async () => {
        await this.props.getTeams()
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

export default PlayersPage
