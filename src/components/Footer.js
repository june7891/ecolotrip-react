import React from 'react';
import styles from '../assets/styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <>
    <footer className={`${styles.footer} d-flex align-items-center`}>
        <a href="/">Nous contacter</a>
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