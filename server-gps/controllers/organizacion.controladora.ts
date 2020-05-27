import organizacion, { IOrganizacion } from '../models/organizacion';



// ==========================
// Crear organizacion
//==========================

export async function CreateOrg(
    nombre:string,
    matricula:string,
    status:string
) {
    return organizacion.create( {
        nombre,
        matricula,
        status
    })
    .then( (org: any) => {
        return org;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// ==========================
// obtener Organizacion
// ==========================

export async function GetOrgs () {
    return organizacion.find()
    .then( (orgs:any) => {
        return orgs;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}
// ====================================
// obtener Organizacion espesifica
// ====================================

export async function GetOrgId (id: any) {
    return organizacion.findById({_id:id}, 'matricula')
    .then ( (orgs:any) => {
        return orgs;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// =================================
// obtener organizaciones activas
// =================================
export async function GetActiveOrgs() {
    return organizacion.find({status:'ACTIVO'})
    .then( (org:any ) => {
        return org;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// ==========================
// Modificar Organizacion
// ==========================

export async function Modifyorg(id:any, org:IOrganizacion) {
    return organizacion.findByIdAndUpdate(id, org, {new:true})
    .then( (org:any) => {
        return org;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// ==========================
// Desactivar Organizacion
// ==========================

export async function DisableOrg (id: any, stat:string) {
    return organizacion.updateOne({_id:id}, {$set: {status:stat} } )
    .then( (car:any) => {
        return car;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}
