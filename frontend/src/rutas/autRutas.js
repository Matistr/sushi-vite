import { Router } from 'express'
import { updateProduct } from '../controlador/autControlador.js'

const router = Router()

router.post('/update',updateProduct)

export default router