import React from 'react'
import { connect } from 'react-redux'
import { getTeams } from '../reducers/teamReducer'
import CardBox from '../components/CardBox'
import LinkButton from '../components/LinkButton'

class TeamsPage extends React.Component {
    componentDidMount = async () => {
        await this.props.getTeams()
    }

    teamDescription = (team) => {
        return (
            <table className='table'>
                <tbody>
                    <tr>
                        <td>Lyhenne</td>
                        <td>{team.shortHand}</td>
                    </tr>
                    <tr>
                        <td>Pelaajan nimi</td>
                        <td>{team.gamerName}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div>
                <h2 className='text-center my-5'>Joukkueet</h2>
                <LinkButton link='/new/team' text='Lisää uusi' />
                <div className='row'>
                    {this.props.teams.map(team =>
                        <CardBox
                            key={team.id}
                            text={this.teamDescription(team)}
                            name={team.name}
                            link={`/teams/${team.slug}`}
                            logo={team.logo} />
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.teams
    }
}

export default connect(
    mapStateToProps,
    { getTeams }
)(TeamsPage)
