import axios from 'axios'

const url = 'http://localhost:3001/api/games'

const getAllGames = async () => {
    const response = await axios.get(url)
    return response.data
}

export default {
    getAllGames
}
