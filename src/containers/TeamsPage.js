import React from 'react'
import { connect } from 'react-redux'
import { getTeams } from '../reducers/teamReducer'
import SmallCardBox from '../components/SmallCardBox'
import LinkButton from '../components/LinkButton'
import Loading from '../components/Loading'

class TeamsPage extends React.Component {
    componentDidMount = async () => {
        document.title = 'tournamint - Joukkueet'
        await this.props.getTeams()
    }

    render() {
        return (
            <React.Fragment>
                <h2 className='text-center my-5'>Joukkueet</h2>
                <LinkButton link='/new/team' text='Lisää uusi' />
                <div className='row justify-content-center'>
                    {Array.isArray(this.props.teams) ?
                        this.props.teams.map(team => {
                            return(
                            <SmallCardBox
                                key={team.id}
                                shortHand={team.shortHand}
                                link={`/teams/${team.slug}`}
                                logo={team.logo}
                                gamerName={team.gamerName}
                            />)
                        }) :
                        <Loading />}
                </div>
            </React.Fragment>
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
