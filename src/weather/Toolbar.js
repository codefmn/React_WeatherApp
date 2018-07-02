import React from 'react';

export default function Toolbar(props){
    const {currentCity, handleCity, handleSubmit} = props
    return(
        <nav>
            <form onSubmit={handleSubmit}>
                <input type="text" value={currentCity} onChange={handleCity}/>
                <button type="submit">Load</button>
            </form>
        </nav>
    )
}