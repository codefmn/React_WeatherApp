import React from 'react';

function DailyItem(props) {
    const day = props.day;
    return(
        <div className="item">
        <span>{day.weekday}</span>
        <span><img alt="weather" src={day.icon}/></span>
        <span>{day.high}</span>
        <span>{day.low}</span>
        </div>
    )
}

export default function Forecaster(props) {
    return props.forecast.map(
        (day, i) => <DailyItem key={`${day.weekday}_${i}`} day={day} />
    )
}