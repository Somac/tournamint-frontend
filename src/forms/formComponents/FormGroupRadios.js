import React from 'react'

const FormGroupRadios = ({ radioButtons, name }) => {
  return (
    <React.Fragment>
      {radioButtons.map(radio => {
        return (
          <div className="form-check-inline" key={radio.id}>
            <input className="form-check-input" type="radio" name={name} id={radio.id} value={radio.value} />
            <label className="form-check-label" htmlFor={radio.id} >
              {radio.label}
            </label>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default FormGroupRadios
