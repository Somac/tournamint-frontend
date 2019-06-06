import React from 'react'
import FormGroup from './formComponents/FormGroup'
import { Field, reduxForm } from 'redux-form'

let GameForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name='name' type='text' component={FormGroup} label='Game name' />
      <button className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default GameForm = reduxForm({
  form: 'game'
})(GameForm)
