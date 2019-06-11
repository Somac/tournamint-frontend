import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../reducers/profileReducer'
import { loadFromState } from '../reducers/userReducer'
import Loading from '../components/Loading'
import CardBox from '../components/CardBox'
import LinkButton from '../components/LinkButton'

class MePage extends React.Component {
  state = {
    componentDidMount: false
  }

  componentDidMount = async () => {
    document.title = 'tournamint - Profiili'
    await this.props.loadFromState()
    await this.props.getUser(this.props.user.name)
    this.setState({ componentDidMount: true })
  }

  render() {
    if (this.state.componentDidMount) {
      return (
        <div>
          <h2 className='text-center mb-5 mt-3'>
            Welcome {this.props.user ? this.props.user.name : ''}
          </h2>
          <h2 className='text-center my-5'>My tournaments</h2>
          <LinkButton link='/new/tournament' text='Add new' />
          <div className='row d-flex justify-content-center'>
            {this.props.profile.tournaments ?
              <p>No tournaments yet</p> :
              this.props.profile.tournaments.map(tournament =>
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
    return <Loading />
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    profile: state.profile,
    tournaments: state.tournaments
  }
}

export default connect(
  mapStateToProps,
  { getUser, loadFromState }
)(MePage)
