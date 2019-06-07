import React from 'react'
import { connect } from 'react-redux'
import { getTeams } from '../reducers/teamReducer'
import FormGroup from './formComponents/FormGroup'
import { reduxForm, Field } from 'redux-form'
import FormGroupSelect from './formComponents/FormGroupSelect'
import Loading from '../components/Loading'

class PlayerForm extends React.Component {
  state = {
    cdm: false
  }
  componentDidMount = async () => {
    await this.props.getTeams()
    this.setState({ cdm: true })
  }

  render() {
    if (!this.state.cdm) {
      return (
        <Loading />
      )
    }
    const { handleSubmit, teams } = this.props
    //TODO kovakoodi pois
    const positionOptions = [
      { value: 'G', name: 'Goalie' },
      { value: 'RW', name: 'Right Wing' },
      { value: 'C', name: 'Center' },
      { value: 'LW', name: 'Left Wing' },
      { value: 'W', name: 'Winger' },
      { value: 'D', name: 'Defenseman' },
      { value: 'LD', name: 'Left defenseman' },
      { value: 'RD', name: 'Right defenseman' }
    ]
    const teamOptions = teams.map(team => ({ value: team.id, name: team.name }))
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name='name'
          label='Player name'
          type='text'
          component={FormGroup} />
        <Field
          name='jerseyNumber'
          label='Jersey number'
          type='number'
          component={FormGroup} />
        <Field
          name='position'
          label='Position'
          component={FormGroupSelect}
          options={positionOptions} />
        <Field
          name='team'
          label='Team'
          component={FormGroupSelect}
          options={teamOptions} />
        <Field
          name='apiId'
          label='Players API id'
          type='number'
          component={FormGroup} />
        <button className='btn btn-primary'>Save</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams
  }
}

PlayerForm = connect(
  mapStateToProps,
  { getTeams }
)(PlayerForm)

export default reduxForm({
  form: 'player'
})(PlayerForm)
