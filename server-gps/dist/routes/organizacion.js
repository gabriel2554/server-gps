"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Organizacion = __importStar(require("../controllers/organizacion.controladora"));
var organizacionRoutes = express_1.Router();
// ========================================================
// Crear Organizaion
// ========================================================
organizacionRoutes.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                return [4 /*yield*/, Organizacion.CreateOrg(body.nombre, body.matricula, body.status)
                        .then(function (done) {
                        res.status(200).json({
                            ok: true,
                            mensaje: 'organizacion creada con exito',
                            vehiculo: done
                        });
                    })
                        .catch(function (mistake) {
                        res.status(400).json({
                            ok: false,
                            mensaje: 'error al crear organizacion',
                            error: mistake
                        });
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// ========================================================
// Obtener organizacion
// ========================================================
organizacionRoutes.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Organizacion.GetOrgs()
                    .then(function (done) {
                    return res.status(200).json({
                        ok: true,
                        usuarios: done
                    });
                })
                    .catch(function (mistake) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'error al obtener organizaciones',
                        error: mistake
                    });
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// ========================================================
// Obtener organizacion por Id
// ========================================================
organizacionRoutes.get('/buscar', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.headers.id;
                return [4 /*yield*/, Organizacion.GetOrgId(id)
                        .then(function (done) {
                        return res.status(200).json({
                            ok: true,
                            usuario: done
                        });
                    })
                        .catch(function (mistake) {
                        return res.status(404).json({
                            ok: false,
                            mensaje: 'no se encontro la organizacion',
                            error: mistake
                        });
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// ========================================================
// Obtener organizaciones Activas
// ========================================================
organizacionRoutes.get('/activos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Organizacion.GetActiveOrgs()
                    .then(function (done) {
                    res.status(200).json({
                        ok: true,
                        usuarios: done
                    });
                })
                    .catch(function (mistake) {
                    res.status(500).json({
                        ok: false,
                        error: mistake
                    });
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// ========================================================
// Actualizar Organizacion
// ========================================================
organizacionRoutes.put('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.headers.id;
                body = req.body;
                return [4 /*yield*/, Organizacion.Modifyorg(id, body)
                        .then(function (done) {
                        return res.status(200).json({
                            ok: true,
                            mensaje: 'organizacion actualizada',
                            usuario: done
                        });
                    })
                        .catch(function (mistake) {
                        return res.status(500).json({
                            ok: false,
                            error: mistake
                        });
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// ========================================================
// Desactivar organizacion
// ========================================================
organizacionRoutes.put('/desactivar', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, stat;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.headers.id;
                stat = req.body.status;
                return [4 /*yield*/, Organizacion.DisableOrg(id, stat)
                        .then(function (done) {
                        res.status(200).json({
                            ok: true,
                            mensaje: 'la organizacion ahora esta descativada',
                            usuario: done
                        });
                    })
                        .catch(function (mistake) {
                        res.status(400).json({
                            ok: false,
                            mensaje: 'error al desactivar',
                            error: mistake
                        });
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
exports.default = organizacionRoutes;
