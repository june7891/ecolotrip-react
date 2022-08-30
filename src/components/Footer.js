import React from 'react';
import styles from '../assets/styles/components/Footer.module.scss';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className={`${styles.footer} d-flex align-items-center`}>
   <Link to="/contact">Nous contacter</Link>
        <a href="/">Informations légales</a>
        <a href="/">A propos de nous</a>
        <a href="/">Télécharger l'application</a>
        <a href="/">Mentions légales</a>
        <a href="/">Aide et support</a>

    </footer>

    </>
  )
}

export default Footer;