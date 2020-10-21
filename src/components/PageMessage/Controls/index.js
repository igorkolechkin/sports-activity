import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Button from '@components/UI/Button';
import styles from './index.module.scss';

const Controls = props => {
  const initialValues = {
    messageText: ''
  }

  const validationSchema = yup.object({
    messageText: yup.string().required('Required fields')
  })

  const onSubmit = (value, { setSubmitting, resetForm }) => {
    props.addNewMessage(value.messageText);
    setSubmitting(false);
    resetForm();
  }

  return (
    <Formik
      initialValues={ initialValues }
      validationSchema={ validationSchema }
      onSubmit={ onSubmit }
    >
      {
        props => (
          <Form className={ styles.block }>
            <div className={ styles.textWrapper }>
              <label htmlFor='messageText'>Enter message</label>
              <Field name='messageText'
                     type='text'
                     as='textarea'
                     className={ styles.text }
              />
              <ErrorMessage name='messageText' component='div' className='warning-notice' />
            </div>

            <Button className={ styles.btn }
                    disabled={ props.isSubmitting }
                    type='submit'>Send</Button>
          </Form>
        )
      }
    </Formik>
  )
}

export default Controls;