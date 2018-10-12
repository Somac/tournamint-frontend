import React from 'react'

const GoalBox = ({ goal, deleteGoal }) => {
    //TODO kuvien haku pois kovakoodista
    const onError = 'https://nhl.bamcontent.com/images/headshots/current/168x168/skater.jpg'
    let img = 'https://nhl.bamcontent.com/images/headshots/current/168x168/skater.jpg'
    if (goal.scorer) {
        img = `https://nhl.bamcontent.com/images/headshots/current/168x168/${goal.scorer.apiId}.jpg`
    }
    let boxClass = ''
    let orderGoal
    let assists = goal.firstAssist ? goal.firstAssist.name : false
    if (goal.secondAssist) assists += `, ${goal.secondAssist.name}`
    if (assists) {
        assists = `(${assists})`
    }
    if (goal.homeTeam) {
        boxClass = 'justify-content-start'
        orderGoal = 'order-1 order-sm-0'
    } else {
        boxClass = 'justify-content-end'
        orderGoal = 'order-1'
    }
    const removeGoal = () => {
        deleteGoal(goal._id)
    }
    return (
        <div className={`row align-items-center my-3 ${boxClass}`}>
            {!goal.homeTeam ?
                <div className='col-12 col-sm-2 order-0'>
                    <h3 className='text-center'>{goal.homeGoals} - <b>{goal.awayGoals}</b></h3>
                </div>
                : ''}
            <div className={`col-12 col-sm-5 ${orderGoal}`}>
                <div className='box'>
                    {goal.scorer ?
                        <React.Fragment>
                            <img className='rounded-circle small-img' onError={(e) => e.target.src = onError} src={img} alt={goal.scorer.name} />
                            <b>{goal.scorer.name}</b> {assists}
                            <img alt='' onError={(e) => e.target.src = ''} src={`/${goal.logo}`} className='bg-logo' />
                        </React.Fragment>
                        : 'Maali'
                    }
                    <button type="button" className="close" aria-label="Close" onClick={removeGoal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            {goal.homeTeam ?
                <div className='col-12 col-sm-2 order-0 order-sm-1'>
                    <h3 className='text-center'><b>{goal.homeGoals}</b> - {goal.awayGoals}</h3>
                </div>
                : ''}
        </div>
    )
}

export default GoalBox
