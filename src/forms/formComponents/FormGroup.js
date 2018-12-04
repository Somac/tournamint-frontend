import React from 'react'

const FormGroup = ({ input, name, label, type, meta: { touched, error, warning } }) => {
  let classes = ['form-control']
  if (touched && error) {
    classes = classes.concat('is-invalid')
  }
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input className={classes.join(' ')} {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span className='error-fdbck'>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  )
}

export default FormGroup
