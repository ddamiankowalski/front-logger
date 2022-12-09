import * as express from 'express';
import * as http from 'http';
import * as core from 'express-serve-static-core';

export default class Server {
    constructor() {}

    private static _server?: http.Server;
    private static _expressApp?: core.Express;

    public static getInstance(port?: number | string) {
        if(!this._server && !this._expressApp) {

            this._expressApp = express();
            this._server = this._expressApp.listen(port, () => {
                console.log(`front-logger server started at http://localhost: ${port}`);
            });
        }

        return this._server;
    }

    
}