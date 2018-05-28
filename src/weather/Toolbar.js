import React from 'react';

export default function Toolbar(props){
    return(
        <nav>
            <input type="text" value={props.currentCity} />
            <button>Load</button>
        </nav>
    )
}