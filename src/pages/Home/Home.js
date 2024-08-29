import './Home.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Home() {
    const navigate = useNavigate()
    const [name, setName] = useState('')

    async function fetchResult(latitude,longitude) {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3365e5d938ad16f6efefd335a797cfa9&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('data',JSON.stringify(data))
            })
            .catch(error => alert(error));

        await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=3365e5d938ad16f6efefd335a797cfa9&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log(data.list);
                localStorage.setItem('forecast',JSON.stringify(data.list))
            })
            .catch(error => alert(error));
        
        navigate('/result')
    }

    function handleCurrentLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success, error);
        } else {
          alert("Geolocation not supported");
        }
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchResult(latitude,longitude)
    }
    
    function error() {
        alert("Unable to retrieve your location");
    }

    function handleSubmit() {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=3365e5d938ad16f6efefd335a797cfa9`)
            .then(response => response.json())
            .then(data => {
                const latitude = data[0].lat
                const longitude = data[0].lon
                fetchResult(latitude,longitude)
            })
            .catch(error => alert(error))
    }

    return (
      <div className="Home">
        <h1>Welcome to Weather Checker.</h1>
        <p>Please provide location for the latest weather condition and 5-day forecasts.</p>
            <div className = "wrapper">
                <TextField
                required
                id="standard-required"
                label="Location"
                variant="standard"
                value = {name}
                sx={{ width: '60%' }}
                onChange = {(e,value) => setName(e.target.value)}
                />
                <Button variant="contained" sx={{ width: '25%', m : 3, p : 1, fontSize: 18 }} onClick = {handleSubmit}>
                    Submit
                </Button>
                <p>Or</p>
                <Button variant="contained" sx={{ width: '50%', m : 3, p : 1, fontSize: 18 }} onClick = {handleCurrentLocation}>
                    Get Current Location
                </Button>
            </div>
      </div>
    );
  }

export default Home;