import React from 'react';
import styles from "../assets/styles/components/Header.module.scss";
import logo from '../assets/images/logo.svg';
import login from '../assets/images/login.svg';



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
                        <a href="/">
                            <li>Login</li>
                        </a>
                        <a href="/">
                            <li>Sign Up</li>
                        </a>
                    </ul>
        </div>


  <div className={`${styles.logo}`}>
        <img src={logo} alt="logo" />
      </div>

   <div className={`${styles.loginIcon}`}>
        <img src={login} alt="login" />
      </div>

 

    </header>

      </>   
  )
   
    
}

export default Header;