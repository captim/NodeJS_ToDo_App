import express from "express";
import { Sequelize } from 'sequelize';
import { taskRouter } from './task/task.route';
import TaskModel from './task/task.model';
import { errorHandler } from './middleware/errorHandler';
import cors from 'cors';

const app = express ();
app.use(express.json());
app.use(errorHandler);
app.use(cors());
const PORT: number = parseInt(process.env.PORT || "3000", 10);

const sequelize: Sequelize = new Sequelize('node_todo_app_scheme', 'root', 'root', {
	host: '127.0.0.1',
	dialect: 'mysql',
	port: 3306,
});

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