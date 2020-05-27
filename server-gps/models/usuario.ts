import mongoose, {Document,model,Schema, Types} from 'mongoose';
import mongooseUniqueValidator = require ('mongoose-unique-validator');


export interface IUsuario extends Document {
    nombre: string;
    apellidoP: string;
    apellidoM: string;
    email: string;
    password: string;
    rol:string;
    status:string;
    vheiculo:string
    img?:string;
}

const rolesValidos = {
    values: [ 'ADMIN_ROL', 'DRIVER_ROL' ],
    message: '{VALUE} no es un rol permitido'
}

const usuarioSchema: Schema = new Schema ({
    nombre: { type: String, required: [ true, 'El nombre de usuario es requerido'], uppercase: true },
    apellidoP: { type: String, required: false, uppercase: true },
    apellidoM: { type: String, required: false, uppercase: true },
    email: { type: String, unique: true, required: [ true, 'El email es requerido'], lowercase: true },
    password: { type: String, required: [ true, 'El password es requerido'] },
    rol: { type: String, enum:rolesValidos, default:'DRIVER_ROL' },
    status: {type: String, default:'ACTIVO', required: true},
    vehiculo: { type: Schema.Types.ObjectId, required: [ true, 'el vehiculo asignado es necesario'] },
    img: {type: String, required: false}
}, { collection: 'usuarios' } );

usuarioSchema.plugin(mongooseUniqueValidator, { message: '{PATH} debe ser unico' } );

export default mongoose.model<IUsuario>('Usuario', usuarioSchema);

