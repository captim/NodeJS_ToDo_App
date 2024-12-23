import { Sequelize, Model, DataTypes } from 'sequelize';
import { Task } from './task.interface';

export default class TaskModel extends Model<Task> implements Task {
    public id!: number;
    public name!: string;
    public isCompleted!: boolean;

    static initialize(sequelize: Sequelize): void {
        TaskModel.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                isCompleted: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: 'tasks',
            }
        );
    }
}