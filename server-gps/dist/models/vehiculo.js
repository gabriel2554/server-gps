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
var vehiculoSchema = new mongoose_1.Schema({
    tipo: { type: String, required: [true, 'El tipo de vehiculo es necesario'] },
    placas: { type: String, required: [true, 'Las placas son necesarias'] },
    marca: { type: String, requierd: [true, 'La marca del vehiculo es necesaria'] },
    siglas: { type: String, required: [true, 'Las siglas del conomico son necesarias'] },
    org: { type: mongoose_1.Schema.Types.ObjectId, required: [true, 'la organizacin perteneciente es necesaria'] },
    modelo: { type: Number, required: [true, 'El modelo de vehiculo es necesario'] },
    status: { type: String, default: 'ACTIVO' },
    gps: { type: String, required: [true, 'el GPS es necesario'] },
    img: { type: String, required: false }
}, { collection: 'vehiculos' });
exports.default = mongoose_1.default.model('vehiculos', vehiculoSchema);
