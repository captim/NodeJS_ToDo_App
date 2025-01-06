import express from "express";
import { Sequelize } from 'sequelize';
import { taskRouter } from './task/task.route';
import TaskModel from './task/task.model';
import { errorHandler } from './middleware/errorHandler';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express ();
app.use(express.json());
app.use(errorHandler);
app.use(cors());
dotenv.config();

const PORT: number = parseInt(process.env.PORT || "3000", 10);


const sequelize: Sequelize = new Sequelize(
	process.env.DB_NAME || 'node_todo_app_scheme',
	process.env.DB_USER || 'root',
	process.env.DB_PASSWORD || 'root',
	{
	  host: process.env.DB_HOST || '127.0.0.1',
	  dialect: 'mysql',
	  port: Number(process.env.DB_PORT) || 3306,
	}
  );
TaskModel.initialize(sequelize);

sequelize
    .sync({ alter: true })
    .then(() => {
    	console.log("Sequelize Initialised!!");
        app.listen(PORT, () => {
      		app.use('/task', taskRouter)
      		console.log("Server Listening on PORT:", PORT);
    	});
  	})
  	.catch((err) => {
    	console.error("Sequelize Initialisation threw an error:", err);
  	});  