import React from 'react'

const FormGroupTextArea = ({ input, name, label, type, meta: { touched, error, warning } }) => {
  let classes = ['form-control']
  if (touched && error) {
    classes = classes.concat('is-invalid')
  }
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea className={classes.join(' ')} {...input} type={type} placeholder={label}>
      </textarea>
      {touched &&
        ((error && <span className='error-fdbck'>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  )
}

export default FormGroupTextArea
