import { models } from "./models/models";
import { Model, ModelDataDescription } from './interfaces/models.interface';

export class SequelizeDBController {
    constructor() { }

    private static modelClasses: Map<string, any> = new Map();

    public async getClass(): Promise<any> {
        const classInstance = SequelizeDBController.modelClasses.get('logs');
        const record = await classInstance.create({ logValue: 'tescior' })
        await record.save();
    }

    public async syncModelClasses(sequelizeInstance: any): Promise<any> {
        await sequelizeInstance.sync({ force: true });
        return sequelizeInstance;
    }

    /**
     * Initializes the model on the database (creates tables/drops tables etc)
     * @param sequelizeInstance 
     */
    public async initializeModel(sequelizeInstance: any): Promise<any> {
        await this.dropSequelize(sequelizeInstance);

        models.forEach(async (model: Model) => {
            SequelizeDBController.modelClasses.set(
                model.name, sequelizeInstance.define(model.name, this.getTableEntries(model))
            )
        });
        return sequelizeInstance;
    }

    /**
     * A method used to parse field configurations from model
     * @param model a single model entry
     * @returns an object with parsed table fields information
     */
    private getTableEntries(model: Model) {
        let tableEntries: any = {};

        model.data.forEach((entry: ModelDataDescription) => {
            const entryName = entry.name;
            Object.assign(tableEntries, { [entryName]: entry })
        })

        return tableEntries;
    }

    /**
     * Drops all sequelize configuration
     * @param instance sequelize instance
     */
    private async dropSequelize(instance: any) {
        await instance.drop();
    }
}