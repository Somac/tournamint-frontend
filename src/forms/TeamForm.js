import React from 'react'
import FormGroup from '../components/FormGroup'
import FormGroupSelect from '../components/FormGroupSelect'
import { reduxForm } from 'redux-form'

let TeamForm = (props) => {
    const { handleSubmit, leagues, tournaments, players } = props
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup
                name='name'
                label='Joukkueen nimi'
                type='text'
                component='input'
            />
            <FormGroupSelect
                name='league'
                label='Liiga'
                options={leagues}
            />
            <FormGroupSelect
                name='tournaments'
                label='Turnaukset'
                options={tournaments}
            />
            <FormGroupSelect
                name='players'
                label='Pelaajat'
                options={players}
            />
            <button className='btn btn-primary'>Tallenna</button>
        </form>
    )
}

export default TeamForm = reduxForm({
    form: 'team'
})(TeamForm)
