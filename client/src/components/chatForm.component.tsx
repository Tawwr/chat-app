import SendIcon from '@mui/icons-material/Send'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useFormik } from 'formik'

const ChatForm = () => {
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: (values) => {
      console.log(values)
      formik.resetForm()
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        error={
          Boolean(formik.errors.message) && Boolean(formik.touched.message)
        }
        helperText={formik.errors.message}
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="message"
        type="message"
        variant="outlined"
        color="success"
        fullWidth
        sx={{
          position: {
            xs: 'fixed',
            md: 'relative',
          },
          bottom: {
            xs: '0',
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disableRipple
                type="submit"
                disabled={!formik.values.message}
              >
                <SendIcon sx={{ color: '#6C89F4' }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  )
}

export default ChatForm
