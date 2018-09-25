import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTeam } from '../reducers/teamReducer'
import TeamForm from '../forms/TeamForm'
import { Redirect } from 'react-router'

class NewTeam extends Component {
    state = {
        redirect: false
    }
    componentDidMount = async () => {
        await this.props.getGames()
    }

    addTeam = async (values) => {
        await this.props.addTeam(values)
        await this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to='/teams' />
            )
        }
        return (
            <div>
                <h2 className='text-center my-5'>Lisää uusi Liiga</h2>
                <TeamForm onSubmit={this.addTeam} games={this.props.games} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(
    mapStateToProps,
    { addTeam }
)(NewTeam)
