import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Button, Grid, TextField } from '@mui/material'
import { login, signup } from '../../api'

import styles from './styles'
import { useNavigate } from 'react-router-dom'

const useStyle = makeStyles(styles)

const LoginPage = () => {
  const classes = useStyle()
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSignup = async () => {
    try {
      await signup({ firstName, lastName, username, password, email })
      navigate('/', { replace: true })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Grid className={classes.sectionContainer}>
      <TextField
        label="First name"
        variant="standard"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last name"
        variant="standard"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Username"
        variant="standard"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="standard"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        className={classes.loginButton}
        variant="contained"
        onClick={handleSignup}
      >
        Signup
      </Button>
    </Grid>
  );
}

export default LoginPage