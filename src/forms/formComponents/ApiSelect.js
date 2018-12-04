import React, { Component } from 'react'
import leagueService from '../../services/leagues'
import FormGroupSelect from './FormGroupSelect'
import { Field } from 'redux-form'

class ApiSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      externalTeams: [],
      teams: [],
      selectedTeam: {}
    }
  }

  componentDidUpdate = async (prevProps) => {
    if (this.props.apiUrl && prevProps.apiUrl !== this.props.apiUrl) {
      const getTeams = await leagueService.getExternalTeams(this.props.apiUrl)
      if (JSON.stringify(this.state.teams) !== JSON.stringify(getTeams.teams)) {
        const externalTeams = getTeams.teams.map(team => {
          return { value: team.id, name: team.name }
        }).sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        })
        this.setState({ externalTeams, teams: getTeams.teams })
      }
    }
  }

  updateField = (event, newTeam) => {
    const selectedTeam = this.state.teams.find(team => team.id === Number(newTeam))
    this.props.updatedValue(selectedTeam)
  }

  render() {
    const { apiUrl } = this.props
    if (apiUrl) {
      return (
        <Field
          name='apiTeam'
          component={FormGroupSelect}
          label='Joukkueet haettu'
          options={this.state.externalTeams}
          onChange={this.updateField}
        />
      )
    }
    return <React.Fragment></React.Fragment>
  }
}

export default ApiSelect
