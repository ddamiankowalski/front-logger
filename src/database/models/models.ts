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
            },
            {
                name: 'appName',
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
                name: 'appName',
                type: DataTypes.STRING,
                allowNull: false
            },
            {
                name: 'icon',
                type: DataTypes.STRING,
                allowNull: true
            },
            {
                name: 'config',
                type: DataTypes.STRING,
                allowNull: true
            },
            {
                name: 'isActive',
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        ]
    }
]