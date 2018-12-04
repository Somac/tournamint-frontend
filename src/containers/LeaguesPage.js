import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLeagues } from '../reducers/leagueReducer'
import CardBox from '../components/CardBox'
import LinkButton from '../components/LinkButton'

class LeaguesPage extends Component {
  componentDidMount = async () => {
    document.title = 'tournamint - Liigat'
    await this.props.getLeagues()
  }

  render() {
    return (
      <div>
        <h2 className='text-center my-5'>Leagues</h2>
        <LinkButton link='/new/league' text='Lisää uusi' />
        <div className='row justify-content-center'>
          {this.props.leagues.map(x =>
            <CardBox
              key={x._id}
              text={x.game.name}
              name={x.name}
              link={`/leagues/${x._id}`}
            />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    leagues: state.leagues
  }
}

export default connect(
  mapStateToProps,
  { getLeagues }
)(LeaguesPage)
