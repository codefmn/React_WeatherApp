import React from 'react';

export default function CityCondition(props){
    const {city, weather, temp} = props;
    return (
        <ul>
            <li id="location">{props.city}</li>
            <li id="weather">{props.weather}</li>
            <li id="temperature">{props.temp}</li>
         </ul>
       )
}