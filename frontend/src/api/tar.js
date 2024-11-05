import axios from './axios.js'

export const getTareas = () => axios.get('/Tareas')
export const getTarea = (id) => axios.get('/Tareas/${id}')
export const crearTareas = (tarea) => axios.post('/Tareas')
export const updateTareas = (tarea) => axios.put('/Tareas/${tarea._id}')
export const borrarTareas = (id) => axios.delete('/Tareas/${id}')