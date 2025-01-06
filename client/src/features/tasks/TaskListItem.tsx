import React, { useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import './taskListItem.css';
import { useTasks } from "../../context/TaskContext";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Task } from '../../services/taskService';

interface TaskListItemProps {
    task: Task;
    onCheckboxChange: (id: number, isCompleted: boolean) => void;
}

const TaskListItem: React.FC<TaskListItemProps> = ({
    task,
    onCheckboxChange,
}) => {
    const { removeTask } = useTasks();
    const [isCompletedState, setIsCompleted] = useState<boolean>(task.isCompleted);
    const handleCheckbox = () => {
        onCheckboxChange(task.id as number, !isCompletedState);
        setIsCompleted(!isCompletedState);
    };

    const handleDeleteButton = () => {
        removeTask(task);
    };

    return (
        <ListItem className="task" onClick={handleCheckbox}>
            <Checkbox checked={isCompletedState}/>
            <ListItemText primary={task.name} className={"task-name " + (isCompletedState ? "strikethrough" : "")} 
                onClick={handleCheckbox}/>
            <Button variant="outlined" color="error" onClick={handleDeleteButton}><DeleteIcon/></Button>
        </ListItem>
    );
};

export default TaskListItem;
