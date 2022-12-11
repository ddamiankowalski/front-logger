import * as express from 'express';
import { RoutingManager } from './manager';

export const router = express.Router();

/**
 * Middleware for now only console log
 */
router.use((req: any, res: any, next: any) => {
    console.log('Time: ', Date.now());
    next();
})

/**
 * Will be used to serve static files
 */
router.get('/', (req, res) => {
    res.send('Birds home page')
})

/**
 * Posts a log with a message and saves it to the database
 */
router.post('/log', async (req, res) => {
    const dbController = RoutingManager.getDBController();
    const classInstance = dbController.getClass('logs');
    
    const record = await classInstance.create({ logValue: req.body.message, appName: req.body.appName });
    await record.save();

    res.json({ status: 'success', message: 'log added succesfully' });
})

/**
 * Gets all logs and returns
 */
router.get('/log/:appName?', async (req, res) => {
    const dbController = RoutingManager.getDBController();
    const classInstance = dbController.getClass('logs');

    try {
        const appName = req.params.appName;
        if(!appName) {
            throw new Error('An error occured')
        }
        const logsAll = await classInstance.findAll({ where: { appName } });
        res.json(logsAll)
    } catch(err) {
        res.status(500)
        res.json({ status: 500, message: err })
    }
})

/**
 * Gets all app configurations
 */
router.get('/apps', async (req, res) => {
    const dbController = RoutingManager.getDBController();
    const classInstance = dbController.getClass('appconfig');

    try {
        const appsAll = await classInstance.findAll();
        res.json(appsAll);
    } catch(err) {
        res.status(500)
        res.json({ status: 500, message: err })
    }
})

/**
 * Posts a new app configuration
 */
router.post('/app/:appName?', async (req, res) => {
    const dbController = RoutingManager.getDBController();
    const classInstance = dbController.getClass('appconfig');

    try {
        const record = await classInstance.create({ appName: req.params.appName });
        await record.save();
        res.json({ status: 'success', message: 'new app added succesfully' });
    } catch(err) {
        res.status(500)
        res.json({ status: 500, message: err })
    }

})