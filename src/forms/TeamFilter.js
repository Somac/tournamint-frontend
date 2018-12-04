import React from 'react'

const TeamFilter = ({ onChange, teams, name }) => {
  const change = (event) => {
    onChange(event.target.value)
  }
  return (
    <div className="form-group">
      <select className="form-control" name={name} onChange={change} >
        <option defaultValue value='ALL'>Kaikki</option>
        {teams ? teams.map(o => <option key={o.value} value={o.value}>{o.name}</option>) : ''}
      </select>
    </div>
  )
}

export default TeamFilter
