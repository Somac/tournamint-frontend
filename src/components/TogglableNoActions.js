import React, { Component } from 'react'

class TogglableNoActions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    if (this.props.visible) {
      this.setState({ visible: true })
    }
  }

  render() {
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }
    return (
      <div className='row' style={showWhenVisible}>
        <div className='col-12'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default TogglableNoActions
