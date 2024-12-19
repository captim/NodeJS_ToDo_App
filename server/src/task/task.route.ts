import express from "express";
import { taskController } from "./task.controller";

export const taskRouter = express.Router()

taskRouter.get("/:taskId", taskController.getTaskById);
taskRouter.get("/", taskController.getTasks);
taskRouter.post("/", taskController.createTask);
taskRouter.put("/:taskId", taskController.updateTask);
taskRouter.delete("/:taskId", taskController.deleteTask);
