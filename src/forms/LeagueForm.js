import React from 'react'
import FormGroup from '../components/FormGroup'
import { reduxForm, Field } from 'redux-form'

let LeagueForm = (props) => {
    const { handleSubmit, games } = props
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup
                name='name'
                label='Liigan nimi *'
                type='text'
                component='input'
            />
            <FormGroup
                name='apiUrlTeams'
                label='API Url joukkue'
                type='text'
                component='input'
            />
            <FormGroup
                name='apiUrlPlayers'
                label='API Url pelaajat'
                type='text'
                component='input'
            />
            <div className='form-group'>
                <label htmlFor='game'>Peli</label>
                <Field component='select' className="form-control" name='game'>
                    <option>Valitse peli</option>
                    {games.map(game => <option key={game._id} value={game._id}>{game.name}</option>)}
                </Field>
            </div>
            <button className='btn btn-primary'>Tallenna</button>
        </form>
    )
}

export default LeagueForm = reduxForm({
    form: 'league'
})(LeagueForm)