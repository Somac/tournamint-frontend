import React from 'react'
import FormGroup from '../components/FormGroup'
import { reduxForm } from 'redux-form'

let GameForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup
                name='name'
                label='Pelin nimi'
                type='text'
                component='input'
            />
            <button className='btn btn-primary'>Tallenna</button>
        </form>
    )
}

export default GameForm = reduxForm({
    form: 'game'
})(GameForm)
