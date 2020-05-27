import {Router,Request,Response} from 'express';
import * as Organizacion from '../controllers/organizacion.controladora';


const organizacionRoutes = Router();

// ========================================================
// Crear Organizaion
// ========================================================

organizacionRoutes.post('/', async ( req:Request, res: Response ) => {
    const body = req.body
    await Organizacion.CreateOrg(
        body.nombre,
        body.matricula,
        body.status
    )
    .then ( ( done:any ) => {
        res.status(200).json({
            ok:true,
            mensaje:'organizacion creada con exito',
            vehiculo:done
        });
    })
    .catch ( ( mistake: Error ) => {
        res.status(400).json({
            ok:false,
            mensaje:'error al crear organizacion',
            error:mistake
        });
    });
});

// ========================================================
// Obtener organizacion
// ========================================================

organizacionRoutes.get('/', async ( req:Request, res: Response ) => {
    await Organizacion.GetOrgs()
    .then ( (done:any) => {
        return res.status(200).json({
            ok:true,
            usuarios: done
        });
    })
    .catch( ( mistake:Error ) => {
        return  res.status(500).json({
            ok: false,
            mensaje: 'error al obtener organizaciones',
            error:mistake
        });
    });
});


// ========================================================
// Obtener organizacion por Id
// ========================================================

organizacionRoutes.get('/buscar', async ( req:Request, res: Response ) => {
    const id = req.headers.id;

    await Organizacion.GetOrgId(id)
    .then( ( done:any ) => {
        return res.status(200).json({
            ok:true,
            usuario:done
        });
    })
    .catch ( ( mistake:Error ) => {
        return res.status(404).json({
            ok:false,
            mensaje:'no se encontro la organizacion',
            error:mistake
        });
    });
});

// ========================================================
// Obtener organizaciones Activas
// ========================================================

organizacionRoutes.get('/activos', async ( req:Request, res: Response ) => {
    await Organizacion.GetActiveOrgs()
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
// Actualizar Organizacion
// ========================================================

organizacionRoutes.put('/', async ( req:Request, res:Response ) => {
    
    const id = req.headers.id;
    const body = req.body;
    
    await Organizacion.Modifyorg(id, body)
    .then( (done: any) => {
        return res.status(200).json({
            ok:true,
            mensaje: 'organizacion actualizada',
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
// Desactivar organizacion
// ========================================================
organizacionRoutes.put('/desactivar', async ( req:Request, res:Response ) => {
    const id = req.headers.id;
    const stat = req.body.status;

    await Organizacion.DisableOrg( id, stat ) 
    .then ( (done:any ) => {
        res.status(200).json({
            ok:true,
            mensaje: 'la organizacion ahora esta descativada',
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

export default organizacionRoutes;