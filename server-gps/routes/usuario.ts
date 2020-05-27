import {Router,Request,Response} from 'express';
import bcrypt from 'bcrypt';
import * as usuario from '../controllers/usuario.controladora';


const usuarioRoutes = Router();

// ========================================================
// Crear Usuario
// ========================================================

usuarioRoutes.post('/', async ( req:Request, res: Response ) => {
    const body = req.body
    await usuario.CreaUser(
        body.nombre,
        body.apellidoP,
        body.apellidoM,
        body.email,
        bcrypt.hashSync( body.password, 10),
        body.rol,
        body.vehiculo
    )
    .then( (done: any) => {
        return res.status(200).json({
            ok:true,
            mensaje:'usuario registrado con exito',
            usuario: done
        });
    })
    .catch ( (mistake:Error) => {
        return res.status(500).json({
            ok:false,
            mensaje: 'error al crear al usuario',
            error:mistake
        });
    });

});

// ========================================================
// Obtener Usuario
// ========================================================

usuarioRoutes.get('/', async ( req:Request, res: Response ) => {
    await usuario.GetUser()
    .then ( (done:any) => {
        return res.status(200).json({
            ok:true,
            usuarios: done
        });
    })
    .catch( ( mistake:Error ) => {
        return  res.status(500).json({
            ok: false,
            mensaje: 'error al obtener a los usuarios',
            error:mistake
        });
    });
});


// ========================================================
// Obtener Usuario por Id
// ========================================================

usuarioRoutes.get('/buscar', async ( req:Request, res: Response ) => {
    const id = req.headers.id;

    await usuario.GetUserId(id)
    .then( ( done:any ) => {
        return res.status(200).json({
            ok:true,
            usuario:done
        });
    })
    .catch ( ( mistake:Error ) => {
        return res.status(404).json({
            ok:false,
            mensaje:'no se encontro al usuario',
            error:mistake
        });
    });
});

// ========================================================
// Obtener Usuarios Activos
// ========================================================

usuarioRoutes.get('/activos', async ( req:Request, res: Response ) => {
    await usuario.GetActiveUsers()
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
// Actualizar Usuario
// ========================================================

usuarioRoutes.put('/', async ( req:Request, res:Response ) => {
    
    const id = req.headers.id;
    const body = req.body;
    
    await usuario.ModifyUser(id, body)
    .then( (done: any) => {
        return res.status(200).json({
            ok:true,
            mensaje: 'usaurio actualizado',
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
// Desactivar Usuario
// ========================================================
usuarioRoutes.put('/desactivar', async ( req:Request, res:Response ) => {
    const id = req.headers.id;
    const stat = req.body.status;

    await usuario.DisableUser( id, stat ) 
    .then ( (done:any ) => {
        res.status(200).json({
            ok:true,
            mensaje: 'el usuario ahora esta descativado',
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

export default usuarioRoutes;