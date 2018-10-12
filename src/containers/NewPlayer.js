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

    addPlayer = async (values) => {
        await this.props.addPlayer(values)
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={`/`} />
            )
        }
        return (
            <React.Fragment>
                <h2 className='text-center my-5'>Lisää uusi Pelaaja</h2>
                <div className='row d-flex justify-content-center mb-5'>
                    <div className='col-6 box'>
                        <PlayerForm onSubmit={this.addPlayer} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        player: state.player
    }
}

export default connect(
    mapStateToProps,
    { addPlayer }
)(NewPlayer)
