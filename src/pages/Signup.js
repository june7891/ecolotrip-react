import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { TextField } from '../components/TextField';

const Signup = () => {
  const validate = Yup.object({
  username: Yup.string()
  .max(15, 'Must be 15 characters or less')
  .required('Required'),
email: Yup.string()
  .email('Email is invalid')
  .required('Email is required'),
password: Yup.string()
  .min(6, 'Password must be at least 6 charaters')
  .required('Password is required'),
confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Password must match')
  .required('Confirm password is required'),
})



  return (
  
  <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={data => {
        console.log(data)
         
        let formData = new FormData();
        formData.append('username', data.username)
        formData.append('email', data.email)
        formData.append('password', data.password)
  
        axios({
            method: 'post',
            url: 'http://localhost/login-system/inscription',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            console.log(response)
            alert('New User Successfully Added.');  
        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
         
      }}>

{formik => (

<>
    <h1>Deviens un Triper!</h1>

      <div className="form">

        <Form>
            <TextField label="Username" name="username" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className = "btn-form" type="submit" >s'inscrire</button>
            <p className="connection">déjà un compte ? <Link to="/login">Se connecter</Link></p>
        </Form>
      </div>
      </>

)}
</Formik>

    
  )
}

export default Signup