import { Grid, TextField, Button, Typography, InputAdornment,IconButton  } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ChatForm = () => {
	const formik = useFormik({
		initialValues: {
			message: '',
		},
		onSubmit: values => {
			console.log(values);
            formik.resetForm();
		},
	});
	return (
		<TextField
			error={Boolean(formik.errors.message) && Boolean(formik.touched.message)}
			helperText={formik.errors.message}
			name='message'
			value={formik.values.message}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			id='message'
			type='message'
			variant='outlined'
			color='success'
			fullWidth
            sx={{
                position: 'fixed', bottom: '15px',
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton disableRipple onClick={formik.handleSubmit} disabled={!formik.values.message}>
                            <SendIcon sx={{ color: '#6C89F4' }} />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
		/>
	);
};

export default ChatForm;
