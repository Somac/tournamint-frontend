import axios from 'axios'
import { apiUrl } from '../config'

const url = `${apiUrl}/api/players`

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

const addPlayer = async (data) => {
  const response = await axios.post(url, data)
  return response.data
}

export default { getPlayers, getOnePlayer, getExternalInfo, addPlayer }
