import React from 'react'
import { connect } from 'react-redux'
import { matchFilter, teamFilter } from '../reducers/matchFilterReducer'
import CompletedMatchesFilter from '../forms/CompletedMatchesFilter'
import TeamFilter from '../forms/TeamFilter'


class MatchFilters extends React.Component {
  filterChange = (value) => {
    this.props.matchFilter(value)
  }
  teamChange = (value) => {
    this.props.teamFilter(value)
  }
  render() {
    if (!this.props.teams) {
      return (<React.Fragment></React.Fragment>)
    }
    const teamOptions = this.props.teams.map(team => ({ value: team._id, name: team.name }))
    return (
      <div className='box my-5 p-3'>
        <div className='row d-flex justify-content-center row-eq-height'>
          <div className='col'>
            <p>Ottelufiltteri</p>
            <CompletedMatchesFilter onChange={this.filterChange} />
          </div>
          <div className='col'>
            <p>Joukkuefiltteri</p>
            <TeamFilter onChange={this.teamChange} teams={teamOptions} name='TeamChange' />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

export default connect(
  mapStateToProps,
  { matchFilter, teamFilter }
)(MatchFilters)
