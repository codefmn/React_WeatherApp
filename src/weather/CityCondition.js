import React from 'react';

export default function CityCondition(props){
    const {city, weather, temp} = props;
    return (
        <ul>
            <li id="location">{city}</li>
            <li id="weather">{weather}</li>
            <li id="temperature">{temp}</li>
         </ul>
       )
}