import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayers } from '../reducers/playerReducer'
import Loading from '../components/Loading'
import PlayerSmallBox from '../components/PlayerSmallBox'
import LinkButton from '../components/LinkButton'


class PlayersPage extends Component {
  state = {
    search: '',
    cdm: false
  }
  componentDidMount = async () => {
    document.title = 'tournamint - Players'
    await this.props.getPlayers()
    console.log(this.props.players)
    this.setState({ cdm: true })
  }

  handleSearch = (event) => {
    this.setState({ ...this.state, search: event.target.value })
  }

  render() {
    const { players } = this.props
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(this.state.search.toLowerCase()))
    if (this.state.cdm) {
      return (
        <React.Fragment>
          <h2 className='text-center my-5'>Players</h2>
          <div className='form-group search-input mx-auto d-flex'>
            <input placeholder="Search" type='text' className='form-control' onChange={this.handleSearch}></input>
          </div>
          <LinkButton link='/new/player' text='Add new' />
          <div className='row'>
            {filteredPlayers
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

const playersToShow = (players, filterState, sortState) => {

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
