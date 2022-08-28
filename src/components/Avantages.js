import React from 'react';
import iconPlane from '../assets/images/avion.svg';
import iconLeaf from '../assets/images/ecologie-non-3d.svg';
import iconCamera from '../assets/images/photos-non-3d.svg';
import styles from '../assets/styles/components/Avantages.module.scss';

const Avantages = () => {
  return (
    <>
         <section className={styles.avantage}>
        <h3 className='p-30'>Les avantages d'utiliser écolotrip</h3>
        <div class={`${styles.avantages} d-flex align-items-center`}>
            <div className={`${styles.possible}`}>
                <img src={iconPlane} alt="avion"/>
                <p className='my-30'>Des destinations de voyages variées et attractives</p>
            </div>
            <div className={`${styles.possible}`}>
                <img src={iconLeaf} alt="feuille"/>
                <p className='my-30'>Possibilité de rembourser son empreinte carbone</p>
            </div>
            <div className={`${styles.possible}`}>
                <img src={iconCamera} alt="camera"/>
                <p className='my-30'>Enregistrer ses photos sur son profil et faire profiter ses amis avec une présentation personnalisée</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Avantages;