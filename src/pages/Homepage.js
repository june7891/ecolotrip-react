
import React from 'react';
import Slider from '../components/Slider';
import Travels from '../components/Travels';
import Avantages from '../components/Avantages';
import SearchForm from '../components/SearchForm';

const Homepage = () => {
  return (
    <>
    <SearchForm/>
    <Slider/>
    <Travels/>
    <Avantages />

    </>
  )
}

export default Homepage;
