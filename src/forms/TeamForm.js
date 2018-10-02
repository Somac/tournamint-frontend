import React from 'react'
import { reduxForm } from 'redux-form'

let TeamForm = (props) => {
    const { handleSubmit, leagues, tournaments, players } = props
    console.log(leagues, tournaments, players)
    return (
        <form onSubmit={handleSubmit}>
            <button className='btn btn-primary'>Tallenna</button>
        </form>
    )
}

export default TeamForm = reduxForm({
    form: 'team'
})(TeamForm)
