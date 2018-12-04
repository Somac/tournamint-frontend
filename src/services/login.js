import axios from 'axios'
import { apiUrl } from '../config'

const url = `${apiUrl}/api/login`

const login = async (credentials) => {
  const response = await axios.post(url, credentials)
  return response.data
}

export default { login }
