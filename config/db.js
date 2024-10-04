//importamos la libreria para usarla
const mongoose = require("mongoose");
require('dotenv').config();

//crear la conexion a la base
const conexionDB = async () => {
    try{
        //conexion de mi base de datos mongoAtlas
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
         );
        console.log("Conectado a la base de datos");
    } catch (e){
        console.log("error al conectar", e)
    }
};

module.exports = conexionDB;