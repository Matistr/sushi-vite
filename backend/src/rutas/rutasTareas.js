import { Router } from 'express'
import {
    getTareas,
    getTarea,
    createTarea,
    deleteTarea,
    updateTarea

} from '../controlador/tareasControl.js'

const router = Router()

router.get('/tareas',getTareas)
router.get('/tareas/:id',getTarea)
router.post('/tareas',createTarea)
router.delete('/tareas/:id',deleteTarea)
router.put('/tareas/:id',updateTarea)

export default router