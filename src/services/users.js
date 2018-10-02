import axios from 'axios'

const url = 'http://localhost:3001/api/users'

const addUser = async (data) => {
    const response = await axios.post(url, data)
    return response.data
}

export default {
    addUser
}
