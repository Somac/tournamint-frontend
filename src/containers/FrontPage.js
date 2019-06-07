import React, { Component } from 'react'

class FrontPage extends Component {
  componentDidMount() {
    document.title = 'tournamint'
  }

  render() {
    return (
      <React.Fragment>
        <h2 className='my-5 text-center'>tournamint</h2>
        <div className='row d-flex justify-content-center my-5'>
          <div className='col-12 col-xl-6'>
            <div className='box'>
              <p>Tournamint 0.1 version</p>
              <p>Slightly unfinished, todo-list</p>
              <ul>
                <li>Editing players</li>
                <li>Deleting players</li>
                <li>Remove tournament</li>
                <li>Editing tournament</li>
                <li>Editing goal</li>
                <li>Removing game</li>
                <li>Editing game</li>
                <li>Deleting league</li>
                <li>Editing league</li>
                <li>Authenticating mostly</li>
                <li>Own profile page</li>
                <li>Better layout</li>
                <li>Form validation</li>
                <li>And more...</li>
              </ul>
              <p>Features/bugs implemented</p>
              <ul>
                <li>Registering</li>
                <li>Login</li>
                <li>Tournament listing</li>
                <li>Adding tournament</li>
                <li>Tournament page</li>
                <li>Tournament standings</li>
                <li>Tournament page lists teams and details</li>
                <li>Match filtering</li>
                <li>Match page</li>
                <li>Adding goal</li>
                <li>Listing goals</li>
                <li>Finishing gmae</li>
                <li>Adding team</li>
                <li>Getting players from API</li>
                <li>Teampage</li>
                <li>Teamlist</li>
                <li>Team player statistics</li>
                <li>Player list in teampage</li>
                <li>Players own page</li>
                <li>Adding league</li>
                <li>Listing leagues</li>
                <li>Adding game</li>
                <li>Listing games</li>
                <li>Adding player manually</li>
                <li>Opening match</li>
                <li>Removing goal</li>
                <li>Mobile responsiveness (mostly)</li>
              </ul>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default FrontPage
