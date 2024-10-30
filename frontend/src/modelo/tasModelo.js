import mongoose from 'mongoose'

const productoSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
    }
},{
    timestamps:true
})

export default mongoose.model('producto',productoSchema)