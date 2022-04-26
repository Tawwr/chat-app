import { Grid, TextField, Button, Typography, Paper } from '@mui/material';
import Logo from '../assets/logo.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = ({ toggleAuth }) => {
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
		toggleAuth();
	};
	return (
		<Grid
			container
			justifyContent='center'
			alignItems='center'
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
					justifyContent='center'
					alignItems='center'
					sx={{
						background: '#373759',
						height: '100%',
						borderRadius: '35px 0 0 35px',
					}}
				>
					<Grid item>
						<img src={Logo} alt='logo' />
						<Typography align='center' variant='h4' color='#fff'>
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
						justifyContent='center'
						alignItems='center'
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
							<img src={Logo} alt='logo' />
						</Grid>

						<Grid item>
							<TextField
								error={
									Boolean(formik.errors.email) && Boolean(formik.touched.email)
								}
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
								sx={{ marginBottom: '20px' }}
							/>

							<TextField
								error={
									Boolean(formik.errors.password) &&
									Boolean(formik.touched.password)
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
								sx={{ marginBottom: '20px' }}
							/>

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

							<Typography align='center' variant='subtitle2'>
								Don't have an account?{' '}
								<Button variant='text' onClick={handleClick}>
									Signup
								</Button>
							</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Login;
