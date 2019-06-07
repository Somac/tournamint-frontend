import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneTournament } from '../reducers/tournamentReducer'
import { getTournamentMatches } from '../reducers/tournamentMatchReducer'
import { getTournamentStandings } from '../reducers/tournamentStandingsReducer'
import { getTournamentPlayerStats } from '../reducers/tournamentPlayerStatsReducer'
import InfoContainer from '../components/InfoContainer'
import TeamList from '../components/TeamList'
import MatchList from '../components/MatchList'
import Loading from '../components/Loading'
import ReactTable from 'react-table'
import Togglable from '../components/Togglable'
import withFixedColumns from 'react-table-hoc-fixed-columns';
import NavigationBlock from '../components/NavigationBlock';
const ReactTableFixedColumns = withFixedColumns(ReactTable);

class TournamentPage extends Component {
  state = {
    componentDidMount: false
  }

  componentDidMount = async () => {
    const slug = this.props.tournamentSlug
    await this.props.getOneTournament(slug)
    await this.props.getTournamentMatches(slug)
    await this.props.getTournamentStandings(slug)
    await this.props.getTournamentPlayerStats(slug)
    const tmnt = this.props.tournaments.find(tournament => tournament.slug === this.props.tournamentSlug)
    document.title = `tournamint - ${tmnt.name}`
    this.setState({ componentDidMount: true })
    this.forceUpdate()
  }

  render() {
    const { tournaments, tournamentMatches, tournamentMatchesNoFilter, tournamentStandings, tournamentPlayerStats } = this.props
    const tournament = tournaments.find(tournament => tournament.slug === this.props.tournamentSlug)
    const standingsColumns = [
      { Header: 'Team', accessor: 'team', fixed: 'left', minWidth: 170 },
      { Header: 'GP', accessor: 'gp', minWidth: 60 },
      { Header: 'W', accessor: 'w', minWidth: 60 },
      { Header: 'L', accessor: 'l', minWidth: 60 },
      { Header: 'OT', accessor: 'ot', minWidth: 60 },
      { Header: 'PTS', accessor: 'pts', minWidth: 60 },
      { Header: 'GF', accessor: 'gf', minWidth: 60 },
      { Header: 'GA', accessor: 'ga', minWidth: 60 },
      { Header: 'DIFF', accessor: 'diff', minWidth: 80 },
      { Header: 'HOME', accessor: 'home', minWidth: 100 },
      { Header: 'AWAY', accessor: 'away', minWidth: 100 }
    ]
    const statsColumns = [
      { Header: 'Name', accessor: 'name', fixed: 'left', minWidth: 170 },
      { Header: 'Team', accessor: 'team', minWidth: 170 },
      { Header: 'GP', accessor: 'gp', minWidth: 60 },
      { Header: 'G', accessor: 'g', minWidth: 60 },
      { Header: 'A', accessor: 'a', minWidth: 60 },
      { Header: 'P', accessor: 'p', minWidth: 60 }
    ]
    const links = [
      { name: 'Info', link: "#" },
      { name: 'Teams', link: "#"},
      { name: 'Standings', link: "#"},
      { name: 'Statistics', link: "#"},
      { name: 'Matches', link: "#"}
    ]
    const defaultSort = [
      {
        id: 'pts',
        desc: true
      }
    ]
    const defaultSortStats = [
      {
        id: 'p',
        desc: true
      }
    ]
    const noTournament = () => (
      <div>Turnausta ei löytynyt</div>
    )
    const yesTournament = () => {
      const d = new Date(tournament.createdAt)
      const createdDate = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} klo ${d.getHours()}:${(d.getMinutes() < 10 ? '0' : '')}${d.getMinutes()}:${(d.getSeconds() < 10 ? '0' : '')}${d.getSeconds()}`
      const gamesPlayed =
        tournamentMatchesNoFilter.filter(({ completed }) => completed === true).length
      const tournamentStandingsWithDiff = tournamentStandings.map(ts => ({ ...ts, diff: ts.gf - ts.ga }))
      return (
        <React.Fragment>
          <h2 className='text-center mt-5'>{tournament.name}</h2>
          <p className='text-center mb-5'><small>Created: {createdDate}</small></p>
          <NavigationBlock links={links} />
          <Togglable label='Show tournament info' cancelLabel='Hide info'>
            <InfoContainer
              header={'Tournament info'}
              rows={[
                { head: 'Created', value: createdDate },
                { head: 'Teams', value: `${tournament.teams.length}` },
                { head: 'Games played', value: `${gamesPlayed} / ${tournamentMatchesNoFilter.length}` },
                { head: 'Rounds', value: tournament.rounds },
                { head: 'Playoff cutoff', value: tournament.toAdvance }
              ]}
            />
          </Togglable>
          <Togglable label='Show tournament teams' cancelLabel='Hide teams'>
            <TeamList teams={tournament.teams} />
          </Togglable>
          <h2 className='text-center mt-5'>Standings</h2>
          <ReactTableFixedColumns
            className='my-5'
            data={tournamentStandingsWithDiff}
            columns={standingsColumns}
            defaultPageSize={tournament.teams.length}
            defaultSorted={defaultSort}
            showPagination={false}
          />
          <h2 className='text-center mt-5'>Player statistics</h2>
          <ReactTableFixedColumns
            className='my-5'
            data={tournamentPlayerStats}
            columns={statsColumns}
            defaultPageSize={10}
            defaultSorted={defaultSortStats}
          />
          <MatchList matches={tournamentMatches} rounds={tournament.rounds} teams={tournament.teams} />
        </React.Fragment>
      )
    }
    if (this.state.componentDidMount) {
      return (
        <React.Fragment>
          {tournament ?
            yesTournament() :
            noTournament()
          }
        </React.Fragment>
      )
    }
    return <Loading />
  }
}

const matchesToShow = (matches, filterState) => {
  const { filter, team } = filterState
  let filteredMatches = matches
  if (filter === 'COMPLETED') {
    filteredMatches = matches.filter(match => match.completed === true)
  } else if (filter === 'NOT_COMPLETED') {
    filteredMatches = matches.filter(match => match.completed !== true)
  }
  if (team === 'ALL') {
    return filteredMatches
  } else {
    const homeMatches = filteredMatches.filter(match => match.homeTeam._id === team)
    const awayMatches = filteredMatches.filter(match => match.awayTeam._id === team)
    return [...homeMatches, ...awayMatches]
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments,
    tournamentMatches: matchesToShow(state.tournamentMatches, state.matchFilters),
    tournamentMatchesNoFilter: state.tournamentMatches,
    tournamentStandings: state.tournamentStandings,
    tournamentPlayerStats: state.tournamentPlayerStats
  }
}

export default connect(
  mapStateToProps,
  { getOneTournament, getTournamentMatches, getTournamentStandings, getTournamentPlayerStats }
)(TournamentPage)
