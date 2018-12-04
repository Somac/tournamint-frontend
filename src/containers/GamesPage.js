import React, { Component } from 'react'
import { getGames } from '../reducers/gameReducer'
import { connect } from 'react-redux'
import { postGame } from './../reducers/gameReducer'
import CardBox from '../components/CardBox'
import Togglable from '../components/Togglable'
import GameForm from '../forms/GameForm'

class GamesPage extends Component {
  componentDidMount = async () => {
    document.title = 'tournamint - Pelit'
    await this.props.getGames()
  }

  addGame = (values) => {
    this.props.postGame(values)
  }

  render() {
    return (
      <div>
        <h2 className='text-center my-5'>Pelit</h2>
        <Togglable label='Lisää uusi peli' cancelLabel='x'>
          <div className='box'>
            <GameForm onSubmit={this.addGame} />
          </div>
        </Togglable>
        <div className='row justify-content-center'>
          {this.props.games.map(x =>
            <CardBox
              key={x._id}
              text=''
              name={x.name}
              link={`/games/${x._id}`}
            />
          )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}

export default connect(
  mapStateToProps,
  { getGames, postGame }
)(GamesPage)
