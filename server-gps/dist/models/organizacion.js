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
var OrgSchema = new mongoose_1.Schema({
    nombre: { type: String, required: [true, 'el nombre de organizacion es requerido'] },
    matricula: { type: String, required: [true, 'la matricula es requerida'] },
    status: { type: String, default: 'ACTIVO' }
}, { collection: 'organizacion' });
exports.default = mongoose_1.default.model('Organizacion', OrgSchema);
