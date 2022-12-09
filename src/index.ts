import DBSequelize from './database/sequelize';
import Server from './server/server';
import { SequelizeDBController } from './database/dbcontroller';
import { RoutingManager } from './api/manager';
import { router } from './api/routes';

declare const module: any;
const { PORT = 3000 } = process.env;

const sequelizeController = new SequelizeDBController();
DBSequelize.getSequelize()
    .then(sequelize => sequelizeController.initializeModel(sequelize))
    .then(sequelize => sequelizeController.syncModelClasses(sequelize))

const server = Server.getInstance(PORT);
const express = Server.getExpressApp();

RoutingManager.initialize(express, sequelizeController);
RoutingManager.configureRoutes('/', router);

/**
 * HMR functionality
 */
 if (module.hot) {
     module.hot.accept();
     module.hot.dispose(() => server!.close());
 }