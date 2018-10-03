import React from 'react'
import Select from 'react-select'

const FormGroupSelect = ({ options, input, name, label, meta: { touched, error, warning } }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Select
                value={input.value}
                onChange={(value) => { return input.onChange(value.map(p => p.value)) }}
                onBlur={() => input.onBlur([...input.value])}
                options={options}
                isMulti={true}
            />
        </div >
    )
}

export default FormGroupSelect
