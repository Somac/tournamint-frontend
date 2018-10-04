import React from 'react'
import FormGroup from './formComponents/FormGroup'
import { reduxForm, Field, formValueSelector } from 'redux-form';
import FormGroupTextArea from './formComponents/FormGroupTextArea';
import FormGroupSelect from './formComponents/FormGroupSelect';
import FormGroupCheckbox from './formComponents/FormGroupCheckbox'
import { connect } from 'react-redux'

const SelectedTeam = ({ team }) => {
    return (
        <div className='col-6 col-md-3'>
            <img className='mx-auto d-flex card-img-top' src={`http://localhost:3001/${team.logo}`} alt={team.shortHand} />
            <p className='text-center'>{team.shortHand} / {team.gamerName}</p>
        </div>
    )
}

let TournamentForm = (props) => {
    const { handleSubmit, leagues, teams, selectedLeague, teamChange, selectedTeams, leagueChange } = props
    const leagueOptions = leagues.map(league => { return { value: league._id, name: league.name } })
    const teamOptions = teams
        .filter(({ league }) => league === selectedLeague)
        .map(team => {
            return { value: team.id, name: `${team.name} - ${team.gamerName}` }
        })
    const advanceOptions = [...Array(selectedTeams.length)].map((item, i) => ({ value: i + 1, name: i + 1 }))
    const onTeamChange = (event, newTeam) => {
        event.preventDefault()
        teamChange(newTeam)
    }

    const onLeagueChange = () => {
        leagueChange()
    }

    // name: String, XX
    // description: String, XX
    // rounds: Number, XX
    // toAdvance: Number, XX
    // league: { type: mongoose.Schema.Types.ObjectId, ref: 'League' }, XX
    // teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }], XX
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name='name'
                type='text'
                component={FormGroup}
                label='Turnauksen nimi'
            />
            <Field
                name='description'
                component={FormGroupTextArea}
                label='Kuvaus'
            />
            <Field
                name='rounds'
                component={FormGroup}
                type='number'
                label='Runkosarjan kierrokset'
            />
            <hr />
            <Field
                name='league'
                component={FormGroupSelect}
                label='Liiga'
                options={leagueOptions}
                onChange={onLeagueChange}
            />
            <Field
                name='team'
                onChange={onTeamChange}
                component={FormGroupSelect}
                label='Joukkueet'
                options={teamOptions}
            />
            {selectedTeams.length === 0 ? '' :
                <div className='box-2 my-3'>
                    <h3 className='text-center'>Valitut joukkueet:</h3>
                    <div className='row d-flex justify-content-center'>
                        {selectedTeams
                            .map(t =>
                                <SelectedTeam key={t.id} team={t} />
                            )
                        }
                    </div>
                </div>
            }
            <Field
                name='toAdvance'
                component={FormGroupSelect}
                label='Playoff viivan yläpuolella'
                options={advanceOptions}
            />
            <Field
                name='generateMatches'
                component={FormGroupCheckbox}
                label='Generoi turnauksen ottelut automaattisesti'
                isChecked
            />
            <button className='btn btn-primary'>Tallenna</button>
        </form>
    )
}

TournamentForm = reduxForm({
    form: 'tournament'
})(TournamentForm)

const selector = formValueSelector('tournament')
TournamentForm = connect(
    state => {
        const selectedLeague = selector(state, 'league')
        const selectedTeam = selector(state, 'team')
        return {
            selectedLeague,
            selectedTeam
        }
    }
)(TournamentForm)

export default TournamentForm
