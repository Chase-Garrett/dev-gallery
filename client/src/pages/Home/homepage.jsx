//import Dashboard from "../../components/Dashboard";
import { ProjectCard } from "../../components/Card";
import { Box, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_USERS, QUERY_USER } from "../../utils/queries";
import '../../App.scss';
import Nav from "../../components/Nav";

export default function Homepage () {
  const { loading, data } = useQuery(QUERY_ALL_USERS)
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const users = data?.users || []

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  }

  console.log(users)


return (
  <>
  <Nav />
  
  <div className="projectSearch">
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Developers" variant="standard" />
      <Button variant='contained' sx={{width: 5}} onClick={handleFormSubmit}>Search</Button>
    </Box>
  </div>
  <div className="projectCard">
    {users.map(user => {
      return (
        <ProjectCard key={user._id} user = {user} />
      )
    })}
  </div>
  </>
)
}