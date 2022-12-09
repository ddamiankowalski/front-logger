import { config } from "./config/db.config";
const { Sequelize } = require('sequelize');

export default class {
    constructor() {}

    private static _sequelizeInstance: any | undefined;

    public static async getSequelize(): Promise<any> {
      const { database, user, password, host, dialect } = config;
      this._sequelizeInstance = await new Sequelize(database, user, password, { host, dialect, logging: console.log })
      
      return this._sequelizeInstance.authenticate()
        .then(() => this._sequelizeInstance)
        .catch((err: any) => console.log(err));
    }
}