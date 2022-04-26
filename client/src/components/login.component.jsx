import { Grid, TextField, Button, Typography } from '@mui/material';
import Logo from '../assets/logo.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = ({toggleAuth}) => {
    const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Required'),
			password: Yup.string().required('Required'),
		}),
		onSubmit: values => {
			console.log(values);
		},
	});

    const handleClick = () => {
        toggleAuth()
    }
    return ( 
        <Grid container direction='column' alignItems='center' spacing={2}>
			<Grid item xs={12}>
				<img src={Logo} alt='logo' />
			</Grid>
			<Grid item xs={12} sx={{ width: '80%' }}>
				<TextField
					error={Boolean(formik.errors.email) && Boolean(formik.touched.email)}
					helperText={formik.errors.email}
					name='email'
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					id='email'
					label='Email'
					type='email'
					variant='standard'
					color='success'
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} sx={{ width: '80%' }}>
				<TextField
					error={
						Boolean(formik.errors.password) && Boolean(formik.touched.password)
					}
					helperText={formik.errors.password}
					name='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					id='password'
					label='Password'
					type='password'
					variant='standard'
					color='success'
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} sx={{ width: '80%' }}>
				<Button
					className='form-btn'
					variant='contained'
					sx={{ background: '#03CCBB' }}
					size='large'
					onClick={formik.handleSubmit}
					fullWidth
				>
					Login
				</Button>
			</Grid>
			<Grid item xs={12}>
				<Typography align='center' variant='subtitle2'>
                Don't have an account?  <Button  variant="text" onClick={handleClick}>Signup</Button> 
				</Typography>
			</Grid>
		</Grid>
     );
}
 
export default Login;