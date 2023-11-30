import { useState } from "react";
import { useMutation } from "@apollo/client";

import { LOGIN_MUTATION } from "../../utils/mutations";
import Auth from "../../utils/auth";

// test
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import "./style.scss";
import Nav from "../Nav";

export default function Login() {
  const [login, { loading }] = useMutation(LOGIN_MUTATION);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logingHandler = async (evt) => {
    evt.preventDefault();

    try {
      const { data } = await login({
        variables: { email, password },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Nav />
    <form id="login-form" onSubmit={logingHandler}>
      <div>
        <label htmlFor="login-form-email"></label>
        <input
          id="login-form-email"
          type="text"
          placeholder="Email"
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </div>
      <div>
        <label htmlFor="login-form-password"></label>
        <input
          id="login-form-password"
          type="text"
          placeholder="Password"
          onChange={(evt) => setPassword(evt.target.value)}
        />
      </div>
      <div>
        <button type="submit" disabled={loading}>
          Login
        </button>
      </div>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link color="inherit" href="/signup" variant="body2">
            Don't have an account? Sign Up!
          </Link>
        </Grid>
      </Grid>
    </form>
    </>
  );
}
