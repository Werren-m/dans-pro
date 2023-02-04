import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import styles from './styles'

import { login, setToken } from '../../api'

const useStyle = makeStyles(styles)

const LoginPage = () => {
  const classes = useStyle()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await login({ username, password })
      localStorage.setItem('token', response.data.token)
      setToken(response.data.token)
      navigate('/joblist', { replace: true })
    } catch (err) {
      alert('Invalid username or password')
    }
  }

  const handleSignupRedirect = () => {
    navigate('/signup', { replace: true } )
  }

  return (
    <Grid className={classes.sectionContainer}>
      <TextField
        label="Username"
        variant="standard"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="standard"
        value={password}
        required
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Grid className={classes.actionButtonContainer} gap={2}>
        <Button
          className={classes.signupButton}
          variant="contained"
          onClick={handleSignupRedirect}
        >
          Signup
        </Button>
        <Button
          className={classes.loginButton}
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  )
}

export default LoginPage