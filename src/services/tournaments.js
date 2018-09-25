import axios from 'axios'

const url = 'http://localhost:3001/api/tournaments'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

const getOne = async (id) => {
    const response = await axios.get(`${url}/${id}`)
    return response.data
}

const addNew = async (data) => {
    const response = await axios.post(url, data)
    return response.data
}

export default {
    getAll, getOne, addNew
}
