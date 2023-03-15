import mongoose from "mongoose";

//const url = `mongodb://localhost:27017/cafecito-c8i`; //BD local
const url ="mongodb+srv://RamaCoronel:kokin1042@cluster0.mplop5p.mongodb.net/Cafe-c8i"
//const url = `mongodb://localhost:27017/cafecito-c8i`;

mongoose.connect(url);

const datosConexion = mongoose.connection;

datosConexion.once("open", ()=>{
    console.log("BD conectada");
})