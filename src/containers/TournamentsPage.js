import React from 'react'
import { connect } from 'react-redux'
import CardBox from '../components/CardBox'
import LinkButton from '../components/LinkButton'

class TournamentsPage extends React.Component {
  componentDidMount() {
    document.title = 'tournamint - Turnaukset'
  }

  render() {
    return (
      <div>
        <h2 className='text-center my-5'>Tournaments</h2>
        <LinkButton link='/new/tournament' text='Lisää uusi' />
        <div className='row d-flex justify-content-center'>
          {this.props.tournaments.length === 0 ?
            <p>No tournaments yet</p> :
            this.props.tournaments.map(tournament =>
              <CardBox
                key={tournament.id}
                text={tournament.description}
                name={tournament.name}
                link={`/tournaments/${tournament.slug}`}
              />
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments
  }
}

export default connect(
  mapStateToProps
)(TournamentsPage)
