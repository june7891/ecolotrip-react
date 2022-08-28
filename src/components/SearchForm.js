import React from "react";
import filter from "../assets/images/filter.svg";
import styles from "../assets/styles/components/SearchForm.module.scss";



const SearchForm = () => {


  return (
   <>



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
        
        <button className="btn-form">Valider</button>
  
            
        </form>
        </div>
   </>
  );
};

export default SearchForm;
