import Server from './classes/server';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { SERVER_PORT, DB_url } from './global/environment';


//importacion de rutas
import organizacionRoutes from './routes/organizacion';
import vehiculoRoutes from './routes/vehiculo';
import usuarioRoutes from './routes/usuario';
import loginRoutes from './routes/login';

// instancia de servidor http
const server = Server.instance;

// uso de body parser

server.app.use(bodyParser.urlencoded({extended:true}) );
server.app.use(bodyParser.json());

//poner en uso cors
server.app.use(cors ({origin: true, credentials:true } ) )


//seteo de rutas
server.app.use('/organizacion', organizacionRoutes);
server.app.use('/vehiculos',vehiculoRoutes);
server.app.use('/usuario',usuarioRoutes);
server.app.use('/login', loginRoutes);


// conexion con base de datos MongoDB

mongoose.connect(`mongodb://${DB_url}`, {
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
},
(err) => {
    if (err) throw err;
    const DB = DB_url.split('/');
    const DB_Name = DB[DB.length -1];
    console.log( `conectado a la base de datos ${DB_Name}`);
})
// levantamiento de servidor
server.start( () => {
    console.log(`Servidor corriendo en ${SERVER_PORT}`);
})