import React from 'react'
import { apiUrl } from '../config'

const Team = ({ team, away, grayscale }) => {
  const homeAway = away ? 'Away' : 'Home'
  const grayscaleStyle = grayscale ? 'losing-team' : ''
  return (
    <div className='col-3 col-md-4'>
      <p className='text-center'><b>{homeAway}</b></p>
      <img className={`mx-auto d-flex match-box-img ${grayscaleStyle}`} src={`${apiUrl}/${team.logo}`} alt={team.name}></img>
      <p className='text-center'>{team.name}</p>
    </div >
  )
}

export default Team
