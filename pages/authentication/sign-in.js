import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';
import ImageSlider from './slider';

const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const SignInPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleSubmit(values);
    },
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
  };

  return (
    <Box
      component='form'
      onSubmit={formik.handleSubmit}
      className='h-screen bg-zinc-50 bg-gradient-login'
      noValidate
    >
      <Box className='w-full h-16 items-center p-3 flex justify-between'>
        <Typography variant='h5' className='text-white'>
          Logo Here
        </Typography>
        {/* <Button className='text-white'>Sign Up</Button> */}
      </Box>
      <Box className='flex flex-row items-center justify-around'>
        <Box className='md:py-16 lg:py-16'>
          <Grid className='w-96 items-center p-1 shadow-xl mb-2 bg-white'>
            <Typography variant='h5' className='text-center text-inherit'>
              Sign In
            </Typography>
          </Grid>
          <Card className='w-96 items-center p-3 shadow-xl'>
            <Grid container className='mt-5' gap={2}>
              <Grid item='true' className='w-full'>
                <TextField
                  fullWidth
                  size='small'
                  label='Email'
                  type='email'
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  required
                  error={formik.touched.email && !!formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item='true' className='w-full'>
                <TextField
                  fullWidth
                  size='small'
                  label='Password'
                  type='password'
                  name='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  required
                  error={formik.touched.password && !!formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid
                item='true'
                className='w-full flex items-center justify-between xs:flex-col md:flex-row'
              >
                <Box className='text-sm text-gray-500'>
                  <FormControl size='small'>
                    <InputLabel id='language'>Language</InputLabel>
                    <Select
                      id='language'
                      label='Language'
                      size='small'
                      name='language'
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    >
                      <MenuItem value='en'>English</MenuItem>
                      <MenuItem value='fr'>French</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box className='text-sm text-gray-500'>
                  <a href='/forgot-password'>Forgot Password?</a>
                </Box>
              </Grid>
              <Grid item='true' className='w-full'>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    />
                  }
                  label='Remember Me'
                />
              </Grid>
              <Grid item='true' className='w-full'>
                <Button
                  fullWidth
                  variant='contained'
                  type='submit'
                  className='bg-[#013A6B]'
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item='true' className='w-full flex justify-center'>
                Do not have an account?
                <Link
                  href='/authentication/sign-up'
                  className='text-blue-500 ml-1'
                >
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <Box className='w-96 md:py-16 lg:py-16'>
          <ImageSlider />
        </Box>
      </Box>
    </Box>
  );
};

export default SignInPage;
