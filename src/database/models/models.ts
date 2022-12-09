import { DataTypes } from "sequelize";
import { Model } from "../interfaces/models.interface";

export const models: Array<Model> = [
    {
        name: 'logs',
        data: [
            {
                name: 'id',
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            {
                name: 'logValue',
                type: DataTypes.STRING,
                allowNull: false
            }
        ]
    },
    {
        name: 'appconfig',
        data: [
            {
                name: 'id',
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            {
                name: 'configKey',
                type: DataTypes.STRING,
                allowNull: false
            },
            {
                name: 'configValue',
                type: DataTypes.STRING,
                allowNull: false
            },
            {
                name: 'isActive',
                type: DataTypes.BOOLEAN
            }
        ]
    }
]