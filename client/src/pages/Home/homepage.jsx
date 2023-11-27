import Dashboard from "../../components/Dashboard";
import { ProjectCard } from "../../components/Card";
import { Box, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_USERS, QUERY_USER } from "../../utils/queries";

export default function Homepage () {
  const { loading, data } = useQuery(QUERY_USER)
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
      <TextField id="standard-basic" label="Developers" variant="standard" />
      <Button variant='outlined' sx={{width: 5}} onClick={handleFormSubmit}>Search</Button>
    </Box>
  </div>
  <div className="projectCard">
    <ProjectCard />
  </div>
  </>
)
}