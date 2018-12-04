import React from 'react'
import { connect } from 'react-redux'

class MePage extends React.Component {
  componentDidMount() {
    document.title = 'tournamint - Profiili'
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.user ? this.props.user.name : ''}</h1>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps
)(MePage)
