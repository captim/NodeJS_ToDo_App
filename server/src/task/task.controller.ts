import { Request, Response } from 'express';
import { taskService } from "./task.service";
import { StatusCodes } from 'http-status-codes';

class TaskController {
    async getTaskById(req: Request, res: Response) {
        try {
            const id = req.params.taskId;
            const task = await taskService.getTaskById(id);
            if (!task) {
                res.status(StatusCodes.NOT_FOUND).json({ message: 'Task not found' });
            } else {
                res.status(StatusCodes.OK).json(task);
            }
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error', error: error });
        }
    }

    async getTasks(req: Request, res: Response) {
        try {
            const tasks = await taskService.getTasks();
            res.status(StatusCodes.OK).json(tasks);
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error', error: error });
        }
    }

    async createTask(req: Request, res: Response) {
        try {
            const task = req.body;
            const result = await taskService.createTask(task);
            res.status(StatusCodes.OK).json(result);
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error', error: error });
        }
    }

    async updateTask(req: Request, res: Response) {
        try {
            const task = req.body;
            const id = req.params.taskId;
            await taskService.updateTask(id, task);
            res.status(StatusCodes.OK).send();
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error', error: error });
        }
    }

    async deleteTask(req: Request, res: Response) {
        try {
            const id = req.params.taskId;
            const result = await taskService.deleteTask(id);
            res.status(StatusCodes.OK).send();
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error', error: error });
        }
    }
}

export const taskController = new TaskController();