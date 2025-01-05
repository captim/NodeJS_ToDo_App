import React, { useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import './taskListItem.css';

interface TaskListItemProps {
    id: number;
    name: string;
    isCompleted: boolean;
    onCheckboxChange: (id: number, isCompleted: boolean) => void;
}

const TaskListItem: React.FC<TaskListItemProps> = ({
    id,
    name,
    isCompleted,
    onCheckboxChange,
}) => {
    const [isCompletedState, setIsCompleted] = useState<boolean>(isCompleted);
    const handleCheckbox = () => {
        onCheckboxChange(id, !isCompletedState);
        setIsCompleted(!isCompletedState);
    };

    return (
        <ListItem className="task" onClick={handleCheckbox}>
            <Checkbox checked={isCompletedState}/>
            <ListItemText primary={name} className={"task-name " + (isCompletedState ? "strikethrough" : "")} 
                onClick={handleCheckbox}/>
        </ListItem>
    );
};

export default TaskListItem;
