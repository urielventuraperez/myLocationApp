import React, { useState, useEffect } from "react";

const Geolocation = () => {

  const styles = {
      container:{
          borderRadius: '25px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          paddingTop: '65px',
          paddingBottom: '65px',
          paddingRight: '45px',
          paddingLeft: '45px'
      }
  }

  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });

  const [weatherDetail, setWeatherDetail] = useState({
      city: "",
      country: "",
      zone: "",
      weatherToday: "",
      weatherWeek: [],
  })

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  };

  const getWeather = (lat,lon) => {
    fetch("https://api.weatherbit.io/v2.0/forecast/daily?lat="+lat+"&lon="+lon+"&key=f398cbdeb95c4b62a7ce635620576d93")
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        setWeatherDetail({
            city: data.city_name,
            country: data.city_name,
            zone: data.city_name,
        })
    }).catch(function(error){
        console.log("error: "+error)
    });
  }

  useEffect(() => {
    getCurrentLocation();
  }, [getWeather(location.latitude, location.longitude)]);

  return (
    <div style={styles.container}>
      <h1>GEOLOCATION</h1>
        <h2>{weatherDetail.city}</h2>
        <h3>{weatherDetail.country}</h3>
        <h4>{weatherDetail.zone}</h4>
    </div>
  );
};

export default Geolocation;
