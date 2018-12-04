import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayers } from '../reducers/playerReducer'
import Loading from '../components/Loading'
import PlayerSmallBox from '../components/PlayerSmallBox'
import LinkButton from '../components/LinkButton'

class PlayersPage extends Component {
  state = {
    cdm: false
  }
  componentDidMount = async () => {
    document.title = 'tournamint - Pelaajat'
    await this.props.getPlayers()
    this.setState({ cdm: true })
  }
  render() {
    const { players } = this.props
    if (this.state.cdm) {
      return (
        <React.Fragment>
          <h2 className='text-center my-5'>Pelaajat</h2>
          <LinkButton link='/new/player' text='Lisää uusi' />
          <div className='row'>
            {players
              .sort((a, b) => {
                if (a.name < b.name) return -1
                if (a.name > b.name) return 1
                return 0
              })
              .map(player => <PlayerSmallBox key={player._id} player={player} />)
            }
          </div>
        </React.Fragment>
      )
    }
    return (<Loading />)
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

export default connect(
  mapStateToProps,
  { getPlayers }
)(PlayersPage)
