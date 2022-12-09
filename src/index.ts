import DBSequelize from './database/sequelize';
import Server from './server/server';
import { SequelizeDBController } from './database/dbcontroller';

declare const module: any;
const { PORT = 3000 } = process.env;

const server = Server.getInstance(PORT);
const sequelizeController = new SequelizeDBController();

DBSequelize.getSequelize()
    .then(sequelize => sequelizeController.initializeModel(sequelize))
    .then(sequelize => sequelizeController.syncModelClasses(sequelize))
    .then(() => sequelizeController.getClass())

/**
 * HMR functionality
 */
 if (module.hot) {
     module.hot.accept();
     module.hot.dispose(() => server!.close());
 }