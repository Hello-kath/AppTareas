const express = require('express');
const app = express();
app.use(express.json());
const conexionDB = require('./config/db');
require('dotenv')
conexionDB();
const tareaR = require('./routes/tareaRoutes')

app.use("/api", tareaR)

const PORT = process.env.Mipuerto
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})