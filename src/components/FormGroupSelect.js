import React from 'react'

const FormGroupSelect = ({ options, input, name, label, meta: { touched, error, warning }}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select {...input} className="form-control" name={name} >
                <option selected value='null'>Valitse liiga</option>
                {options ? options.map(o => <option key={o.value} value={o.value}>{o.name}</option>) : ''}
            </select>
        </div>
    )
}

export default FormGroupSelect
