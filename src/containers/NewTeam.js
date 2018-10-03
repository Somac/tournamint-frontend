import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTeam } from '../reducers/teamReducer'
import { getLeagues } from '../reducers/leagueReducer'
import TeamForm from '../forms/TeamForm'
import { Redirect } from 'react-router'
import Loading from '../components/Loading'

class NewTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        rendering: true
        }
    }
    
    componentDidMount = async () => {
        await this.props.getLeagues()
        this.setState({rendering: false})
    }

    addTeam = async (values) => {
        await this.props.addTeam(values)
        await this.setState({ redirect: true })
    }

    //to be used
    isUrl = (url) => {
        var matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/
        return matcher.test(url)
    }

    render() {
        if(this.state.rendering) {
            return (
                <Loading />
            )
        }
        if (this.state.redirect) {
            return (
                <Redirect to='/teams' />
            )
        }
        return (
            <div>
                <h2 className='text-center my-5'>Lisää uusi joukkue</h2>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-md-6 box'>
                        <h1>Lisää uusi joukkue</h1>
                        <TeamForm onSubmit={this.addTeam} leagues={this.props.leagues} />
                    </div>
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
    { addTeam, getLeagues }
)(NewTeam)
