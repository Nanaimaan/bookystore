import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { authListener, login } from "./store/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo-no-background.png";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let obj = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(obj));
    navigate("/");
    dispatch(authListener());
  };

  return (
    <div
      className='auth-container'
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* //   <ThemeProvider theme={defaultTheme}> */}
      <Grid
        container
        component='main'
        sx={{
          height: "70vh",
          width: "80%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={4}
          sm={12}
          md={5}
          component={Paper}
          elevation={12}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <img src={logo} width='40px' height='40px' />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                sx={{
                  "&:active": {
                    borderColor: "your-focused-color-here",
                  },
                }}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                className='button'
                type='submit'
                fullWidth
                variant='contained'
                sx={{
                  mt: 3,
                  mb: 2,
                  padding: "10px",
                  backgroundColor: "#21272D",
                  fontWeight: "600",
                }}
              >
                Sign In
              </Button>
              <Typography variant='subtitle1' color='error'>
                {error}
              </Typography>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2' sx={{ color: "#21272D" }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#' variant='body2' sx={{ color: "#21272D" }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* // </ThemeProvider> */}
    </div>
  );
}
