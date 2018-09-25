import axios from 'axios'

const url = 'http://localhost:3001/api/leagues'

const getAllLeagues = async () => {
    const response = await axios.get(url)
    return response.data
}

const addLeague = async (data) => {
    const response = await axios.post(url, data)
    return response.data
}

export default {
    getAllLeagues, addLeague
}
