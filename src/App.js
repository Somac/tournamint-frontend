import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import Routes from './components/Routes'
import { getTournaments } from './reducers/tournamentReducer'
import { loadFromState } from './reducers/userReducer'

class App extends Component {
    componentDidMount = async () => {
        await this.props.getTournaments()
        await this.props.loadFromState()
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <MainMenu />
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='d-none d-lg-flex col-lg-1 col-xl-2'></div>
                            <div className='col-12 col-lg-10 col-xl-8'>
                                <Routes />
                            </div>
                            <div className='d-none d-lg-flex col-lg-1 col-xl-2'></div>
                        </div>
                    </div>
                    <Footer />
                </React.Fragment>
            </Router>
        );
    }
}

export default connect(
    null,
    { getTournaments, loadFromState }
)(App)
