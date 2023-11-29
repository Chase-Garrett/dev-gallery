import { useState, useEffect } from "react";
import Auth from "../../utils/auth";
import { useMutation, useQuery } from "@apollo/client";

import { USER_PROFILE } from "../../utils/actions";
import { QUERY_USER } from "../../utils/queries";
import { useStoreContext } from "../../utils/store-context";
import { ADD_PROFILE_MUTATION } from "../../utils/mutations";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Nav from "../../components/Nav";
import FormDialog from "./project";

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
  const { data: userData, loading } = useQuery(QUERY_USER);

  const [addProfile, { error }] = useMutation(ADD_PROFILE_MUTATION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!profileInput) {
      return false;
    }
    const { data } = await addProfile({ variables: { ...profileInput } });
    console.log(data);
    handleClose();
  };
  // const [user, dispatch] = useStoreContext("user");
  // const { data, loading } = useQuery(QUERY_USER);

  // useEffect(() => {
  //   if (data && data.user) {
  //     dispatch({ type: USER_PROFILE, payload: data.user });
  //   }
  // }, [data]);

  return (
    <>
      <Nav />

      <Container className="profile-container">
        <Typography variant="h4" gutterBottom>
          Profile Infomation
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              value={profileInput.firstName}
              onChange={(e) =>
                setProfileInput((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
            <TextField
              value={profileInput.lastName}
              onChange={(e) =>
                setProfileInput((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
            <TextField
              value={profileInput.email}
              onChange={(e) =>
                setProfileInput((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              variant="standard"
            />
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
          </Grid>
          <Grid>
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
            <Button variant="contained" className="Button" onClick={handleFormSubmit}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
