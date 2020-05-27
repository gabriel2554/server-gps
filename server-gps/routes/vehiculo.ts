import {Router,Request,Response} from 'express';
import * as vehiculo from '../controllers/vechiculo.controladora';


const vehiculoRoutes = Router();

// ========================================================
// Crear Vehiculo
// ========================================================

vehiculoRoutes.post('/', async ( req:Request, res: Response ) => {
    const body = req.body;
     
    await vehiculo.CreateCar(
        body.tipo,
        body.placas,
        body.marca,
        body.siglas,
        body.org,
        body.modelo,
        body.gps
    )
    .then ( ( done:any ) => {
        res.status(200).json({
            ok:true,
            mensaje:'vehiculo creado con exito',
            vehiculo:done
        });
    })
    .catch ( ( mistake: Error ) => {
        res.status(400).json({
            ok:false,
            mensaje:'error al crear el vehiculo',
            error:mistake
        });
    });
});

// ========================================================
// Obtener Vehiculo
// ========================================================

vehiculoRoutes.get('/', async ( req:Request, res: Response ) => {
    await vehiculo.GetCars()
    .then ( (done:any) => {
        return res.status(200).json({
            ok:true,
            usuarios: done
        });
    })
    .catch( ( mistake:Error ) => {
        return  res.status(500).json({
            ok: false,
            mensaje: 'error al obtener a los vehiculos',
            error:mistake
        });
    });
});


// ========================================================
// Obtener vehiculo por Id
// ========================================================

vehiculoRoutes.get('/buscar', async ( req:Request, res: Response ) => {
    const id = req.headers.id;

    await vehiculo.GetCarId(id)
    .then( ( done:any ) => {
        return res.status(200).json({
            ok:true,
            usuario:done
        });
    })
    .catch ( ( mistake:Error ) => {
        return res.status(404).json({
            ok:false,
            mensaje:'no se encontro al vehiculo',
            error:mistake
        });
    });
});

// ========================================================
// Obtener vehiculos Activos
// ========================================================

vehiculoRoutes.get('/activos', async ( req:Request, res: Response ) => {
    await vehiculo.GetActiveCars()
    .then ( ( done:any ) => {
        res.status(200).json({
            ok:true,
            usuarios:done
        });
    })
    .catch( ( mistake:Error ) => {
        res.status(500).json({
            ok: false,
            error:mistake    
        });
    });
});

// ========================================================
// Actualizar Vehiculo
// ========================================================

vehiculoRoutes.put('/', async ( req:Request, res:Response ) => {
    
    const id = req.headers.id;
    const body = req.body;
    
    await vehiculo.ModifyCar(id, body)
    .then( (done: any) => {
        return res.status(200).json({
            ok:true,
            mensaje: 'vehiculo actualizado',
            usuario:done
        });
    })
    .catch ( ( mistake:Error ) => {
        return res.status(500).json({
            ok:false,
            error:mistake
        });
    });
});


// ========================================================
// Desactivar Vehiculo
// ========================================================
vehiculoRoutes.put('/desactivar', async ( req:Request, res:Response ) => {
    const id = req.headers.id;
    const stat = req.body.status;

    await vehiculo.DisableCar( id, stat ) 
    .then ( (done:any ) => {
        res.status(200).json({
            ok:true,
            mensaje: 'el vehiculo ahora esta descativado',
            usuario: done
        });
    })
    .catch( ( mistake: Error ) => {
        res.status(400).json({
            ok:false,
            mensaje:'error al desactivar',
            error:mistake
        });
    });
});

export default vehiculoRoutes;