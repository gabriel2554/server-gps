"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var mongooseUniqueValidator = require("mongoose-unique-validator");
var rolesValidos = {
    values: ['ADMIN_ROL', 'DRIVER_ROL'],
    message: '{VALUE} no es un rol permitido'
};
var usuarioSchema = new mongoose_1.Schema({
    nombre: { type: String, required: [true, 'El nombre de usuario es requerido'], uppercase: true },
    apellidoP: { type: String, required: false, uppercase: true },
    apellidoM: { type: String, required: false, uppercase: true },
    email: { type: String, unique: true, required: [true, 'El email es requerido'], lowercase: true },
    password: { type: String, required: [true, 'El password es requerido'] },
    rol: { type: String, enum: rolesValidos, default: 'DRIVER_ROL' },
    status: { type: String, default: 'ACTIVO', required: true },
    vehiculo: { type: mongoose_1.Schema.Types.ObjectId, required: [true, 'el vehiculo asignado es necesario'] },
    img: { type: String, required: false }
}, { collection: 'usuarios' });
usuarioSchema.plugin(mongooseUniqueValidator, { message: '{PATH} debe ser unico' });
exports.default = mongoose_1.default.model('Usuario', usuarioSchema);
