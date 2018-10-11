import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../reducers/playerReducer'
import PlayerForm from '../forms/PlayerForm'
import { Redirect } from 'react-router'

class NewPlayer extends Component {
    state = {
        redirect: false,
        playerId: null
    }
    componentDidMount = async () => {
        await this.props.getGames()
    }

    addPlayer = async (values) => {
        await this.props.addPlayer(values)
        await this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={`/players/${this.state.playerId}`} />
            )
        }
        return (
            <React.Fragment>
                <h2 className='text-center my-5'>Lisää uusi Pelaaja</h2>
                <div className='row d-flex justify-content-center'>
                    <div className='col-6 box'>
                        <PlayerForm onSubmit={this.addPlayer} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(
    null,
    { addPlayer }
)(NewPlayer)