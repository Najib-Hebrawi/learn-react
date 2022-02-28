import React from "react";
import ScocialItem from "./SocialItem";




function Social(){
    return(
        <ul className="list-group">

            <ScocialItem media ='Facebook'/>
            <ScocialItem media ='Youtube'/>
            <ScocialItem media ='Instagram'/>

    </ul>
    );
}


export default Social;