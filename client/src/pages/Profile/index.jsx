import { useState, useEffect } from "react";
import Auth from "../../utils/auth";
import { useMutation, useQuery } from "@apollo/client";

import { USER_PROFILE } from "../../utils/actions";
import { QUERY_USER, QUERY_ALL_USERS } from "../../utils/queries";
import { useStoreContext } from "../../utils/store-context";
import { ADD_PROFILE_MUTATION } from "../../utils/mutations";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Nav from "../../components/Nav";
import FormDialog from "./project";
import { ProjectCard } from "../../components/Card";

import "./style.scss";
import { Container } from "@mui/material";

export default function ProfileForm() {
  const user = Auth.getProfile();
  const [profileInput, setProfileInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    isDev: user.data.isDev,
  });

  const { loading, data } = useQuery(QUERY_ALL_USERS);
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const users = data?.users || [];

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  console.log(users);

  return (
    <>
      <Nav />

      <Container className="profile-container">
        <Typography variant="h4" gutterBottom>
          Profile Infomation
        </Typography>
        <Grid >
          <Grid>
            <div className="projectCard">
              {users.map((user) => {
                return <ProjectCard key={user._id} user={user} />;
              })}
            </div>
          </Grid>
          <Grid>
            <TextField
              value={profileInput.bio}
              onChange={(e) =>
                setProfileInput((prev) => ({
                  ...prev,
                  bio: e.target.value,
                }))
              }
              className="bio-box"
              id="bio"
              name="bio"
              label="Bio"
              multiline
              rows={4}
            />
            <TextField
              className="skills-box"
              id="outlined-multiline-static"
              label="Skills"
              multiline
              rows={4}
            />
            <Grid item xs={12}>
              <FormDialog />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              className="Button"
              onClick={handleFormSubmit}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}