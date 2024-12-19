import TaskModel from './task.model';
import { Task } from './task.interface';

class TaskService {
    async getTaskById(id: string): Promise<Task | null> {
        return await TaskModel.findByPk(id);
    }

    async getTasks(): Promise<Task[] | null> {
        return await TaskModel.findAll();
    }

    async createTask(task: Task): Promise<Task | null> {
        return await TaskModel.create(task);
    }

    async updateTask(id: string, task: Task) {
        await TaskModel.update(task, {where: {id: id}});
    }
    
    async deleteTask(id: string) {
        await TaskModel.destroy({
            where: {id: id}
          });
    }
}

export const taskService = new TaskService();