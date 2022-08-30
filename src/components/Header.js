import React from 'react';
import styles from "../assets/styles/components/Header.module.scss";
import logo from '../assets/images/logo.svg';
import login from '../assets/images/login.svg';


import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
  

   
 <header className={`${styles.header} d-flex flex-row align-items-center p-15 `}>
      
 <div className={`${styles.menuToggle}`}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className={styles.menu}>
                      
                       <li><Link to="/">Accueil</Link></li>
                       <li><Link to="/login">Login</Link></li>
                       <li><Link to="/signup">Sign Up</Link></li>
                       <li><Link to="/gallery">Gallérie photo</Link></li>
                       <li><Link to="/list">Liste utilisateurs</Link></li>
                       
                       
                    </ul>
        </div>


  <div className={`${styles.logo}`}>
        <img src={logo} alt="logo" />
      </div>

   <div className={`${styles.loginIcon}`}>
        <Link to="/login"><img src={login} alt="login" /></Link>
      </div>
 

    </header>
      </>   
  )
   
    
}

export default Header;