import { SequelizeDBController } from "../database/dbcontroller";

export class SocketManager {
    constructor(webSocketServer: any, sequelizeController: SequelizeDBController) {
        this._webSocketServer = webSocketServer;
        this._sequelizeController = sequelizeController;

        this._webSocketServer.on('connection', (ws: any) => {
            console.log('[WServer]: A client connected');

            ws.on('close', () => console.log('[WServer]: A client disconnected'));

            ws.on('message', async (message: any) => {
                const payload = JSON.parse(message);
                const { appName, logValue } = payload;
                console.log(appName, logValue)
                console.log(`[WServer]: Message received: ${appName}, ${logValue}`)

                const classInstance = this._sequelizeController.getClass('logs');
                const record = await classInstance.create({ appName, logValue });
                await record.save();
            })
        })
    }

    private _webSocketServer: any;
    private _sequelizeController: SequelizeDBController;
}