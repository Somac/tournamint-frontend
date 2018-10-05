import React from 'react'
import FormGroupSelect from './formComponents/FormGroupSelect'
import { Field, reduxForm } from 'redux-form'

let GoalForm = (props) => {
    const { handleSubmit, players } = props
    const sortedPlayers = players.sort((a, b) => a.jerseyNumber - b.jerseyNumber)
    const optionsTest = sortedPlayers.map(player => { return { value: player._id, name: `#${player.jerseyNumber} - ${player.name}` } })
    return (
        <form onSubmit={handleSubmit}>
            <Field name='scorer' component={FormGroupSelect} label='Maalintekijä' options={optionsTest} />
            <Field name='first' component={FormGroupSelect} label='1. syöttäjä' options={optionsTest} />
            <Field name='second' component={FormGroupSelect} label='2. syöttäjä' options={optionsTest} />
            <button className='btn btn-primary'>Tallenna</button>
        </form>
    )
}

export default GoalForm = reduxForm({
    form: 'goal'
})(GoalForm)
