import Dashboard from "../../components/Dashboard";
import { ProjectCard } from "../../components/Card";
import { Box, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_USERS, QUERY_USER } from "../../utils/queries";
import '../../App.scss';

export default function Homepage () {
  const { loading, data } = useQuery(QUERY_ALL_USERS)

  const [searchInput, setSearchInput] = useState({
    firstName: "",
    lastName: "",
  });

  const { data: userData, waiting } = useQuery(QUERY_USER, {
    variables: { firstName: searchInput.firstName, lastName: searchInput.lastName}
  })
  const users = data?.users || []

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }
    const response = await userData;
    console.log(response);
  }

return (
  <>
  <div className="dashboard">
    <Dashboard />
  </div>
  <div className="projectSearch">
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="First Name" variant="standard" value={searchInput.firstName} onChange={(e) => setSearchInput((prev) => ({...prev, firstName: e.target.value}))}/>
      <TextField id="standard-basic" label="Last Name" variant="standard" value={searchInput.lastName} onChange={(e) => setSearchInput((prev) => ({...prev, lastName: e.target.value}))}/>
      <Button variant='contained' sx={{width: 5}} onClick={handleFormSubmit}>Search</Button>
    </Box>
    {users.map(user => {
      return (
        <ProjectCard key={user._id} user = {user} />
      )
    })}
  </div>
  </>
)
}