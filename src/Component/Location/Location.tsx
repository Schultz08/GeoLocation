import React from "react"
import { setConstantValue } from "typescript";
import { userLocation } from "../type"
import Weather from "./Weather/Weather"

class GeoLocation extends React.Component<{}, userLocation>{
    constructor(props: {}) {
        super(props);
        this.state = {
            lat: 0,
            lon: 0,
            weather: [],
            descrip: "",
            temp: 0

        }
        this.success = this.success.bind(this)
        this.getWeather = this.getWeather.bind(this)
        // this.api = this.api.bind(this)
    }

    componentDidMount() {
        if (!navigator.geolocation) {
            return "error"
        } else {
            navigator.geolocation.getCurrentPosition(this.success)
        }
    }

    success(pos: any) {
        this.setState({ lat: pos.coords.latitude, lon: pos.coords.longitude })
        this.getWeather()
        console.log("Success ran")
    }

    // api<T>(url: string): Promise<any>{
    //     return fetch(url)
    //     .then(res => {if(!res.ok){throw new Error(res.statusText)}return res.json() as Promise<{weather:any}>})
    //     .then( data =>  data.weather)
    // }

    // getWeather(){
    //     let url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=a22779148472e8bdfff76e766a37f93a`

    //     this.setState(this.api(url) as weather)
    //     console.log("weather ran")

    // }
    
    getWeather(){
        // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        //key a22779148472e8bdfff76e766a37f93a
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=a22779148472e8bdfff76e766a37f93a`)
        .then(res => res.json())
        .then(data => {this.setState({temp: data.main.temp, descrip: data.weather[0].description})})
        // this.setValue()
        console.log("fetch ran")
    }

    // setValue = () => {
    //     // console.log(this.state.weather.data)
    //     // this.setState({descrip: this.state.weather.description})
    // }
    log = () => {
        console.log(this.state.weather, typeof this.state.weather,"Weather")
        console.log(this.state.temp)
        console.log(this.state.descrip)
    }

    render() {
        let temp = this.state.temp;
        let des = this.state.descrip
        return (
            
            <div>
                <h1>Location</h1>
                <p>lat: {this.state.lat}</p>
                <p>lon: {this.state.lon}</p>
                <button onClick={this.log}>weather log</button>
                <br/>
                <Weather temp={temp} descrip={des}/>
            </div>

        )

    }
}

export default GeoLocation