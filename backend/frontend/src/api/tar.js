import axios from './axios.js'

const API = 'http://localhost:4000/api'

export const tarRequest = (tarea) => axios.post(`${API}/tareas`,tarea)
export const getTarRequest = (id) => axios.post(`${API}/tareas/:${id}`)