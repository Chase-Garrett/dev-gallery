import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Project
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a project to your profile
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="projectName"
            label="Project Name"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="projectDescription"
            label="Description"
            fullWidth
            variant="standard"
          />
              <TextField
            autoFocus
            margin="dense"
            id="projectUrl"
            label="URL"
            fullWidth
            variant="standard"
          />
              <TextField
            autoFocus
            margin="dense"
            id="projectRepo"
            label="Project Repository"
            fullWidth
            variant="standard"
          />
              <TextField
            autoFocus
            margin="dense"
            id="projectScreenshot"
            label="Project Screenshot"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}