//Esto es el archivo de ajustes para el servidor 
require("dotenv").config();

//Invocando librerias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usuarioRouters = require("./routers/UsuarioRoutes");
const soporteRouters = require("./routers/SoporteRoutes");
const resennaRouters = require("./routers/ResennaRoutes");
const objetoRouters = require("./routers/ObjetoRoutes");
const pagoRouters = require("./routers/PagoRoutes");
const reservaRouters = require("./routers/ReservaRoutes");
const notificacionRouters = require("./routers/NotificacionRoutes");
const reporteFraudeRouters = require("./routers/ReporteFraudeRoutes");

// 
const app = express();

//Middleware esto es para el req y respon
app.use(express.json());
app.use(cors());

//Obtener el string de conexion env
const mongoURi = process.env.MONGO_URI;

//Conectarnos a una base de datos, NOSQL
mongoose.connect(mongoURi)
.then( ()=> console.log("Conectado"))
.catch( err => console.error("Error al conectar:", err));

app.use("/Usuario", usuarioRouters);
app.use("/Soporte", soporteRouters);
app.use("/Resenna", resennaRouters);
app.use("/Objeto", objetoRouters);
app.use("/Pago", pagoRouters);
app.use("/Reserva", reservaRouters);
app.use("/Notificacion", notificacionRouters);
app.use("/ReporteFraude", reporteFraudeRouters);


//Inciar el servidor

const PORT = process.env.PORT || 6000; //este es el puerto del API no de la base de datos
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
