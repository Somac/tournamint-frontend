import React from 'react'

const CompletedMatchesFilter = ({ onChange }) => {
    const radioButtons = [
        { id: 'filter', value: 'ALL', label: 'Kaikki' },
        { id: 'filter2', value: 'COMPLETED', label: 'Pelatut' },
        { id: 'filter3', value: 'NOT_COMPLETED', label: 'Pelaamatta' }
    ]
    const name = 'completedFilter'
    const change = (event) => {
        onChange(event.target.value)
    }
    return (
        <React.Fragment>
            {radioButtons.map(radio => {
                return (
                    <div className="form-check-inline" key={radio.id}>
                        <input className="form-check-input" type="radio" name={name} id={radio.id} value={radio.value} onChange={change} />
                        <label className="form-check-label" htmlFor={radio.id} >
                            {radio.label}
                        </label>
                    </div>
                )
            })
            }
        </React.Fragment>
    )
}

export default CompletedMatchesFilter
