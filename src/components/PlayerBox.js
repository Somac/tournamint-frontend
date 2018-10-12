import React from 'react'
import { Link } from 'react-router-dom'

class PlayerBox extends React.Component {
    positionToText = (position) => {
        switch (position) {
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
        const { player } = this.props
        const onError = 'https://nhl.bamcontent.com/images/headshots/current/168x168/skater.jpg'
        let img = `https://nhl.bamcontent.com/images/headshots/current/168x168/${player.apiId}.jpg`
        return (
            <div className='col-12 col-sm-6 col-md-2'>
                <Link to={`/players/${player._id}`} >
                    <div className='box box-hover mb-3'>
                        <img className='mx-auto d-flex rounded-circle medium-img' onError={(e) => e.target.src = onError} src={img} alt={player.name} />
                        <h3 className='text-center mt-3'>#{player.jerseyNumber}</h3>
                        <p className='text-center'>{player.name}<br />
                            <small>{this.positionToText(player.position)}</small>
                        </p>

                    </div>
                </Link>
            </div>
        )
    }
}

export default PlayerBox
