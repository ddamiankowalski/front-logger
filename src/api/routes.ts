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
    
    const record = await classInstance.create({ logValue: req.body.message });
    await record.save();

    res.json({ status: 'success', message: 'log added succesfully' });
})

/**
 * Gets all logs and returns
 */
router.get('/log', async (req, res) => {
    const dbController = RoutingManager.getDBController();
    const classInstance = dbController.getClass('logs');

    const logsAll = await classInstance.findAll();
    
    res.json(logsAll)
})