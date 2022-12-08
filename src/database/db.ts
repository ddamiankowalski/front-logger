const mysql = require('mysql2');
export default class DBManager {
    constructor() {}

    private static _db: any;

    public static getInstance(): any {
      if(!this._db) {
        this._db = mysql.createPool({
          host: 'localhost',
          user: 'admin',
          password: 't4jn3h4slo',
          database: 'rapidhcm',
          waitForConnections: true,
          connectionLimit: 10,
          queueLimit: 0
        });
      }

      return this._db;
    }
}