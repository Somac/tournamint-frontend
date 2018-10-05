import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneMatch } from '../reducers/matchReducer'
import MatchBox from '../components/MatchBox'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import GoalForm from '../forms/GoalForm'

class MatchPage extends Component {
    state = {
        componentDidMount: false
    }

    componentDidMount = async () => {
        const slug = this.props.matchSlug
        await this.props.getOneMatch(slug)
        this.setState({ componentDidMount: true })
    }

    addGoal = (values) => {
        console.log(values)
    }

    render() {
        console.log(this.props.match)
        const { match } = this.props
        if (this.state.componentDidMount) {
            return (
                <React.Fragment>
                    <h2 className='text-center mt-5'>{match.homeTeam.name} vs {match.awayTeam.name}</h2>
                    <Link to={`/tournaments/${match.tournament.slug}`}><p className='text-center mb-5'><small>Turnaus: {match.tournament.name}</small></p></Link>
                    <h4 className='text-center'>Kierros: {match.round}</h4>
                    <div className='row'>
                        <div className='col-12'>
                            <MatchBox match={match} tournamentLink={match.tournament.slug} />
                        </div>
                        {match.completed ? '' :
                            <React.Fragment>
                                <div className='col-6'>
                                    <div className='box'>
                                        <h3>Lisää maali kotijoukkueelle</h3>
                                        <GoalForm onSubmit={this.addGoal} players={match.homeTeam.players} />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='box'>
                                        <h3>Lisää maali vierasjoukkueelle</h3>
                                        <GoalForm onSubmit={this.addGoal} players={match.awayTeam.players} />
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                </React.Fragment>
            )
        }
        return <Loading />
    }
}

const mapStateToProps = (state) => {
    return {
        match: state.match
    }
}

export default connect(
    mapStateToProps,
    { getOneMatch }
)(MatchPage)
