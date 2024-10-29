import Tarea from '../modelo/tasModelo.js'

export const getTareas = async (req,res) => {
    const tareas = await Tarea.find()
    res.json(tareas)
}

export const getTarea = async (req,res) => {
    const tarea = await Tarea.findById(req.params.id)
    if(!tarea) return res.status(404).json({Message: 'Tarea no encontrada'})
    res.json(tarea)
}

export const createTarea = async (req,res) => {
    const {titulo,descripcion,fecha} = req.body
    const newTarea = new Tarea({
        titulo,
        descripcion,
        fecha
    })
    const savedTarea = await newTarea.save()
    res.json(savedTarea)
}

export const deleteTarea = async (req,res) => {
    const tarea = await Tarea.findByIdAndDelete(req.params.id)
    if(!tarea) return res.status(404).json({Message: 'Tarea no encontrada'})
    res.sendStatus(204)
}

export const updateTarea = async (req,res) => {
    const tarea = await Tarea.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!tarea) return res.status(404).json({Message: 'Tarea no encontrada'})
    res.json(tarea)
}