import { Grid, TextField, Button, Typography, InputAdornment,IconButton  } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ChatForm = () => {
	const formik = useFormik({
		initialValues: {
			message: '',
		},
		validationSchema: Yup.object({
			message: Yup.string().required('Required'),
		}),
		onSubmit: values => {
			console.log(values);
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
			variant='standard'
			color='success'
			fullWidth
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton disableRipple onClick={formik.handleSubmit}>
                            <SendIcon sx={{ color: '#6C89F4' }} />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
		/>
	);
};

export default ChatForm;
