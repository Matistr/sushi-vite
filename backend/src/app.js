import express from 'express'
import morgan from 'morgan'
import router from './rutas/autRutas.js'
import tarRutas from './rutas/tasRutas.js'
import cors from 'cors'

const app = express()
app.use(cors({
    origen:'http://localhost:5173',
    credentials:true
}))
app.use(morgan('dev'))
app.use(express.json())

app.use('/api',router)
app.use('/api',tarRutas)

export default app