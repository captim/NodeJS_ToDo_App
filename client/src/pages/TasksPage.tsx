import TaskList from "../features/tasks/TaskList";
import Paper from '@mui/material/Paper';
import './tasksPage.css';
import '@fontsource/roboto/300.css';
function TasksPage() {
    return (
        <Paper elevation={16} className="main-container">
            <a className="header main-header">ToDo List</a>
            <TaskList/>
        </Paper>
    );
}

export default TasksPage