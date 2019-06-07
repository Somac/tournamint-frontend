import React from 'react'
import { reduxForm, Field } from 'redux-form';
import FormGroupCheckbox from './formComponents/FormGroupCheckbox'

let SubmitMatchForm = (props) => {
  const { handleSubmit, possibleTie, scoreEven } = props
  return (
    <form onSubmit={handleSubmit}>
      {possibleTie ? <Field component={FormGroupCheckbox} name='ot' label='Tie' /> : ''}
      <button className='btn btn-primary' disabled={scoreEven}>End game</button>
    </form>
  )
}

export default SubmitMatchForm = reduxForm({
  form: 'submitmatch'
})(SubmitMatchForm)
