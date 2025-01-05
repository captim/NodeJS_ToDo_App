import * as React from 'react';
import TaskList from "../features/tasks/TaskList";
import Paper from '@mui/material/Paper';
import './tasksPage.css';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddTaskDialog from '../components/AddTaskDialog';

function TasksPage() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Paper elevation={16} className="main-container">
            <Typography variant="h3" className="name">ToDo List</Typography>
            <TaskList/>
            <div className="fab-add-button-container">
                <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                    <AddIcon />
                </Fab>
            </div>
            <AddTaskDialog open={open} handleClose={handleClose}/>
        </Paper>
    );
}

export default TasksPage