import DBManager from './database/db';
import Server from './server/server';

declare const module: any;
const { PORT = 3000 } = process.env;

const server = Server.getInstance(PORT);
const db = DBManager.getInstance();
db.query("SELECT * FROM user", function(err: any, rows: any, fields: any) {
    console.log(rows)
 })

/**
 * HMR functionality
 */
 if (module.hot) {
     module.hot.accept();
     module.hot.dispose(() => server!.close());
 }