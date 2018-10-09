import axios from 'axios'

const url = '/api/players'

const getPlayers = async () => {
    const response = await axios.get(url)
    return response.data
}

const getOnePlayer = async (id) => {
    const response = await axios.get(`${url}/${id}`)
    return response.data
}

const getExternalInfo = async (id, url) => {
    const response = await axios.get(`${url}/${id}`)
    return response.data
}

export default { getPlayers, getOnePlayer, getExternalInfo }
