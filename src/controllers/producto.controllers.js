import { json } from "express";
import Producto from "../models/producto"

export const listarProductos = async(req, res)=>{ 
    try {
        //buscar en la BD la collection de productos
        const productos = await Producto.find();
        //envio la respuesta al frontend
        res.status(200).json(productos );    
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:"Error al buscar los productos"
        })
    }
}

export const obtenerProducto = async(req, res)=>{ 
    try {
   //extraer el id de la ruta
console.log(req.params.id)
   //buscar en la BD el producto q coincida con el id
const productoBuscado = await Producto.findById(req.params.id)   

   //responder con el producto encontrado
res.status(200).json(productoBuscado);    
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:"Error no se encontro el producto buscado"
        })
    }
}

export const crearProductos =async(req, res)=>{ 
try { console.log(req.body)
    //tomar body y validarlo
    //guardar ese objeto en la BD
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
        mensaje:"EL producto fue creado correctamente"
    })
    
    
} catch (error) {
    console.log(error);
    res.status(404).json({
        mensaje:"ocurrio un error al intentar agregar un producto"
    })
}
    
}

export const editarProducto = async(req, res)=>{
    try {
        //extraer el parametro de la ruta y los datos del objeto
        //validad los datos y luego solicitar a la BD actualizar el producto
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        //responder al frontend
        res.status(200).json({
            mensaje:"El producto pudo ser editado correctamente"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error al intentar editar 1 producto"
        })
    }
}

export const borrarProducto = async(req, res)=>{
    try {
       //buscar el id de la ruta y luego pedir a la BD ese producto
       await Producto.findByIdAndDelete(req.params.id);
       //enviar respuesta frontend
       res.status(200).json({
        mensaje: "El producto fue borrado correctamente"
       })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar borrar 1 producto"
        })
    }
}