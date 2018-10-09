import axios from 'axios'

const url = '/api/users'

const addUser = async (data) => {
    const response = await axios.post(url, data)
    return response.data
}

export default {
    addUser
}
