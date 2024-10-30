import app from './app.js'
import { connectDB } from './bd.js'

connectDB()
app.listen(3500)
console.log('Servidor en el Puerto 3500')