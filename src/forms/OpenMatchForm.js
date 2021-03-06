import React from 'react'
import { reduxForm } from 'redux-form';

let OpenMatchForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <button className='btn btn-primary'>Open match</button>
    </form>
  )
}

export default OpenMatchForm = reduxForm({
  form: 'openmatch'
})(OpenMatchForm)
