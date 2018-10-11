import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneMatch, completeMatch } from '../reducers/matchReducer'
import { postGoal } from '../reducers/goalReducer'
import MatchBoxNoLink from '../components/MatchBoxNoLink'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import HomeGoalForm from '../forms/HomeGoalForm'
import AwayGoalForm from '../forms/AwayGoalForm'
import GoalList from '../components/GoalList'
import SubmitMatchForm from '../forms/SubmitMatchForm'

class MatchPage extends Component {
    state = {
        componentDidMount: false,
        componendDidUpdate: true,
        possibleTie: undefined,
        scoreEven: undefined
    }

    componentDidMount = async () => {
        const slug = this.props.matchSlug
        await this.props.getOneMatch(slug)
        const homeGoals = this.props.match.goals.filter(({ homeTeam }) => homeTeam === true).length
        const awayGoals = this.props.match.goals.filter(({ awayTeam }) => awayTeam === true).length
        const scoreEven = homeGoals === awayGoals ? true : false
        const possibleTie = homeGoals - awayGoals === 1 || homeGoals - awayGoals === -1 ? true : false
        this.setState({ componentDidMount: true, possibleTie, scoreEven })
    }

    componentDidUpdate = async (prevProps) => {
        if (this.state.componendDidUpdate === false) {
            const slug = this.props.matchSlug
            await this.props.getOneMatch(slug)
            this.setState({ componendDidUpdate: true })
        }
        if (prevProps.match !== this.props.match) {
            const homeGoals = this.props.match.goals.filter(({ homeTeam }) => homeTeam === true).length
            const awayGoals = this.props.match.goals.filter(({ awayTeam }) => awayTeam === true).length
            const scoreEven = homeGoals === awayGoals ? true : false
            const possibleTie = homeGoals - awayGoals === 1 || homeGoals - awayGoals === -1 ? true : false
            this.setState({ possibleTie, scoreEven })
        }
    }


    addGoal = (values) => {
        const goal = { ...values, match: this.props.match._id }
        this.props.postGoal(goal)
        this.setState({ componendDidUpdate: false })
    }

    submitMatch = (values) => {
        this.props.completeMatch(this.props.match._id, values)
        this.setState({ componendDidUpdate: false })
    }

    render() {
        const { match } = this.props
        if (this.state.componentDidMount && this.state.componendDidUpdate) {
            return (
                <React.Fragment>
                    <h2 className='text-center mt-5'>{match.homeTeam.name} vs {match.awayTeam.name}</h2>
                    <Link to={`/tournaments/${match.tournament.slug}`}><p className='text-center mb-5'><small>Turnaus: {match.tournament.name}</small></p></Link>
                    <h4 className='text-center'>Kierros: {match.round}</h4>
                    <div className='row'>
                        <div className='col-12'>
                            <MatchBoxNoLink match={match} />
                        </div>
                        {match.completed ? '' :
                            <React.Fragment>
                                <div className='col-12 col-md-6'>
                                    <div className='box'>
                                        <h3>Lisää maali kotijoukkueelle</h3>
                                        <HomeGoalForm onSubmit={this.addGoal} players={match.homeTeam.players} initialValues={{ homeTeam: true }} />
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='box'>
                                        <h3>Lisää maali vierasjoukkueelle</h3>
                                        <AwayGoalForm onSubmit={this.addGoal} players={match.awayTeam.players} initialValues={{ awayTeam: true }} />
                                    </div>
                                </div>
                                <div className='col-12 d-flex justify-content-center my-5'>
                                    <div className='box'>
                                        <SubmitMatchForm onSubmit={this.submitMatch} match={match} possibleTie={this.state.possibleTie} scoreEven={this.state.scoreEven} />
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                        <GoalList goals={match.goals} homeLogo={match.homeTeam.logo} awayLogo={match.awayTeam.logo} />
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
    { getOneMatch, postGoal, completeMatch }
)(MatchPage)
