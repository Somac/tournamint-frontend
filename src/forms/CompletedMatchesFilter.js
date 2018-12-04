import React from 'react'
import { connect } from 'react-redux'

const CompletedMatchesFilter = (props) => {
  const radioButtons = [
    { id: 'filter', value: 'ALL', label: 'Kaikki' },
    { id: 'filter2', value: 'COMPLETED', label: 'Pelatut' },
    { id: 'filter3', value: 'NOT_COMPLETED', label: 'Pelaamatta' }
  ]
  const { filter, onChange } = props
  const name = 'completedFilter'
  const change = (event) => {
    onChange(event.target.value)
  }
  return (
    <React.Fragment>
      {radioButtons.map(radio => {
        return (
          <div className="form-check-inline" key={radio.id}>
            <input className="form-check-input" type="radio" name={name} id={radio.id} value={radio.value} onChange={change} checked={radio.value === filter.filter} />
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

const mapStateToProps = (state) => {
  return {
    filter: state.matchFilters
  }
}

export default connect(
  mapStateToProps
)(CompletedMatchesFilter)
