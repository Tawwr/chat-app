import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import * as Yup from 'yup'
import { signUpAPI } from '../api'
import { setToken, setUser, signOut } from '../redux/reducers/app'
import { RootState } from '../redux/store'

type SignupProps = {
  toggleAuth: () => void
}

const Signup = ({ toggleAuth }: SignupProps) => {
  const user = useSelector((state: RootState) => state.app.user)
  const [error, setError] = useState<string>('')
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const data = await signUpAPI(values)
        dispatch(setUser(data))
        dispatch(setToken(data.token))
        setError('')
      } catch (error) {
        dispatch(signOut())
        setError('something went wrong')
      }
    },
  })

  const handleClick = () => {
    toggleAuth()
  }
  if (user) return <Navigate to="/" replace />

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ padding: '16px', height: '600px' }}
    >
      <Grid
        item
        md={5}
        sx={{
          height: '100%',
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            background: '#373759',
            height: '100%',
            borderRadius: '35px 0 0 35px',
          }}
        >
          <Grid item>
            <img src={require('../assets/logo.svg').default} alt="logo" />
            <Typography align="center" variant="h4" color="#fff">
              Welcome Back!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} sx={{ height: '100%' }}>
        <Paper
          sx={{
            height: '100%',
            padding: '0 30px',
            borderRadius: '0 35px  35px 0',
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100%' }}
          >
            <Grid
              item
              sx={{
                display: {
                  xs: 'block',
                  md: 'none',
                },
              }}
            >
              <img src={require('../assets/logo.svg').default} alt="logo" />
            </Grid>
            <form onSubmit={formik.handleSubmit}>
              <Grid item>
                <TextField
                  error={
                    Boolean(formik.errors.username) &&
                    Boolean(formik.touched.username)
                  }
                  helperText={formik.errors.username}
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="Username"
                  type="text"
                  variant="standard"
                  color="success"
                  fullWidth
                  sx={{ marginBottom: '20px' }}
                />
                <TextField
                  error={
                    Boolean(formik.errors.firstName) &&
                    Boolean(formik.touched.firstName)
                  }
                  helperText={formik.errors.firstName}
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="firstName"
                  type="text"
                  variant="standard"
                  color="success"
                  fullWidth
                  sx={{ marginBottom: '20px' }}
                />
                <TextField
                  error={
                    Boolean(formik.errors.lastName) &&
                    Boolean(formik.touched.lastName)
                  }
                  helperText={formik.errors.lastName}
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="lastName"
                  type="text"
                  variant="standard"
                  color="success"
                  fullWidth
                  sx={{ marginBottom: '20px' }}
                />
                <TextField
                  error={
                    Boolean(formik.errors.email) &&
                    Boolean(formik.touched.email)
                  }
                  helperText={formik.errors.email}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="email"
                  label="Email"
                  type="email"
                  variant="standard"
                  color="success"
                  fullWidth
                  sx={{ marginBottom: '20px' }}
                />

                <TextField
                  error={
                    Boolean(formik.errors.password) &&
                    Boolean(formik.touched.password)
                  }
                  helperText={formik.errors.password}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="password"
                  label="Password"
                  type="password"
                  variant="standard"
                  color="success"
                  fullWidth
                  sx={{ marginBottom: '20px' }}
                />

                <Button
                  className="form-btn"
                  variant="contained"
                  sx={{ background: '#03CCBB' }}
                  size="large"
                  fullWidth
                  type="submit"
                >
                  Signup
                </Button>
                {error && (
                  <Typography
                    align="center"
                    variant="body1"
                    color="error"
                    sx={{ marginTop: '20px' }}
                  >
                    {error}
                  </Typography>
                )}

                <Typography align="center" variant="subtitle2">
                  Already have an account?{' '}
                  <Button variant="text" onClick={handleClick}>
                    Login
                  </Button>
                </Typography>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Signup
