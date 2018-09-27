import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import Routes from './components/Routes'

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <MainMenu />
                    <div className='container'>
                        <Routes />
                    </div>
                    <Footer />
                </React.Fragment>
            </Router>
        );
    }
}

export default connect(
    null
)(App)
