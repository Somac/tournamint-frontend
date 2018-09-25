import React from 'react'
import { Field } from 'redux-form'

const FormGroup = ({ name, label, options }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field component='select' className="form-control" name={name} >
                <option></option>
                {options ? options.map(o => <option value={o.value}>{o.name}</option>) : ''}
            </Field>
        </div>
    )
}

export default FormGroup
