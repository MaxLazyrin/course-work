import React from 'react';
import './App.css';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather'
import { SketchPicker } from 'react-color'

/**
 * Главный компонент.
 */

const API_KEY = "537be1766a1e59c07bb7157fbf86baf3";

class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        displayColorPicker: true,
        defaultColor: "#999",
        changeColor: "#999",
        color: {
            r: "0",
            g: "9",
            b: "153",
            a: "1"
        }
    }
    getWeather = async (e) => {
        try {
            e.preventDefault();
            const city = e.target.elements.city.value;
            const country = e.target.elements.country.value;
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=537be1766a1e59c07bb7157fbf86baf3&units=metric`);
            const data = await api_call.json();
            console.log(data)
            if (city && country) {
                this.setState({
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: ""
                });
            } else {
                this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    description: undefined,
                    error: "Please enter the values."
                });
            }
        } catch (err) {
            console.error('Rejection handled.');
        }
    }
    render() {

        return (
            <div >
                <div className="wrapper" >
                    <div className="main">
                        <div className="container">
                            <div className="title-container">
                                <Titles />
                            </div>
                            <div className="form-container">
                                <Form getWeather={this.getWeather} />
                                <Weather
                                    temperature={this.state.temperature}
                                    humidity={this.state.humidity}
                                    city={this.state.city}
                                    country={this.state.country}
                                    description={this.state.description}
                                    error={this.state.error}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;