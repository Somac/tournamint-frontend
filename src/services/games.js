import axios from 'axios'
import { apiUrl } from '../config'

const url = `${apiUrl}/api/games`

const getAllGames = async () => {
  const response = await axios.get(url)
  return response.data
}

const getOneGame = async (id) => {
  const response = await axios.get(`${url}/${id}`)
  return response.data
}

const addNewGame = async (data) => {
  const response = await axios.post(url, data)
  return response.data
}

export default {
  getAllGames, getOneGame, addNewGame
}
