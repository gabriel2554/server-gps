import mongoose, {Schema, Document} from 'mongoose';


export interface IOrganizacion extends Document {
    nombe:string;
    matricula:string;
    status:string;

}

const OrgSchema: Schema = new Schema ({
    nombre: {type:String, required: [true, 'el nombre de organizacion es requerido']},
    matricula: { type: String, required:[ true, 'la matricula es requerida']},
    status: { type: String, default:'ACTIVO'}
}, {collection:'organizacion'});



export default mongoose.model<IOrganizacion>('Organizacion', OrgSchema);