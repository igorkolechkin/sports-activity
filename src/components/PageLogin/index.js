import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styles from './index.module.scss';
import Button from '@components/UI/Button';

const initialValues = {
  name: '',
  password: ''
}

const validationSchema = yup.object({
  name: yup.string().required('Required fields'),
  password: yup.string().required('Required fields').min(5, 'Min 5 letters'),
})

const onSubmit = (value, { setSubmitting }) => {
  setTimeout(() => setSubmitting(false), 2000)
}

const Login = props => {
  return (
    <Formik
      initialValues={ initialValues }
      validationSchema={ validationSchema }
      onSubmit={ onSubmit }
    >
      {
        props => (
          <Form className={ styles.form }>
            <div className='form-group'>
              <label htmlFor='name'>Enter name</label>
              <Field name='name'
                     type='text'
                     className={[
                       'form-input',
                       props.touched.name && !props.errors.name ? 'success' : null
                     ].join(' ')}
              />
              <ErrorMessage name='name' component='div' className='warning-notice' />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Enter password</label>
              <Field name='password'
                     type='text'
                     className={[
                       'form-input',
                       props.touched.password && !props.errors.password ? 'success' : null
                     ].join(' ')}
              />
              <ErrorMessage name='password' component='div' className='warning-notice' />
            </div>

            <Button className={ styles.btn }
                    disabled={ !props.isValid || props.isSubmitting }
                    type='submit'>Login</Button>
          </Form>
        )
      }
    </Formik>
  )
}

export default Login;