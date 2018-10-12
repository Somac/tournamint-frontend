import React, { Component } from 'react'
import GoalBox from '../components/GoalBox'
import { deleteGoal } from '../reducers/goalReducer'
import { connect } from 'react-redux'

class GoalList extends Component {
    removeGoal = async (id) => {
        if (window.confirm(`Haluatko varmasti poistaa maalin?`)) {
            await this.props.deleteGoal(id)
        }
    }
    render() {
        let homeGoals = 0
        let awayGoals = 0
        let logo = ''
        const goals = this.props.goals.map(goal => {
            if (goal.homeTeam) {
                homeGoals++
                logo = this.props.homeLogo
            } else {
                awayGoals++
                logo = this.props.awayLogo
            }
            return { ...goal, homeGoals, awayGoals, logo }
        })
        return (
            <div className='col-12 my-5'>
                <h1 className='text-center mb-5'>Maalit</h1>
                {goals.map(goal => <GoalBox key={goal._id} goal={goal} logo={logo} deleteGoal={this.removeGoal} />)}
            </div>
        )
    }
}

export default connect(
    null,
    { deleteGoal }
)(GoalList)