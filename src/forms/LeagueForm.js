import React from 'react'
import FormGroup from './formComponents/FormGroup'
import { reduxForm, Field } from 'redux-form'

let LeagueForm = (props) => {
  const { handleSubmit, games } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name='name'
        label='League name *'
        type='text'
        component={FormGroup} />
      <Field
        name='apiUrlTeams'
        label='API Url team'
        type='text'
        component={FormGroup} />
      <Field
        name='apiUrlPlayers'
        label='API Url players'
        type='text'
        component={FormGroup} />
      <div className='form-group'>
        <label htmlFor='game'>Game</label>
        <Field component='select' className="form-control" name='game'>
          <option>Choose game</option>
          {games.map(game => <option key={game._id} value={game._id}>{game.name}</option>)}
        </Field>
      </div>
      <button className='btn btn-primary'>Save</button>
    </form>
  )
}

export default LeagueForm = reduxForm({
  form: 'league'
})(LeagueForm)
