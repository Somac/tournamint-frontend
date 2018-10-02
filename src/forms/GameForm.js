import React from 'react'
import FormGroup from '../components/FormGroup'
import { Field, reduxForm } from 'redux-form'

let GameForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name='name' type='text' component={FormGroup} label='Pelin nimi'/>
            <button className='btn btn-primary'>Tallenna</button>
        </form>
    )
}

export default GameForm = reduxForm({
    form: 'game'
})(GameForm)
