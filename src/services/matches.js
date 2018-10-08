import axios from 'axios'

const url = 'http://localhost:3001/api/matches'
const tournamentMatchUrl = (id) => {
    return `http://localhost:3001/api/tournaments/${id}/matches`
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

const completeMatch = async (id) => {
    const response = await axios.put(`${url}/${id}/complete`)
    return response.data
}

export default {
    getAllMatches, getOneMatch, getTournamentMatches, completeMatch
}