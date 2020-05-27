import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SEED } from '../global/environment';


function verificaToken ( req:Request, res:Response, next: any ) {
    const token: any = req.headers.authorization;

    verify( token, SEED, (mistake:any, decoded:any) => {
        if (mistake) {
          return res.status(401).json({
              ok: false,
              mensaje:'token incorrecto'
          });
        }
        req.body.usuario = decoded.usuario;
        
        
        next();
    });
}

export default verificaToken;