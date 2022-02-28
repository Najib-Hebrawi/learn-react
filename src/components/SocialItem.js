import React from "react";




function ScocialItem(props){

    return(
        
    <li className="list-group-item">
        <img src ={props.img} alt={`icon of ${props.media}`}/>
        <input type="checkbox" id={props.id}/>
        <label htmlFor={props.id}>{props.media}</label>
    </li>

    )
}

export default ScocialItem