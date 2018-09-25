import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGames } from '../reducers/gameReducer'
import LeagueForm from '../forms/LeagueForm'

class NewLeague extends Component {
    componentDidMount = async () => {
        await this.props.getGames()
    }

    addLeague = (values) => {
        console.log(values)
    }

    render() {
        return (
            <div>
                <h2 className='text-center my-5'>Lisää uusi Liiga</h2>
                <LeagueForm onSubmit={this.addLeague} games={this.props.games} />
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
    { getGames }
)(NewLeague)