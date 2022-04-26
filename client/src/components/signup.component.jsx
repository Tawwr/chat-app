import { Grid, TextField, Button, Typography } from '@mui/material';
import Logo from '../assets/logo.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = ({ toggleAuth }) => {
	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			username: Yup.string().required('Required'),
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
		// <Grid container direction='column' alignItems='center' spacing={2}>
		// 	<Grid item xs={12}>
		// 		<img src={Logo} alt='logo' />
		// 	</Grid>
		// 	<Grid item xs={12} sx={{ width: '80%' }}>
		// 		<TextField
		// 			error={
		// 				Boolean(formik.errors.username) && Boolean(formik.touched.username)
		// 			}
		// 			helperText={formik.errors.username}
		// 			name='username'
		// 			value={formik.values.username}
		// 			onChange={formik.handleChange}
		// 			onBlur={formik.handleBlur}
		// 			id='username'
		// 			label='Username'
		// 			type='text'
		// 			variant='standard'
		// 			color='success'
		// 			fullWidth
		// 		/>
		// 	</Grid>
		// 	<Grid item xs={12} sx={{ width: '80%' }}>
		// 		<TextField
		// 			error={Boolean(formik.errors.email) && Boolean(formik.touched.email)}
		// 			helperText={formik.errors.email}
		// 			name='email'
		// 			value={formik.values.email}
		// 			onChange={formik.handleChange}
		// 			onBlur={formik.handleBlur}
		// 			id='email'
		// 			label='Email'
		// 			type='email'
		// 			variant='standard'
		// 			color='success'
		// 			fullWidth
		// 		/>
		// 	</Grid>
		// 	<Grid item xs={12} sx={{ width: '80%' }}>
		// 		<TextField
		// 			error={
		// 				Boolean(formik.errors.password) && Boolean(formik.touched.password)
		// 			}
		// 			helperText={formik.errors.password}
		// 			name='password'
		// 			value={formik.values.password}
		// 			onChange={formik.handleChange}
		// 			onBlur={formik.handleBlur}
		// 			id='password'
		// 			label='Password'
		// 			type='password'
		// 			variant='standard'
		// 			color='success'
		// 			fullWidth
		// 		/>
		// 	</Grid>
		// 	<Grid item xs={12} sx={{ width: '80%' }}>
		// 		<Button
		// 			className='form-btn'
		// 			variant='contained'
		// 			sx={{ background: '#03CCBB' }}
		// 			size='large'
		// 			onClick={formik.handleSubmit}
		// 			fullWidth
		// 		>
		// 			Signup
		// 		</Button>
		// 	</Grid>
		// 	<Grid item xs={12}>
		// 		<Typography align='center' variant='subtitle2'>
		// 			Already have an account? <Button  variant="text" onClick={handleClick}>Login</Button>
		// 		</Typography>
		// 	</Grid>
		// </Grid>
		<Grid container justifyContent='center' sx={{maxWidth: '1000px', maxHeight: '80vh'}}>
			<Grid item xs={8} sx={{background: '#373759', display: {
                xs: 'none',
                md: 'block'
            }}}>
                <Grid container direction='column' alignItems='center' justifyContent='center' sx={{height: '100%', width: '100%'}}>
                    <Grid item xs={12}>
                        <img src={Logo} alt='logo' />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h3'>Hi, Let's Connect</Typography>
                    </Grid>
                </Grid>
            </Grid>
			<Grid item>
				<Grid container direction='column' alignItems='center' spacing={2}>
					<Grid item xs={12}>
						<img src={Logo} alt='logo' />
					</Grid>
					<Grid item xs={12} sx={{ width: '80%' }}>
						<TextField
							error={
								Boolean(formik.errors.username) &&
								Boolean(formik.touched.username)
							}
							helperText={formik.errors.username}
							name='username'
							value={formik.values.username}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							id='username'
							label='Username'
							type='text'
							variant='standard'
							color='success'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sx={{ width: '80%' }}>
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
						/>
					</Grid>
					<Grid item xs={12} sx={{ width: '80%' }}>
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
							Signup
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Typography align='center' variant='subtitle2'>
							Already have an account?{' '}
							<Button variant='text' onClick={handleClick}>
								Login
							</Button>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Signup;
