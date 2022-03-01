import React from "react";




function ScocialItem(props){

    return(
        
    <li className="list-group-item">
        <img src ={props.pObject.img} alt={`icon of ${props.pObject.media}`}/>
        <input type="checkbox" id={props.pObject.id}/>
        <label htmlFor={props.pObject.id}>{props.pObject.media}</label>
    </li>

    )
}

export default ScocialItem