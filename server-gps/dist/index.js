"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./classes/server"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var environment_1 = require("./global/environment");
//importacion de rutas
var organizacion_1 = __importDefault(require("./routes/organizacion"));
var vehiculo_1 = __importDefault(require("./routes/vehiculo"));
var usuario_1 = __importDefault(require("./routes/usuario"));
var login_1 = __importDefault(require("./routes/login"));
// instancia de servidor http
var server = server_1.default.instance;
// uso de body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//poner en uso cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
//seteo de rutas
server.app.use('/organizacion', organizacion_1.default);
server.app.use('/vehiculos', vehiculo_1.default);
server.app.use('/usuario', usuario_1.default);
server.app.use('/login', login_1.default);
// conexion con base de datos MongoDB
mongoose_1.default.connect("mongodb://" + environment_1.DB_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err) {
    if (err)
        throw err;
    var DB = environment_1.DB_url.split('/');
    var DB_Name = DB[DB.length - 1];
    console.log("conectado a la base de datos " + DB_Name);
});
// levantamiento de servidor
server.start(function () {
    console.log("Servidor corriendo en " + environment_1.SERVER_PORT);
});
