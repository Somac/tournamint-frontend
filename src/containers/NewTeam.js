import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTeam } from '../reducers/teamReducer'
import { getLeagues } from '../reducers/leagueReducer'
import TeamForm from '../forms/TeamForm'
import { Redirect } from 'react-router'
import Loading from '../components/Loading'

class NewTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      rendering: true,
      selectedLeague: '',
      apiUrl: null
    }
  }

  componentDidMount = async () => {
    document.title = 'tournamint - Lisää joukkue'
    await this.props.getLeagues()
    this.setState({ rendering: false })
  }

  addTeam = async (values) => {
    let formData = new FormData()
    formData.append('name', values.name)
    formData.append('shortHand', values.shortHand)
    formData.append('logo', values.logo)
    formData.append('description', values.description)
    formData.append('gamerName', values.gamerName)
    formData.append('apiId', values.apiId)
    formData.append('league', values.league)
    formData.append('apiForPlayers', values.apiForPlayers)
    await this.props.addTeam(formData)
    await this.setState({ redirect: true })
  }

  isUrl = (url) => {
    var matcher = /^(?:\w+:)?\/\/([^\s]+\.\S{2}|localhost[?\d]*)\S*$/
    return matcher.test(url)
  }

  leagueChange = (league) => {
    const selectedLeague = this.props.leagues.find(({ _id }) => _id === league)
    let apiUrl = null
    if (this.isUrl(selectedLeague.apiUrlTeams)) {
      apiUrl = selectedLeague.apiUrlTeams
    }
    this.setState({ selectedLeague, apiUrl })
  }

  render() {
    if (this.state.rendering) {
      return <Loading />
    }
    if (this.state.redirect) {
      return <Redirect to='/teams' />
    }
    return (
      <div>
        <h2 className='text-center my-5'>Add new team</h2>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-6 box'>
            <h1>Add new team</h1>
            <TeamForm
              onSubmit={this.addTeam}
              leagues={this.props.leagues}
              leagueChange={this.leagueChange}
              apiUrl={this.state.apiUrl}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    leagues: state.leagues
  }
}

export default connect(
  mapStateToProps,
  { addTeam, getLeagues }
)(NewTeam)
