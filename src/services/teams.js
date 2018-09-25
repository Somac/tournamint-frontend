import axios from 'axios'

const url = 'http://localhost:3001/api/teams'

const getAllTeams = async () => {
    const response = await axios.get(url)
    return response.data
}

const addTeam = async (data) => {
    const response = await axios.post(url, data)
    return response.data
}

export default {
    getAllTeams, addTeam
}
