import Producto from '../modelo/tasModelo.js'

export const getProducts = async (req,res) => {
    const productos = await Producto.find()
    res.json(productos)
}

export const getProduct = async (req,res) => {
    const producto = await Producto.findById(req.params.id)
    if(!producto) return res.status(404).json({Message:'Producto no encontrado'})
    res.json(producto)
}

export const createProduct = async (req,res) => {
    const {nombre,precio,stock} = req.body
    const newProduct = new Producto({
        nombre,
        precio,
        stock
    })
    const savedProduct = await newProduct.save()
    res.josn(savedProduct)
}

export const deleteProduct = async (req,res) => {
    const producto = await Producto.findByIdAndDelete(req.params.id)
    if(!producto) return res.status(404).json({Message:'Producto no encontrado'})
    res.sendStatus(204)
}

export const updateProduct = async (req,res) => {
    const producto = await Producto.findByIdAndUpdate(req.params.id)
    if(!producto) return res.status(404).json({Message:'Producto no encontrado'})
    res.json(producto)
}