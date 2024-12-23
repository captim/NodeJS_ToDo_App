import React, { useEffect, useState } from "react";
import { taskService, Task } from "../../services/taskService";
import TaskListItem from "./TaskListItem";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import "./taskList.css";
import "../../assets/fonts/mainFonts.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const fetchedTasks = await taskService.getTasks();
            setTasks(fetchedTasks);
        };

        fetchTasks();
    }, []);

    const onCheckboxChange = async (id: number, isCompleted: boolean) => {
        try {
            await taskService.updateIsCompleted(id, isCompleted);
        } catch (error) {
            console.error("Failed to update task:", error);
        }
    };
    return (
        <List>
            {tasks.map((task) => (
                <>
                    <TaskListItem
                        key={task.id}
                        id={task.id!}
                        name={task.name}
                        isCompleted={task.isCompleted}
                        onCheckboxChange={onCheckboxChange}
                    />
                    <Divider/>
                </>
            ))}
        </List>
    );
};

export default TaskList;
