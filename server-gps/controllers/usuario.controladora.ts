import usuarios from '../models/usuario';
import { IUsuario } from '../models/usuario';



// ==========================
// Crear usuarios
//==========================

export async function CreaUser(
    nombre:string,
    apellidoP:string,
    apellidoM:string,
    email:string,
    password:string,
    rol:string,
    vehiculo:string
) {
    return usuarios.create( {
        nombre,
        apellidoP,
        apellidoM,
        email,
        password,
        rol,
        vehiculo
    })
    .then( (user: any) => {
        return user;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// ==========================
// obtener Usuarios
// ==========================

export async function GetUser () {
    return usuarios.find()
    .then( (users:any) => {
        return users;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}
// =============================
// obtener Usuario espesifico
// =============================

export async function GetUserId (id: any) {
    return usuarios.findById({_id:id}, 'nombre email rol status vehiculo')
    .then ( (user:any) => {
        return user;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// ============================
// obtener Usuarios activos
// ============================
export async function GetActiveUsers() {
    return usuarios.find({status:'ACTIVO'})
    .then( (user:any ) => {
        return user;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// ==========================
// Modificar Usuarios
// ==========================

export async function ModifyUser(id:any, usuario:IUsuario) {
    return usuarios.findByIdAndUpdate(id, usuario, {new:true})
    .then( (user:any) => {
        return user;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// ==========================
// Desactivar Usuarios
// ==========================

export async function DisableUser (id: any, stat:string) {
    return usuarios.updateOne({_id:id}, {$set: {status:stat} } )
    .then( (user:any) => {
        return user;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// ==========================
// Login de Usuarios
// ==========================

export async function LoginUser ( email: string ) {
    return usuarios.findOne( { email: email } )
    .then( ( user: any ) => {
        return user;
    })
    .catch( ( mistake: Error ) => {
        throw mistake;
    });
}