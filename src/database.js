import mongoose from "mongoose";

const url = `mongodb://localhost:27017/cafecito-c8i`;

mongoose.connect(url);

const datosConexion = mongoose.connection;

datosConexion.once("open", ()=>{
    console.log("BD conectada");
})