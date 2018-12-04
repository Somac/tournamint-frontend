import axios from 'axios'
import { apiUrl } from '../config'

const url = `${apiUrl}/api/users`

const addUser = async (data) => {
  const response = await axios.post(url, data)
  return response.data
}

export default {
  addUser
}
