import axios from 'axios'

const url = '/api/goals'

const getAllGoals = async () => {
    const response = await axios.get(url)
    return response.data
}

const getOneGoal = async (id) => {
    const response = await axios.get(`${url}/${id}`)
    return response.data
}

const addNewGoal = async (data) => {
    const response = await axios.post(url, data)
    return response.data
}

const updateGoal = async (id, data) => {
    const response = await axios.put(`${url}/${id}`, data)
    return response.data
}

const deleteGoal = async (id) => {
    const response = await axios.delete(`${url}/${id}`)
    return response.data
}

export default {
    getAllGoals, getOneGoal, addNewGoal, deleteGoal, updateGoal
}
