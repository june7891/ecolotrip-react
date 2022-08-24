import React from 'react'
import Carousel from 'better-react-carousel';
import imgCountryside from '../assets/images/campagne.svg';
import imgSea from '../assets/images/mer.svg';
import imgCar from '../assets/images/voiture.svg';
import imgCity from '../assets/images/ville.svg';
import imgMountain from '../assets/images/montagne.svg';
import imgForest from '../assets/images/foret.svg';
import imgPlane from '../assets/images/avion.svg';
import imgBoat from '../assets/images/bateau.svg';
import imgCamping from '../assets/images/camping.svg';
import styles from '../assets/styles/components/Slider.module.scss'

const Slider = () => {
  return (
    <>
      <div className={styles.caroussel} >

        <Carousel cols={6} rows={1} gap={20} loop={true}>
      <Carousel.Item>
        <a href="/"><img width="100%" src={imgCountryside} alt="campagne" /></a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/"><img width="100%" src={imgSea} alt="mer"/></a>
      </Carousel.Item>
      <Carousel.Item>
       <a href="/"><img width="100%" src={imgCar} alt="voiture" /></a> 
      </Carousel.Item>
      <Carousel.Item>
      <a href="/"><img width="100%" src={imgCity} alt="ville" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="/"><img width="100%" src={imgMountain} alt="montagne" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="/"><img width="100%" src={imgForest} alt="foret" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="/"><img width="100%" src={imgPlane} alt="avion"/></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="/"><img width="100%" src={imgBoat} alt="bateau"/></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="/"><img width="100%" src={imgCamping} alt="camping" /></a>
      </Carousel.Item>

    </Carousel>
      </div>
    </>
    
    
  )
}

export default Slider;