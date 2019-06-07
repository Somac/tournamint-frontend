import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import FormGroupSelect from './formComponents/FormGroupSelect'
import FormGroup from './formComponents/FormGroup'
import FormGroupTextArea from './formComponents/FormGroupTextArea'
import FormGroupFileInput from './formComponents/FormGroupFileInput'
import FormGroupCheckbox from './formComponents/FormGroupCheckbox'
import ApiSelect from './formComponents/ApiSelect'
import { connect } from 'react-redux'

let TeamForm = (props) => {
  const { handleSubmit, leagues, leagueChange, apiUrl } = props
  const leagueOptions = leagues.map(league => { return { value: league._id, name: league.name } })
  const onLeagueChange = (event, newLeague) => {
    leagueChange(newLeague)
  }
  const onApiChange = (team) => {
    props.change('apiId', team.id)
    props.change('name', team.name)
    props.change('shortHand', team.abbreviation)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name='league'
        component={FormGroupSelect}
        label='League'
        options={leagueOptions}
        onChange={onLeagueChange}
      />
      <ApiSelect apiUrl={apiUrl} updatedValue={onApiChange} />
      <Field
        name='name'
        type='text'
        component={FormGroup}
        label='Name'
      />
      <Field
        name='apiId'
        type='number'
        component={FormGroup}
        label='API ID'
      />
      <Field
        name='logo'
        component={FormGroupFileInput}
        label='Logo'
      />
      <Field
        name='description'
        component={FormGroupTextArea}
        label='Description'
      />
      <Field
        name='shortHand'
        type='text'
        component={FormGroup}
        label='Abbrevation'
      />
      <Field
        name='gamerName'
        type='text'
        component={FormGroup}
        label='Players name'
      />
      {apiUrl ?
        <Field
          name='apiForPlayers'
          component={FormGroupCheckbox}
          label='Add players automatically through API'
        /> : ''
      }
      <button className='btn btn-primary'>Save</button>
    </form>
  )
}

TeamForm = reduxForm({
  form: 'team'
})(TeamForm)

const selector = formValueSelector('team')
TeamForm = connect(
  state => {
    const selectedLeague = selector(state, 'league')
    return { selectedLeague }
  }
)(TeamForm)

export default TeamForm
