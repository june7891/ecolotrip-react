import React from 'react';
import imgOffers from '../assets/images/offres.png';
import styles from '../assets/styles/components/Travels.module.scss';

const Travels = () => {
  return (
    <>
        <div className={styles.offer}><img src={imgOffers} alt=""/></div>

        <section className={styles.travel}>
        <h2>Nos voyages les plus écolos</h2>
        <h2>Les villes les plus populaires de France</h2>
    </section>
    </>
  )
}

export default Travels;