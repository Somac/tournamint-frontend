import axios from 'axios'

const url = 'http://localhost:3001/api/leagues'

const getAllLeagues = async () => {
    const response = await axios.get(url)
    return response.data
}

export default {
    getAllLeagues
}