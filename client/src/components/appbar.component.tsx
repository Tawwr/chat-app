import { Box, Grid, Typography, Avatar, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../redux/reducers/app'
import { RootState } from '../redux/store'

type AppBarProps = {
  title: string | JSX.Element
}
const Appbar = ({ title }: AppBarProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const dispatch = useDispatch()
  //const user = useSelector((state: RootState) => state.app.user)
  const user = true
  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth)
    })
  }, [screenWidth])

  return (
    <Box
      component="div"
      sx={{
        background: '#373759',
        height: {
          xs: '28px',
          md: '32px',
        },
        position: 'sticky',
        top: '0',
        left: '0',
        borderRadius: '0 0 35px 35px',
        padding: '15px',
        zIndex: '1',
      }}
    >
      {screenWidth > 768 ? (
        <Grid container justifyContent="space-between">
          <Grid item>
            <img
              src={require('../assets/logo.svg').default}
              alt="logo"
              width="30"
              style={{ marginRight: '8px' }}
            />
            <Typography component="span" variant="h6" color="#fff">
              Connect
            </Typography>
          </Grid>
          <Grid item>
            {user && (
              <Grid
                container
                justifyContent="space-around"
                sx={{ width: '200px' }}
              >
                <Grid item>
                  <Avatar
                    alt="Mahmoud"
                    src="user-img.png"
                    sx={{ width: 36, height: 36 }}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="warning"
                    size="small"
                    onClick={() => dispatch(signOut())}
                  >
                    Sign out
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6" color="#fff">
          {title}
        </Typography>
      )}
    </Box>
  )
}

export default Appbar
