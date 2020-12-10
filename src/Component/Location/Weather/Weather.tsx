import React from "react"
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


// const Weather = React.FC = (data: userLocation) => {

//     console.log(userLocation)
//     return(
//         <div>
//         </div>
//     )
    
// }

type weatherStatus = {
    descrip: string
    temp: number
}


const Weather = ({descrip, temp}: weatherStatus) => {
    console.log(descrip, temp)
    return(
        <div>
            <p>Weather: {descrip} <br/>Temp: {temp}</p>
        </div>
    )
}

export default Weather;


