import * as express from 'express';
import * as http from 'http';
import * as core from 'express-serve-static-core';
import * as bodyParser from 'body-parser';

var SocketServer = require('ws').Server;
var cors = require('cors');

export default class LoggerServer {
    constructor() {}

    private static _server: http.Server;
    private static _expressApp: core.Express;
    private static _webSocket: any;

    public static getInstance(port?: number | string) {
        if(!LoggerServer._server && !LoggerServer._expressApp) {

            LoggerServer._expressApp = express();
            LoggerServer._expressApp.use(bodyParser.json());
            LoggerServer._expressApp.use(cors());
            LoggerServer._server = LoggerServer._expressApp.listen(port, () => {
                console.log(`front-logger server started at http://localhost: ${port}`);
            });
        }

        return this._server;
    }

    public static getWebSocketServer(): any {
        const wss = new SocketServer({ server: LoggerServer._server });

        wss.on('connection', (ws: any) => {
            console.log('[WServer]: A client connected');

            ws.on('close', () => console.log('[WServer]: A client disconnected'));

            ws.on('message', (message: any) => {
                console.log(`[WServer]: Message received: ${message}`)
            })
        })

        console.log(wss)
    }

    public static getExpressApp(): core.Express {
        return this._expressApp;
    }
}