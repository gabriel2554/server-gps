import vehiculos from '../models/vehiculo';
import { IVehiculo } from '../models/vehiculo';



// ==========================
// Crear vehiculos
//==========================

export async function CreateCar(
    tipo: string,
    placas:string,
    marca: string,
    siglas: string,
    org: string,
    modelo:number,
    gps:string
) {
    return vehiculos.create( {
        tipo,
        placas,
        marca,
        siglas,
        org,
        modelo,
        gps
    })
    .then( (car: any) => {
        return car;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// ==========================
// obtener vehiculos
// ==========================

export async function GetCars () {
    return vehiculos.find()
    .then( (cars:any) => {
        return cars;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}
// =============================
// obtener Vehiculo espesifico
// =============================

export async function GetCarId (id: any) {
    return vehiculos.findById({_id:id}, 'placas siglas org modelo status gps')
    .then ( (cars:any) => {
        return cars;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// ============================
// obtener Vehiculos activos
// ============================
export async function GetActiveCars() {
    return vehiculos.find({status:'ACTIVO'})
    .then( (user:any ) => {
        return user;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// ==========================
// Modificar Vehiculos
// ==========================

export async function ModifyCar(id:any, vehiculo:IVehiculo) {
    return vehiculos.findByIdAndUpdate(id, vehiculo, {new:true})
    .then( (car:any) => {
        return car;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}

// ==========================
// Desactivar Vehiculos
// ==========================

export async function DisableCar (id: any, stat:string) {
    return vehiculos.updateOne({_id:id}, {$set: {status:stat} } )
    .then( (car:any) => {
        return car;
    })
    .catch( (mistake:Error) => {
        throw mistake;
    });
}
