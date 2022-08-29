import React from 'react';
import styles from '../assets/styles/pages/Login.module.scss';
import { Link } from "react-router-dom";

const Login = () => {

  return (
  
    <>
       <h1>Bon retour Triper !</h1>

      <div className="form">
    <form method="post" action="">

        <input type="text" name="username/email" placeholder="pseudo/email"/>
        <input type="password" name="password" placeholder="mot de passe"/>
        <p class="cross" ><input className="checkbox" type="checkbox" name="check" id=""/>se souvenir de moi</p>
        <button className="btn-form" type="submit">Se connecter</button>

        <div className={styles.inscription}>
        <p><a href="">mot de passe oublié</a></p>
        <p >pas de compte ? <Link to="/signup">s'inscrire</Link></p>
        </div>
    </form>
    </div>
    </>

     

   
  )
}

export default Login