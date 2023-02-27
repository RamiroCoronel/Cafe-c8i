import { Router } from "express";
import { crearProductos, editarProducto, listarProductos, obtenerProducto } from "../controllers/producto.controllers";

const router = Router();

router.route("/productos").get(listarProductos).post(crearProductos);
router.route("/productos/:id")
.get(obtenerProducto)
.put(editarProducto)


//app.get("/prueba", (req, res)=>{
//    res.send("esto es una prueba de una peticion get")
//})

//app.delete("/prueba", (req, res)=>{ 
//    res.send("aqui tendria q borrar un objeto")
//})



export default router; 