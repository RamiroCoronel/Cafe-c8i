import { Router } from "express";
import { borrarProducto, crearProductos, editarProducto, listarProductos, obtenerProducto } from "../controllers/producto.controllers";
import { check } from "express-validator";

const router = Router();

    router.route("/productos").get(listarProductos).post([
        check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es 1 dato obligatorio")
    .isLength({min:2, max:100})
    .withMessage("El nombre del producto debe tener entre 2 y 100 carecteres"),
    
    check("precio")
    .notEmpty()
    .withMessage("El precio es 1 dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser 1 numero")
    .custom((value)=>{
        if(value >= 1 && value <= 10000){
            return true
        }else{
            throw new Error("El precio debe entre 1 y 10000")
        }
    }),
    check("imagen")
    .notEmpty()
    .withMessage("La url de la imagen es obligatoria")
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage("debe ingresar una url valida"),
    check("categoria")
    .notEmpty()
    .withMessage("La categoria es obligatoria")
    .isIn(["Bebida caliente","Bebida fria","Dulce","Salado"])
    .withMessage("Debe ingresar una categoria valida")

],crearProductos);
router.route("/productos/:id")
.get(obtenerProducto)
.put(editarProducto)
.delete(borrarProducto)

//app.get("/prueba", (req, res)=>{
//    res.send("esto es una prueba de una peticion get")
//})

//app.delete("/prueba", (req, res)=>{ 
//    res.send("aqui tendria q borrar un objeto")
//})



export default router; 