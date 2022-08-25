import React from "react";
import imgOffers from "../assets/images/offres.png";
import styles from "../assets/styles/components/Travels.module.scss";
import imgCamping from "../assets/images/homepage/camping.jpg";
import imgHiking from "../assets/images/homepage/hiking.jpg";
import imgBus from "../assets/images/homepage/bus.jpg";
import imgParis from "../assets/images/homepage/paris.jpg";
import imgBordeaux from "../assets/images/homepage/bordeaux.jpg";
import imgMarseille from "../assets/images/homepage/marseille.jpg";

const Travels = () => {
  return (
    <>
      <div className={styles.offer}>
        <img src={imgOffers} alt="" />
      </div>

      <section className={`${styles.travel} `}>
        <h2>Nos voyages les plus écolos</h2>
        <div className={`flex-fill container p-20`}>
          <div className={styles.contentCard}>
            <div className={styles.grid}>
              <div className={`${styles.cardContent} card`}>
                <div className={`${styles.imageContainer}`}>
                  <a href="/">
                    <img src={imgCamping} alt="camping" />
                  </a>
                </div>
                <div
                  className={`${styles.title} d-flex flex-column justify-content-center align-items-center`}
                >
                  <h3>Camping</h3>
                </div>
              </div>
              <div className={`${styles.cardContent} card`}>
                <div className={`${styles.imageContainer}`}>
                  <a href="/">
                    <img src={imgHiking}  alt="hiking" />
                  </a>
                </div>
                <div
                  className={`${styles.title} d-flex flex-column justify-content-center align-items-center`}
                >
                  <h3>Randonée</h3>
                </div>
              </div>
              <div className={`${styles.cardContent} card`}>
                <div className={`${styles.imageContainer}`}>
                  <a href="/">
                    <img src={imgBus}  alt="bus" />
                  </a>
                </div>
                <div
                  className={`${styles.title} d-flex flex-column justify-content-center align-items-center`}
                >
                  <h3>Bus</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>Les villes les plus populaires de France</h2>
     
        <div className={`flex-fill container p-20`}>
          <div className={styles.contentCard}>
            <div className={styles.grid}>
              <div className={`${styles.cardContent} card`}>
                <div className={`${styles.imageContainer}`}>
                  <a href="/">
                    <img src={imgParis} alt="paris" />
                  </a>
                </div>
                <div
                  className={`${styles.title} d-flex flex-column justify-content-center align-items-center`}
                >
                  <h3>Paris</h3>
                </div>
              </div>
              <div className={`${styles.cardContent} card`}>
                <div className={`${styles.imageContainer}`}>
                  <a href="/">
                    <img src={imgBordeaux}  alt="bordeaux" />
                  </a>
                </div>
                <div
                  className={`${styles.title} d-flex flex-column justify-content-center align-items-center`}
                >
                  <h3>Bordeaux</h3>
                </div>
              </div>
              <div className={`${styles.cardContent} card`}>
                <div className={`${styles.imageContainer}`}>
                  <a href="/">
                    <img src={imgMarseille}  alt="marseille" />
                  </a>
                </div>
                <div
                  className={`${styles.title} d-flex flex-column justify-content-center align-items-center`}
                >
                  <h3>Marseille</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Travels;
