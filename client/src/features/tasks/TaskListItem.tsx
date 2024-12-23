import React, { useState } from "react";
import "./taskListItem.css";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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
        <ListItem className="task">
            <input
                type="checkbox"
                checked={isCompletedState}
                onClick={handleCheckbox}
            />
            <ListItemText primary={name} />
        </ListItem>
    );
};

export default TaskListItem;
