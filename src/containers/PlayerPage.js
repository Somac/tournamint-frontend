import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOnePlayer } from '../reducers/playerReducer'
import playerService from '../services/players'
import InfoContainer from '../components/InfoContainer'
import Loading from '../components/Loading'
import Flag from 'react-world-flags'
import { Link } from 'react-router-dom'

class PlayerPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            externalInfo: [],
            playerHeight: 0,
            playerAge: 0,
            playerWeight: 0,
            birthDate: 0,
            flag: 'idk',
            img: 'https://nhl.bamcontent.com/images/headshots/current/168x168/skater.jpg',
            onErrorImg: 'https://nhl.bamcontent.com/images/headshots/current/168x168/skater.jpg',
            fetching: true,
        }
    }

    componentDidMount = async () => {
        const id = this.props.playerId
        await this.props.getOnePlayer(id)
        const externalInfo = await playerService.getExternalInfo(this.props.players.apiId, this.props.players.team.league.apiUrlPlayers)
        const height = this.convertToCentimeters(externalInfo.people[0].height)
        this.setState({
            externalInfo: externalInfo.people[0],
            playerHeight: height,
            playerAge: externalInfo.people[0].currentAge,
            birthDate: externalInfo.people[0].birthDate,
            playerWeight: this.convertToKilos(externalInfo.people[0].weight),
            flag: externalInfo.people[0].nationality,
            img: `https://nhl.bamcontent.com/images/headshots/current/168x168/${this.props.players.apiId}.jpg`,
            fetching: false
        })
    }

    convertToCentimeters = (height) => {
        const f2cm = 30.48
        const i2cm = 2.54
        let feetAndInches = height.split(' ')
        let feet = feetAndInches[0].replace(/\D/g, '')
        let inches = feetAndInches[1].replace(/\D/g, '')
        return Math.floor((feet * f2cm) + (inches * i2cm))
    }

    convertToKilos = (pounds) => {
        const p2kg = 0.45359237
        return Math.floor(p2kg * pounds)
    }

    positionToText = (position) => {
        switch(position) {
        case 'G':
            return 'Goalie'
        case 'RW':
            return 'Right Wing'
        case 'C':
            return 'Center'
        case 'LW':
            return 'Left wing'
        case 'W':
            return 'Winger'
        case 'D':
            return 'Defenseman'
        case 'LD':
            return 'Left defenseman'
        case 'RD':
            return 'Right defenseman'
        default:
            return position
        }
    }

    render() {
        const { players } = this.props
        const { playerHeight, playerWeight, playerAge, birthDate, flag, img, onErrorImg } = this.state
        if (this.state.fetching) {
            return (<Loading />)
        }
        return (
            <div>
                <img className='mx-auto d-flex rounded-circle my-5' onError={(e) => e.target.src = onErrorImg} src={img} alt={players.name} />
                <h1 className='text-center'>
                    <Flag className='rounded-circle flag' code={flag} fallback={<span>Unknown</span>} />
                    {players.name}
                </h1>
                <h3 className='text-center'>#{players.jerseyNumber} {this.positionToText(players.position)}</h3>
                <div className='row mt-5'>
                    <div className='col-12 col-md-6'>
                        <InfoContainer
                            header={'Pelaajan tiedot'}
                            rows={[
                                { head: 'Pituus', value: `${playerHeight} cm` },
                                { head: 'Paino', value: `${playerWeight} kg` },
                                { head: 'Ikä', value: playerAge },
                                { head: 'Syntymäaika', value: birthDate },
                                { head: 'Kansallisuus', value: flag }
                            ]}
                        />
                    </div>
                    <div className='col-12 col-md-6'>
                        <InfoContainer
                            header={'Turnaustiedot'}
                            rows={[
                                { head: 'Joukkue', value: players.team.name },
                                { head: 'Turnaukset', value: players.team.tournaments
                                        .map(tournament => {
                                            let link = `/tournaments/${tournament.slug}`
                                            return (<Link key={tournament._id} to={link}>{tournament.name}</Link>)
                                        })
                                },
                                { head: 'Maalit', value: players.goals.length },
                                { head: 'Syötöt', value: players.assists.length },
                                { head: 'Pisteet', value: players.goals.length + players.assists.length }
                            ]}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

export default connect(
    mapStateToProps,
    { getOnePlayer }
)(PlayerPage)
