import DBSequelize from './database/sequelize';
import LoggerServer from './server/server';
import { SequelizeDBController } from './database/dbcontroller';
import { RoutingManager } from './api/manager';
import { router } from './api/routes';
import { SocketManager } from './server/socketmanager';

declare const module: any;
const { PORT = 3000 } = process.env;

const sequelizeController = new SequelizeDBController();
DBSequelize.getSequelize()
    .then(sequelize => sequelizeController.initializeModel(sequelize))
    .then(sequelize => sequelizeController.syncModelClasses(sequelize))

const server = LoggerServer.getInstance(PORT);
const express = LoggerServer.getExpressApp();

const ws = LoggerServer.getWebSocketServer();
const socketManager = new SocketManager(ws, sequelizeController)


RoutingManager.initialize(express, sequelizeController);
RoutingManager.configureRoutes('/', router);

/**
 * HMR functionality
 */
 if (module.hot) {
     module.hot.accept();
     module.hot.dispose(() => server!.close());
 }