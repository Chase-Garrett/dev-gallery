import { useEffect } from "react";
import { useQuery } from "@apollo/client";

import { USER_PROFILE } from "../../utils/actions";
import { QUERY_USER } from "../../utils/queries";
import { useStoreContext } from "../../utils/store-context";

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./style.scss";
import { Container } from "@mui/material";

export default function ProfileForm() {
  const [user, dispatch] = useStoreContext("user");
  const { data, loading } = useQuery(QUERY_USER);

  useEffect(() => {
    if (data && data.user) {
      dispatch({ type: USER_PROFILE, payload: data.user });
    }
  }, [data]);

  return (
    <Container className="profile-container">
      <Typography variant="h4" gutterBottom>
        Profile Infomation
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" className="Button">Save</Button>
        </Grid>
      </Grid>
    </Container>
  );
}