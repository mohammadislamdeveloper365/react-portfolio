import React from 'react'
import styles from './WeatherDetails.module.css'

const WeatherDetails = () => {
    function getWeatherDetailsProps() {
        return {
            className: styles.weatherDetails
        }
    }
  return (
    <div {...getWeatherDetailsProps()}>
      Temperature: 55

    </div>
  )
}

export default WeatherDetails
