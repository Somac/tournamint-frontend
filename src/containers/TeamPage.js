import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneTeam } from '../reducers/teamReducer'
import PlayerBox from '../components/PlayerBox'
import InfoContainer from '../components/InfoContainer'
import Loading from '../components/Loading'
import ReactTable from 'react-table'
import CardBox from '../components/CardBox'
import { apiUrl } from '../config'
import TogglableNoActions from '../components/TogglableNoActions';

class TeamPage extends Component {
  state = {
    team: {},
    players: [],
    tournaments: [],
    matches: [],
    reactPlayerArray: [],
    isVisible: 0,
    cdm: false,
  }
  componentDidMount = async () => {
    const slug = this.props.teamSlug
    await this.props.getOneTeam(slug)

    const { team } = this.props
    document.title = `tournamint - ${team.name}`
    const { players, tournaments, matches } = team

    const gamesPlayed = matches.filter(({ completed }) => completed === true).length

    const reactPlayerArray = players.map(player => {
      const goals = player.goals.length
      const assists = player.assists.length
      const points = goals + assists
      return {
        jersey: player.jerseyNumber,
        position: player.position,
        name: player.name,
        gp: gamesPlayed,
        g: goals,
        a: assists,
        p: points
      }
    })

    this.setState({
      team,
      players,
      tournaments,
      matches,
      reactPlayerArray,
      isVisible: 0,
      cdm: true,
    })
  }

  makeVisible = (id) => this.setState({ visiblePage: id })

  isVisible = (id) => id === this.state.visiblePage ? true : false

  render() {
    const { team, players, tournaments, reactPlayerArray } = this.state
    const reactColumns = [
      { Header: '#', accessor: 'jersey' },
      { Header: 'POS', accessor: 'position' },
      { Header: 'Nimi', accessor: 'name' },
      { Header: 'GP', accessor: 'gp' },
      { Header: 'G', accessor: 'g' },
      { Header: 'A', accessor: 'a' },
      { Header: 'P', accessor: 'p' }
    ]
    const defaultSort = [
      {
        id: 'p',
        desc: true
      }
    ]
    const buttons = [
      { name: 'Info', id: 0 },
      { name: 'Players', id: 3 },
      { name: 'Statistics', id: 1 },
      { name: 'Tournaments', id: 2 },
    ]
    if (this.state.cdm) {
      return (
        <React.Fragment>
          <img className="mx-auto mt-5 d-flex team-img" src={`${apiUrl}/${team.logo}`} alt={team.shortHand}></img>
          <h2 className='text-center mb-5 mt-3'>{team.name}</h2>
          <div className="mx-auto d-flex justify-content-center">
            {buttons ? buttons.map(link => {
              const buttonClass = this.state.visiblePage === link.id ? 'btn-primary' : 'btn-light'
              return <button key={link.id} className={`btn mx-1 my-3 ${buttonClass}`} onClick={() => this.makeVisible(link.id)}>{link.name}</button>
            }) : ''}
          </div >
          <TogglableNoActions visible={this.isVisible(0)}>
            <h2 className='text-center mt-5'>Team info</h2>
            <InfoContainer
              rows={[
                { head: 'Name', value: team.name },
                { head: 'Short hand', value: team.shortHand },
                { head: 'Description', value: team.description },
                { head: 'Gamer', value: team.gamerName },
                { head: 'Tournaments involved in', value: team.tournaments.length },
                { head: 'Player amount', value: team.players.length },
              ]}
            />
          </TogglableNoActions>
          <TogglableNoActions visible={this.isVisible(1)}>
            <h2 className='text-center my-5'>Team statistics</h2>
            <ReactTable
              data={reactPlayerArray}
              columns={reactColumns}
              defaultPageSize={10}
              defaultSorted={defaultSort}
            />
          </TogglableNoActions>
          <TogglableNoActions visible={this.isVisible(2)}>
            <h2 className='text-center my-5'>Tournaments</h2>
            <div className='row justify-content-center'>
              {tournaments.map(tournament => {
                return (
                  <CardBox
                    key={tournament._id}
                    text={tournament.description}
                    name={tournament.name}
                    link={`/tournaments/${tournament.slug}`}
                    size='2'
                  />)
              })}
            </div>
          </TogglableNoActions>
          <TogglableNoActions visible={this.isVisible(3)}>
            <h2 className='text-center my-5'>Players</h2>
            <div className='row'>
              {players
                .sort((a, b) => {
                  if (a.name < b.name) return -1
                  if (a.name > b.name) return 1
                  return 0
                })
                .map(player => <PlayerBox key={player._id} player={player} />)
              }
            </div>
          </TogglableNoActions>
        </React.Fragment>
      )
    }
    return <Loading />
  }
}
const mapStateToProps = (state) => {
  return {
    team: state.teams
  }
}

export default connect(
  mapStateToProps,
  { getOneTeam }
)(TeamPage)
