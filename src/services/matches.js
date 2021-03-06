import axios from 'axios'
import { apiUrl } from '../config'

const url = `${apiUrl}/api/matches`

const tournamentMatchUrl = (id) => {
  return `${apiUrl}/api/tournaments/${id}/matches`
}

const getAllMatches = async () => {
  const response = await axios.get(url)
  return response.data
}

const getOneMatch = async (slug) => {
  const response = await axios.get(`${url}/${slug}`)
  return response.data
}

const getTournamentMatches = async (id) => {
  const response = await axios.get(tournamentMatchUrl(id))
  return response.data
}

const completeMatch = async (id, data) => {
  const response = await axios.put(`${url}/${id}/complete`, data)
  return response.data
}

const openMatch = async (id) => {
  const response = await axios.put(`${url}/${id}/open`)
  return response.data
}

export default {
  getAllMatches, getOneMatch, getTournamentMatches, completeMatch, openMatch
}
