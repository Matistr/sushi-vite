export const updateProduct = (req,res) => {
    const { nombre, precio, cantidad } = req.body
    console.log(nombre,precio,cantidad)
    res.send('Producto actualizado...')
}