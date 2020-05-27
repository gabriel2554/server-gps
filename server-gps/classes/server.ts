import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';
export default class Server {
    private static _instance: Server;
    public app: express.Application;
    public port: number ;

    public io: socketIO.Server;
    private httpserver: http.Server;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpserver = new http.Server(this.app);
        this.io = socketIO(this.httpserver);

        this.escucharSockets();
    }

    private escucharSockets(){
        this.io.on('connection', cliente => {
            console.log(`cliente conectado ${cliente}`);


        })
    }
    public static get instance() {
        return this._instance || ( this._instance = new this() );
    }

    start (callback:any) {
        this.httpserver.listen(this.port, callback);
        this.io.listen
    }
}