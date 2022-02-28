import React from "react";




function ScocialItem(props){

    return(
        
    <li className="list-group-item">
        <input type="checkbox" id="facebook"/>
        <label for="facebook">{props.media}</label>
    </li>

    )
}

export default ScocialItem