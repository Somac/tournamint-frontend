import React from 'react'

const FormGroupSelect = ({ options, input, name, label, meta: { touched, error, warning }}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select {...input} className="form-control" name={name} >
                <option defaultValue value='null'>Valitse</option>
                {options ? options.map(o => <option key={o.value} value={o.value} disabled={o.disabled ? true : null}>{o.name}</option>) : ''}
            </select>
        </div>
    )
}

export default FormGroupSelect
