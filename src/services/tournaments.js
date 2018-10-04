import axios from 'axios'
import { loadUserState } from '../localStorage'

const url = 'http://localhost:3001/api/tournaments'

const config = {
    headers: { 'Authorization': "bearer " + loadUserState().token }
}

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

const getOne = async (id) => {
    const response = await axios.get(`${url}/${id}`)
    return response.data
}

const addNew = async (data) => {
    const response = await axios.post(url, data, config)
    return response.data
}

export default {
    getAll, getOne, addNew
}
