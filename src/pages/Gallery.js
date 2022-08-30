import React from 'react';
// import image from "https://www.pexels.com/fr-fr/photo/mer-paysage-plage-vacances-9318388/";
import styles from '../assets/styles/components/Gallery.module.scss';
import image from '../assets/images/homepage/paris.jpg';

const Gallery = () => {
  return (
    <>
        
<div className={`${styles.profil}`}>
    <h1>Ta gallerie <br></br>de souvenirs</h1>
    <div className={`${styles.profilePhotoContainer}`}>
        <div className={`${styles.photoUser}`}><img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png" alt="profile picture" /></div>
        <div className="username"></div>
    </div>
</div>
<div className={`${styles.share}`}>
    <h1>Partage tes photos !</h1>
    <button className='btn' type="submit">Partager</button>
</div>


<section className={`${styles.section1}`}>

   
<div className={`flex-fill container p-20`}>
          <div className={`contentCard`}>
            <div className={`grid`}>
              <div className={`cardContent card`}>
                <div className={`imageContainer`}>
                  <a href="/">
                    <img src={image} alt="camping" />
                  </a>
                </div>
                <div
                  className={`title d-flex flex-column justify-content-center align-items-center`}
                >
                  <h3>Titre</h3>
                </div>
              </div>
             
            </div>
          </div>
        </div>
    
     

              
               

               
           

   
       

</section>

    </>
  )
}

export default Gallery