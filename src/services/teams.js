import axios from 'axios'
import { apiUrl } from '../config'

const url = `${apiUrl}/api/teams`

const getAllTeams = async () => {
    const response = await axios.get(url)
    return response.data
}

const getOneTeam = async (slug) => {
    const response = await axios.get(`${url}/${slug}`)
    return response.data
}

const addTeam = async (data) => {
    const response = await axios.post(url, data)
    return response.data
}

export default {
    getAllTeams, addTeam, getOneTeam
}
