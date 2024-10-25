import express from 'express'
import morgan from 'morgan'
import router from './rutas/autRutas.js'

const app = express()

app.use(express.json)
app.use(morgan('dev'))
app.use('/api',router)

export default app