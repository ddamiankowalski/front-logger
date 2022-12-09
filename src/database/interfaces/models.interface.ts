import { AbstractDataTypeConstructor } from "sequelize"

export interface Model {
    name: string
    data: Array<ModelDataDescription>
}

export interface ModelDataDescription {
    name?: any,
    type?: AbstractDataTypeConstructor,
    defaultValue?: AbstractDataTypeConstructor,
    primaryKey?: boolean,
    allowNull?: boolean
}