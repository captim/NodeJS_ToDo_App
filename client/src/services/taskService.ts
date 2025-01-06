import axios from 'axios';

const BASE_URL = (process.env.REACT_APP_API_URL || 'http://localhost:3000/') + 'task';
export interface Task {
  id?: number;
  name: string;
  isCompleted: boolean;
}

export const taskService = {
  async getTasks(): Promise<Task[]> {
    const response = await axios.get<Task[]>(BASE_URL);
    return response.data;
  },

  async getTaskById(id: number): Promise<Task> {
    const response = await axios.get<Task>(`${BASE_URL}/${id}`);
    return response.data;
  },

  async createTask(task: Task): Promise<Task> {
    const response = await axios.post<Task>(BASE_URL, task);
    return response.data;
  },

  async updateTask(id: number, updatedTask: Task): Promise<void> {
    await axios.put(`${BASE_URL}/${id}`, updatedTask);
  },

  async updateIsCompleted(id: number, isCompleted: boolean): Promise<void> {
    await axios.put(`${BASE_URL}/${id}`, {isCompleted: isCompleted});
  },

  async deleteTask(id: number): Promise<void> {
    await axios.delete(`${BASE_URL}/${id}`);
  },
};