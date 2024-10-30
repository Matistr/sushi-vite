import express from 'express'
import morgan from 'morgan'
import router from './rutas/autRutas.js'
import tarRutas from './rutas/rutasProductos.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api',router)
app.use('/api',tarRutas)

export default app