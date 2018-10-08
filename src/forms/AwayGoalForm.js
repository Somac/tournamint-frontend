import React from 'react'
import FormGroupSelect from './formComponents/FormGroupSelect'
import { Field, reduxForm, reset } from 'redux-form'

const afterSubmit = (result, dispatch) => {
    dispatch(reset('awaygoal'))
}

let GoalForm = (props) => {
    const { handleSubmit, players } = props
    const sortedPlayers = players.sort((a, b) => a.jerseyNumber - b.jerseyNumber)
    const optionsTest = sortedPlayers.map(player => { return { value: player._id, name: `#${player.jerseyNumber} - ${player.name}` } })
    return (
        <form onSubmit={handleSubmit}>
            <Field name='scorer' component={FormGroupSelect} label='Maalintekijä' options={optionsTest} />
            <Field name='firstAssist' component={FormGroupSelect} label='1. syöttäjä' options={optionsTest} />
            <Field name='secondAssist' component={FormGroupSelect} label='2. syöttäjä' options={optionsTest} />
            <button className='btn btn-primary'>Tallenna</button>
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

export default GoalForm = reduxForm({
    form: 'awaygoal',
    onSubmitSuccess: afterSubmit,
}, mapStateToProps)(GoalForm)
