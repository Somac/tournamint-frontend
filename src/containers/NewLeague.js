import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGames } from '../reducers/gameReducer'
import { addLeague } from '../reducers/leagueReducer'
import LeagueForm from '../forms/LeagueForm'
import { Redirect } from 'react-router'

class NewLeague extends Component {
    state = {
        redirect: false
    }
    componentDidMount = async () => {
        await this.props.getGames()
    }

    addLeague = async (values) => {
        await this.props.addLeague(values)
        await this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to='/leagues' />
            )
        }
        return (
            <div>
                <h2 className='text-center my-5'>Lisää uusi Liiga</h2>
                <div className='row d-flex justify-content-center'>
                    <div className='col-6 box'>
                        <LeagueForm onSubmit={this.addLeague} games={this.props.games} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(
    mapStateToProps,
    { getGames, addLeague }
)(NewLeague)