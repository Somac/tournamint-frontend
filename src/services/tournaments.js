import axios from 'axios'

const url = 'http://localhost:3001/api/tournaments'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

export default {
    getAll
}