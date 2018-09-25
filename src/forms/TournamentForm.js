import React from 'react'
import FormGroup from '../components/FormGroup'
import { reduxForm, Field } from 'redux-form';

let TournamentForm = (props) => {
    const { handleSubmit, leagues } = props
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup
                name='name'
                label='Turnauksen nimi'
                type='text'
                component='input'
            />
            <FormGroup
                name='rounds'
                label='Kierroksia'
                type='number'
                component='input'
            />
            <div className='form-group'>
                <label htmlFor='league'>Liiga</label>
                <Field component='select' className="form-control" name='league'>  
                    <option>Valitse liiga</option>
                    {leagues.map(league => <option key={league._id} value={league._id}>{league.name}</option>)}
                </Field>
            </div>
            <button className='btn btn-primary'>Tallenna</button>
        </form>
    )
}

export default TournamentForm = reduxForm({
    form: 'tournament'
})(TournamentForm)
