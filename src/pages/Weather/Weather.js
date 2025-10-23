import React, { useState, useEffect } from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails'
import Input from '../../components/Input/Input'
import styles from './Weather.module.css'

const API_KEY = 'ff9411c66aac644ff9982fdd54074788';

const Weather = () => {
  const [ city, setCity ] = useState('');
  const [ inputValue, setInputValue ] = useState('');
  
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url).then(res=> res.json()).then(data=> {
      console.log(data)
    }).catch(err=> console.log(err));
  }, [city]);

  function getInputProps() {
    return {
      type: 'text',
      placholder: "Enter City Name",
      className: styles.searchInput,
      value: inputValue,
      handleInputChange: (e) => setInputValue(e.target.value)
    }
  }

  function getSearchBoxProps() {
    return {
      className: styles.searchBox,
      handleSearchClick
    }
  }

  function handleSearchClick() {
    if(!(inputValue.trim() === '')) {
       setCity(inputValue);
    }
  } 

  return (
    <div className={styles.weatherContainer}>
      <h2>Enter your City</h2>
      <SearchBox {...getSearchBoxProps()}>
        <Input {...getInputProps()}/>
      </SearchBox>
      <WeatherDetails />
    </div>
  )
}

export default Weather
