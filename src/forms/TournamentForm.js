import React from 'react'
import FormGroup from '../components/FormGroup'
import { reduxForm, Field } from 'redux-form';
import FormGroupTextArea from '../components/FormGroupTextArea';
import FormGroupSelect from '../components/FormGroupSelect';

let TournamentForm = (props) => {
    const { handleSubmit, leagues } = props
    const leagueOptions = leagues.map(league => { return { value: league._id, name: league.name } })
    return (
        <form onSubmit={handleSubmit}>
            <Field name='name' type='text' component={FormGroup} label='Turnauksen nimi' />
            <Field name='description' component={FormGroupTextArea} className='form-control' label='Kuvaus' />
            <Field name='league' component={FormGroupSelect} label='Liiga' options={leagueOptions} />
            <button className='btn btn-primary'>Tallenna</button>
        </form>
    )
}

export default TournamentForm = reduxForm({
    form: 'tournament'
})(TournamentForm)
