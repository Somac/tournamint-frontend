import React from 'react'
import FormGroupSelect from './formComponents/FormGroupSelect'
import { Field, reduxForm, reset, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

const afterSubmit = (result, dispatch) => {
  dispatch(reset('homegoal'))
}

let HomeGoalForm = (props) => {
  const { handleSubmit, players, scorer, firstAssist } = props
  const sortedPlayers = players.sort((a, b) => a.jerseyNumber - b.jerseyNumber)
  const scorers = sortedPlayers.map(player => { return { value: player._id, name: `#${player.jerseyNumber} - ${player.name}`, disabled: false } })
  const assisters = scorers.map(assister => assister.value === scorer ? { ...assister, disabled: true } : assister)
  const secondAssister = assisters.map(assister => assister.value === firstAssist ? { ...assister, disabled: true } : assister)
  return (
    <form onSubmit={handleSubmit}>
      <Field name='scorer' component={FormGroupSelect} label='Scorer' options={scorers} />
      {scorer === undefined || scorer === 'null' ? '' :
        <Field name='firstAssist' component={FormGroupSelect} label='First assist' options={assisters} />}
      {firstAssist === undefined || firstAssist === 'null' ? '' :
        <Field name='secondAssist' component={FormGroupSelect} label='Second assist' options={secondAssister} />}
      <button className='btn btn-primary'>Save</button>
    </form>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      homeTeam: ownProps.homeTeam || false,
      awayTeam: ownProps.awayTeam || false
    }
  }
}


HomeGoalForm = reduxForm({
  form: 'homegoal',
  onSubmitSuccess: afterSubmit,
}, mapStateToProps)(HomeGoalForm)

const selector = formValueSelector('homegoal')
HomeGoalForm = connect(
  state => {
    const scorer = selector(state, 'scorer')
    const firstAssist = selector(state, 'firstAssist')
    return { scorer, firstAssist }
  }
)(HomeGoalForm)

export default HomeGoalForm
