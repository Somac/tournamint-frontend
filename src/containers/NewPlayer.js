import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../reducers/playerReducer'
import PlayerForm from '../forms/PlayerForm'
import { Redirect } from 'react-router'


class NewPlayer extends Component {
  state = {
    redirect: false,
    playerId: null,
  }

  addPlayer = async (values) => {
    document.title = 'tournamint - Lisää pelaaja'
    await this.props.addPlayer(values)
    this.setState({ playerId: this.props.players._id, redirect: true })
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
    players: state.players
  }
}

export default connect(
  mapStateToProps,
  { addPlayer }
)(NewPlayer)
