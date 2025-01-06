import React, { createContext, useContext, useState, useEffect } from "react";
import { taskService, Task } from "../services/taskService";

interface TaskContextProps {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (task: Task) => void;
    fetchTasks: () => Promise<void>;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const fetchTasks = async () => {
        try {
            const fetchedTasks = await taskService.getTasks();
            setTasks(fetchedTasks);
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        }
    };

    const addTask = (task: Task) => {
        taskService.createTask(task);
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const removeTask = (task: Task) => {
        if (!task.id) {
            console.error("Failed to delete tasks: task id is empty");
        }
        taskService.deleteTask(task.id as number);
        setTasks((prevTasks) => prevTasks.filter((item) => item.id !== task.id));
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, fetchTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
};