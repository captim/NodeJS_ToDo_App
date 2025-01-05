import React from "react";
import { taskService } from "../../services/taskService";
import { useTasks } from "../../context/TaskContext";
import TaskListItem from "./TaskListItem";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import './taskList.css';
const TaskList: React.FC = () => {
    const { tasks } = useTasks();


    const onCheckboxChange = async (id: number, isCompleted: boolean) => {
        try {
            await taskService.updateIsCompleted(id, isCompleted);
        } catch (error) {
            console.error("Failed to update task:", error);
        }
    };
    return (
        <div className="task-list-container">
            <List className="task-list">
            {tasks.map((task, index) => (
                <>
                    <TaskListItem
                        key={task.id}
                        id={task.id!}
                        name={task.name}
                        isCompleted={task.isCompleted}
                        onCheckboxChange={onCheckboxChange}
                    />
                    {index != tasks.length - 1 ? <Divider/> : ""}
                </>
            ))}
        </List>
        </div>
    );
};

export default TaskList;
