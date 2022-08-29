import React from 'react';
import { Link } from "react-router-dom";

const Signup = () => {

 



  return (
    <>

    <h1>Deviens un Triper!</h1>
      <div class="form">

<form onSubmit={this.handleSubmit}>

    <input type="text" name="username" placeholder="pseudo" />
    <input type="text" name="email" placeholder="email"/>
    <input type="password" name="password" placeholder="mot de passe" />
    <input type="password" name="confirm_password" placeholder="confirme ton mot de passe"/>
    <button className = "btn-form" type="submit" >s'inscrire</button>
    <p class="connection">déjà un compte ? <Link to="/login">Se connecter</Link></p>
</form>
</div>

    </>
  )
}

export default Signup