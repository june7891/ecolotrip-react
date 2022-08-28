import React, { useState } from 'react';
import styles from "../assets/styles/components/SearchForm.module.scss";
import filter from "../assets/images/filter.svg";


const Tabs = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };


  return (
    <>
 <div className="tab-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         Séjours
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Hébergement
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Transport
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
           <div className={`${styles.form} d-flex container`}>
    <form className ="" action="" method="">
        <div className={`${styles.travelInfoFirstRow} d-flex`}>
            <input id ="departure" type="text" name="search" placeholder="Départ"/>
            <input id = "destination" type="text" name="search" placeholder="Destination"/>
        </div>

        <div className={`${styles.travelInfoSecondRow} d-flex `}>
            <input  type="date" name="date" placeholder="Date de départ"/>
            <input  type="date" name="date" placeholder="Date de retour"/>     
            <input  type="number" name="voyageurs" min="1" placeholder="voyageur"/>
            <img className="filter" src={filter} alt=""/>
        </div>
        
        <button className="btn-form">Rechercher</button>
  
            
        </form>
        </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
               <div className={`${styles.form} d-flex container`}>
    <form className ="" action="" method="">
        <div className={`${styles.travelInfoFirstRow} d-flex`}>
            <input id ="departure" type="text" name="search" placeholder='&#128719; Destination'/>
        </div>

        <div className={`${styles.travelInfoSecondRow} d-flex `}>
            <input  type="date" name="date" placeholder="Date de départ"/>
            <input  type="date" name="date" placeholder="Date de retour"/>     
            <input  type="number" name="adultes" min="1" placeholder="adultes"/>
            <input  type="number" name="adultes" min="1" placeholder="enfants"/>
            <input  type="number" name="adultes" min="1" placeholder="chambres"/>
            <img className="filter" src={filter} alt=""/>
        </div>
        
        <button className="btn-form">Rechercher</button>
  
            
        </form>
        </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
              <div className={`${styles.form} d-flex container`}>
    <form className ="" action="" method="">
        <div className={`${styles.travelInfoFirstRow} d-flex`}>
            <input id ="departure" type="text" name="search" placeholder="Lieu de prise en charge :"/>
            <input type="checkbox"/> 
        Je souhaite restituer la voiture à un autre endroit
        </div>

        <div className={`${styles.travelInfoSecondRow} d-flex `}>
          <label htmlFor='datePriseEnCharge'>Date de prise en charge :</label>
            <input id='datePriseEnCharge'  type="date" name="date"/>
            <label htmlFor='dateRestitution'>Date de restitution :</label>
            <input id='dateRestitution' type="date" name="date" />     
            <input type="checkbox"/> 
            Le conducteur a-t-il entre 30 et 65 ans ?
          
        </div>
        
        <button className="btn-form">Rechercher</button>
  
            
        </form>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tabs