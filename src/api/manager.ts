import * as core from 'express-serve-static-core';
import { SequelizeDBController } from '../database/dbcontroller';

export class RoutingManager {
    constructor() {}

    private static _express: core.Express;
    private static _dbController: SequelizeDBController;

    public static initialize(express: core.Express, dbController: SequelizeDBController) {
        RoutingManager._express = express;
        RoutingManager._dbController = dbController;
    }

    public static configureRoutes(prefix: string, configuration: any): void {
        this._express?.use(prefix, configuration);
    }

    public static getDBController(): SequelizeDBController {
        return this._dbController;
    }
}