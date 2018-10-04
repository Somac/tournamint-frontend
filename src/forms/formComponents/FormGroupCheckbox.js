import React from 'react'

const FormGroupCheckbox = ({ input, name, label, type, meta: { touched, error, warning } }) => {
    return (
        <div className='form-check mb-3'>
            <label className='form-check-label' htmlFor={name}>
                <input className='form-check-input' {...input} type='checkbox' />
                {label}
            </label>
        </div>
    )
}

export default FormGroupCheckbox
