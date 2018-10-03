import React from 'react'
import { reduxForm, Field } from 'redux-form'
import FormGroupSelect from './formComponents/FormGroupSelect'
import FormGroup from './formComponents/FormGroup'

let TeamForm = (props) => {
    const { handleSubmit, leagues } = props
    const leagueOptions = leagues.map(league => { return { value: league._id, name: league.name } })
    // name: String,
    // shortHand: String,
    // logo: String,
    // description: String,
    // gamerName: String,
    // apiId: Number,
    // slug: { type: String, lowercase: true, unique: true },
    // league: { type: mongoose.Schema.Types.ObjectId, ref: 'League' },
    // tournaments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' }],
    // players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
    // matches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }]
    return (
        <form onSubmit={handleSubmit}>
            <Field name='league' component={FormGroupSelect} label='Liiga' options={leagueOptions} />
            <Field name='name' type='text' component={FormGroup} label='Nimi' />
            <Field name='shortHand' type='text' component={FormGroup} label='Lyhenne' />
            <button className='btn btn-primary'>Tallenna</button>
        </form>
    )
}

export default TeamForm = reduxForm({
    form: 'team'
})(TeamForm)
