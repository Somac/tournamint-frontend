import React from 'react'
import FormGroup from './formComponents/FormGroup'
import { reduxForm, Field } from 'redux-form';

let LoginForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name='username' label='Username' type='text' component={FormGroup} />
      <Field name='password' label='Password' type='password' component={FormGroup} />
      <button className='btn btn-primary'>Login</button>
    </form>
  )
}

export default LoginForm = reduxForm({
  form: 'login'
})(LoginForm)
