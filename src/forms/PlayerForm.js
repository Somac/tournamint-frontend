import React from 'react'
import { connect } from 'react-redux'
import { getTeams } from '../reducers/teamReducer'
import FormGroup from './formComponents/FormGroup'
import { reduxForm, Field } from 'redux-form'
import FormGroupSelect from './formComponents/FormGroupSelect'

class PlayerForm extends React.Component {
    componentDidMount = async () => {
        await this.props.getTeams()
    }

    render() {
        console.log(this.props)
        const { handleSubmit, teams } = this.props
        const positionOptions = [
            { value: 'G', name: 'Goalie' },
            { value: 'RW', name: 'Right Wing' },
            { value: 'C', name: 'Center' },
            { value: 'LW', name: 'Left Wing' },
            { value: 'W', name: 'Winger' },
            { value: 'D', name: 'Defenseman' },
            { value: 'LD', name: 'Left defenseman' },
            { value: 'RD', name: 'Right defenseman' }
        ]
        const teamOptions = teams.map(team => ({ value: team.id, name: team.name }))
        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name='name'
                    label='Pelaajan nimi'
                    type='text'
                    component={FormGroup} />
                <Field
                    name='jerseyNumber'
                    label='Pelipaidan numero'
                    type='number'
                    component={FormGroup} />
                <Field
                    name='position'
                    label='Pelipaikka'
                    component={FormGroupSelect}
                    options={positionOptions} />
                <Field
                    name='team'
                    label='Joukkue'
                    component={FormGroupSelect}
                    options={teamOptions} />
                <Field
                    name='apiId'
                    label='Pelaajan API id'
                    type='number'
                    component={FormGroup} />
                <button className='btn btn-primary'>Tallenna</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.teams
    }
}

PlayerForm = connect(
    mapStateToProps,
    { getTeams }
)(PlayerForm)

export default reduxForm({
    form: 'player'
})(PlayerForm)
