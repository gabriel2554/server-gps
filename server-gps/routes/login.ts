import { Request, Response, Router } from 'express';
import { IUsuario } from '../models/usuario';
import bcrypt from 'bcrypt';
import * as log from '../controllers/usuario.controladora';
import jwd from 'jsonwebtoken';
import { SEED } from '../global/environment';


const loginRoutes = Router();


// =====================================
//  Login de usuario
// =====================================

loginRoutes.post('/', async ( req:Request, res:Response ) => {
    const body = req.body;
    console.log(body);

    await log.LoginUser(
        body.email
    )
    .then( ( usuarioDB: any ) => {
        if (!usuarioDB) {
            res.status(404).json({
                ok:false,
                mensaje: 'usuario inexistente'
            });
        }

        if (!bcrypt.compareSync ( body.password, usuarioDB.password ) ) {
            res.status(401).json({
                ok: false,
                mensaje: 'contraseña incorrecta'
            });
        }

        const token = jwd.sign( { usuario: usuarioDB}, SEED, {expiresIn: 1400});

        usuarioDB.password = 'no in this life ;)';

        return res.status(200).json({
            ok: true,
            mensaje: 'inicio de sesion exitoso',
            usuario: usuarioDB,
            token: token
        });

    })
    .catch ( ( mistake:Error ) => {
        return res.status(500).json({
            ok: false,
            error: mistake
        });
    });

});

export default loginRoutes;