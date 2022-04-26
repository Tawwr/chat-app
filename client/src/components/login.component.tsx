import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import * as Yup from 'yup'
import { signInAPI } from '../api'
import { setToken, setUser, signOut } from '../redux/reducers/app'
import { RootState } from '../redux/store'

type LoginProps = {
  toggleAuth: () => void
}
const Login = ({ toggleAuth }: LoginProps) => {
  const user = useSelector((state: RootState) => state.app.user)
  const [error, setError] = useState<string>('')
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const data = await signInAPI({ ...values })
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
                  type="submit"
                  fullWidth
                >
                  Login
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
                  Don't have an account?{' '}
                  <Button variant="text" onClick={handleClick}>
                    Signup
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

export default Login
