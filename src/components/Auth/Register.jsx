import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "./store/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo-no-background.png";

const defaultTheme = createTheme();

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);
  console.log(error);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let obj = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(signup(obj));

    if (user.email) {
      navigate("/signin");
    }
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
      <ThemeProvider theme={defaultTheme}>
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
                Sign up
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
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='confirm-password'
                  label='Confirm Password'
                  type='password'
                  id='confirmpassword'
                  autoComplete='current-password'
                />
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Remember me'
                />
                <Button
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
                  Sign Up
                </Button>
                <Typography variant='subtitle1' color='error'>
                  {error}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
