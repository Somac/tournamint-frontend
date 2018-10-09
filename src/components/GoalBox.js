import React from 'react'

const GoalBox = ({ goal }) => {
    const onError = 'https://nhl.bamcontent.com/images/headshots/current/168x168/skater.jpg'
    let img = `https://nhl.bamcontent.com/images/headshots/current/168x168/${goal.scorer.apiId}.jpg`
    let boxClass = ''
    let assists = goal.firstAssist ? goal.firstAssist.name : false
    let logo = ''
    if(goal.secondAssist) assists += `, ${goal.secondAssist.name}`
    if(assists) {
        assists = `(${assists})`
    }
    if (goal.homeTeam) {
        boxClass = 'justify-content-start'
    } else {
        boxClass = 'justify-content-end'
    }
    console.log(logo)
    return (
        <div className={`d-flex flex-row align-items-center my-3 ${boxClass}`}>
            {!goal.homeTeam ?
                <div className='col-2'>
                    <h3 className='text-center'>{goal.homeGoals} - <b>{goal.awayGoals}</b></h3>
                </div>
                : ''}
            <div className='col-5'>
                <div className='box'>
                    {goal.scorer ?
                        <React.Fragment>
                            <img className='rounded-circle small-img' onError={(e) => e.target.src = onError} src={img} alt={goal.scorer.name} />
                            <b>{goal.scorer.name}</b> {assists}
                            <img alt='' onError={(e) => e.target.src = ''} src={`http://localhost:3001/${goal.logo}`} className='bg-logo' />
                        </React.Fragment>
                        : 'Maali'}
                </div>
            </div>
            {goal.homeTeam ?
                <div className='col-2'>
                    <h3 className='text-center'><b>{goal.homeGoals}</b> - {goal.awayGoals}</h3>
                </div>
                : ''}
        </div>
    )
}

export default GoalBox