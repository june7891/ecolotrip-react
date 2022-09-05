import React from 'react';
import styles from '../assets/styles/pages/Login.module.scss';
import { Link, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const Login = () => {


  const navigate = useNavigate();
  let defaultValues = {
    email: "",
    password: "",
  };

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
  });

  const submit = async (values) => {
    try {
      clearErrors();
      const response = await fetch("http://localhost/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const user = await response.json();
        console.log(user);
        navigate("/account");
      }
    } catch (error) {
      console.log(error);
      setError("generic", {
        type: "generic",
        message: "il y a eu une erreur",
      });
    }
  };


  return (
  
    <>
       <h1>Bon retour Triper !</h1>

      <div className="form">
    <form onSubmit={handleSubmit(submit)}>

        <input {...register("email")} type="email" placeholder="email" required/>
        <ErrorMessage errors={errors} name="email" />
  
        <input {...register("password")} type="password" name="password" placeholder="mot de passe" required/>
        <p className="cross" ><input className="checkbox" type="checkbox" name="check" id=""/>se souvenir de moi</p>
        <button className="btn-form" disabled={isSubmitting}>Se connecter</button>

        <div className={styles.inscription}>
        <p><a href="/">mot de passe oublié</a></p>
        <p >pas de compte ? <Link to="/signup">s'inscrire</Link></p>
        </div>
    </form>
    </div>
    </>

     

   
  )
}

export default Login