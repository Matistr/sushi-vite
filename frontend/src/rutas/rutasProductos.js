import { Router } from 'express'
import { 
    getProduct,
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
} from '../controlador/tareasControl.js'

const router = Router()

router.get('/productos',getProducts)
router.get('/productos/:id',getProduct)
router.post('/productos',createProduct)
router.delete('/productos/:id',deleteProduct)
router.put('/productos/:id',updateProduct)

export default router