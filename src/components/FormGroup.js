import React from 'react'
import { Field } from 'redux-form'

const FormGroup = ({name, label, component, type}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field
                component={component}
                type={type}
                className="form-control"
                name={name}
            />
        </div>
    )
}

export default FormGroup
