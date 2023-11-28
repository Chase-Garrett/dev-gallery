import { useState, useEffect } from 'react';
import  Auth from '../../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ADD_PROJECT_MUTATION } from '../../utils/mutations';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const user = Auth.getProfile()
  
  const [projectInput, setProjectInput] = useState({ projectName:"", projectDescription:"", projectUrl:"", projectRepo:"", isDev: user.data.isDev});
  const { data: userData, loading } = useQuery(QUERY_USER)

// const [savedProjectIds, setSavedProjectIds] = useState(getSavedProjectIds());

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  const [addProject, { error }] = useMutation(ADD_PROJECT_MUTATION);

  // useEffect(() => {
  //   return () => saveProjectIds(savedProjectIds);
  // });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!projectInput) {
      return false;
    }
    const { data } = await addProject({variables: {...projectInput}})
    console.log(data)
    handleClose() 
  }

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Project
      </Button>
      {loading && (<div>Loading User Projects...</div>)}
      {!loading && userData?.user?.savedProjects.length === 0 && (<div>No Saved Projects</div>)}
      {!loading && userData && !!userData?.user?.savedProjects.length && (
        userData.user?.savedProjects.map((project, index) => (
          <div key={index}>{project.projectName}</div>
        ))
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a project to your profile
          </DialogContentText>
          <TextField
          value={projectInput.projectName} 
          onChange={(e) => setProjectInput((prev) => ({...prev, projectName:e.target.value}))}
            autoFocus
            margin="dense"
            id="projectName"
            label="Project Name"
            fullWidth
            variant="standard"
          />
           <TextField
            value={projectInput.projectDescription} 
            onChange={(e) => setProjectInput((prev) => ({...prev, projectDescription:e.target.value}))}
            autoFocus
            margin="dense"
            id="projectDescription"
            label="Description"
            fullWidth
            variant="standard"
          />
              <TextField
               value={projectInput.projectUrl} 
               onChange={(e) => setProjectInput((prev) => ({...prev, projectUrl:e.target.value}))}
            autoFocus
            margin="dense"
            id="projectUrl"
            label="URL"
            fullWidth
            variant="standard"
          />
              <TextField
               value={projectInput.projectRepo} 
               onChange={(e) => setProjectInput((prev) => ({...prev, projectRepo:e.target.value}))}
            autoFocus
            margin="dense"
            id="projectRepo"
            label="Project Repository"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleFormSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}