import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOnePlayer } from '../reducers/playerReducer'
import playerService from '../services/players'

class PlayerPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            externalInfo: []
        }
    }

    componentDidMount = async () => {
        const id = this.props.playerId
        await this.props.getOnePlayer(id)
        const externalInfo = await playerService.getExternalInfo(this.props.players.apiId, this.props.players.team.league.apiUrlPlayers)
        this.setState({ externalInfo })
    }

    render() {
        const { players } = this.props
        const img = `https://nhl.bamcontent.com/images/headshots/current/168x168/${players.apiId}.jpg`
        const onError = 'https://nhl.bamcontent.com/images/headshots/current/168x168/skater.jpg'
        console.log(players)
        console.log(this.state.externalInfo)
        return (
            <div>
                <img className='mx-auto d-flex rounded-circle my-5' onError={(e) => e.target.src = onError} src={img} alt={players.name} />
                <h1 className='text-center'>{players.name}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

export default connect(
    mapStateToProps,
    { getOnePlayer }
)(PlayerPage)