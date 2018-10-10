import axios from 'axios'
import { apiUrl } from '../config'

const url = `${apiUrl}/api/leagues`

const getAllLeagues = async () => {
    const response = await axios.get(url)
    return response.data
}

const addLeague = async (data) => {
    const response = await axios.post(url, data)
    return response.data
}

const getOneLeague = async (id) =>{
    const response = await axios.get(`${url}/${id}`)
    return response.data
}

const getExternalTeams = async (url) => {
    const response = await axios.get(url)
    return response.data
} 

export default {
    getAllLeagues, addLeague, getOneLeague, getExternalTeams
}
