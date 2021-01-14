import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, ),
  },
}))

export default function SignUp() {
  const classes = useStyles()

  // variable or storing the form data
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')

  const [fnameError, setFnameError] = useState({})
  const [lnameError, setLnameError] = useState({})
  const [emailError, setEmailError] = useState({})
  const [passwordError, setPasswordError] = useState({})
  const [cpasswordError, setCpasswordError] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()

    const isValid = formValidation()
    if (isValid) {
      setFname('')
      setLname('')
      setEmail('')
      setPassword('')
      setCpassword('')
    }
  }

  const formValidation = () => {
    const fnameError = {}
    const lnameError = {}
    const emailError = {}
    const passwordError = {}
    const cpasswordError = {}

    let isValid = true

    if (!fname.trim()) {
      fnameError.required = 'First name is required'
      isValid = false
    }
    if (!lname.trim()) {
      lnameError.required = 'Last name is required'
      isValid = false
    }

    let id = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
    if (!email || !email === id) {
      emailError.required = 'Email is invalid'
      isValid = false
    }
    if (!password.trim()) {
      passwordError.required = 'Password'
      isValid = false
    }
    if (password !== cpassword) {
      cpasswordError.require = 'Passwords do not match'
      isValid = false
    }
    setFnameError(fnameError)
    setLnameError(lnameError)
    setEmailError(emailError)
    setPasswordError(passwordError)
    setCpasswordError(cpasswordError)

    return isValid
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={onSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="fname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              {Object.keys(fnameError).map((key) => {
                return (
                  <div key={key} style={{ color: 'red' }}>
                    <h5>{fnameError[key]}</h5>
                  </div>
                )
              })}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              {Object.keys(lnameError).map((key) => {
                return (
                  <div key={key} style={{ color: 'red', marginLeft: 15 }}>
                    <h5>{lnameError[key]}</h5>
                  </div>
                )
              })}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {Object.keys(emailError).map((key) => {
                return (
                  <div key={key} style={{ color: 'red' }}>
                    <h5>{emailError[key]}</h5>
                  </div>
                )
              })}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {Object.keys(passwordError).map((key) => {
                return (
                  <div key={key} style={{ color: 'red' }}>
                    <h5>{passwordError[key]}</h5>
                  </div>
                )
              })}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
              {Object.keys(cpasswordError).map((key) => {
                return (
                  <div key={key} style={{ color: 'red' }}>
                    <h5>{cpasswordError[key]}</h5>
                  </div>
                )
              })}
            </Grid>
            {/* <div className={classes.submit}> */}
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{height:"60px"}}
          >
            Sign Up
          </Button>
          {/* </div> */}
          </Grid>
          
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
