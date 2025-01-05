import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { taskService, Task } from '../services/taskService';
import { useTasks } from "../context/TaskContext";

interface AddTaskDialogProps {
    open: boolean;
    handleClose: () => void;
}

const AddTaskDialog: React.FC<AddTaskDialogProps> = ({
    open,
    handleClose
}) => {
    const { addTask } = useTasks();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData).entries());
        const task: Task = {name: formJson.name as string, isCompleted: false};
        taskService.createTask(task)
        addTask(task);
        handleClose();
      };
    return (
        <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Task name"
            type="text"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    );
};

export default AddTaskDialog;