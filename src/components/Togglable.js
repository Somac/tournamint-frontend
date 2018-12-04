import React, { Component } from 'react'

class Togglable extends Component {
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

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }
    return (
      <React.Fragment>
        <div style={hideWhenVisible}>
          <button className='btn btn-light mx-auto d-flex my-3' onClick={this.toggleVisibility}>{this.props.label}</button>
        </div>
        <div style={showWhenVisible}>
          <div className='row'>
            <div className='col-12'>
              <button className='btn btn-danger d-flex ml-auto' onClick={this.toggleVisibility}>{this.props.cancelLabel}</button>
              {this.props.children}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Togglable
