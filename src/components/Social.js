import React from "react";
import ScocialItem from "./SocialItem";




function Social(){
    return(
    <ul className="list-group">

            <ScocialItem
             media ='Facebook'
              id= 'facebook'
              img='https://picsum.photos/50'
            />

            <ScocialItem
             media ='Youtube'
              id= 'youtube'
              img='https://picsum.photos/51'
            />

            <ScocialItem 
            media ='Instagram'
            id= 'instagram'
    
            img='https://picsum.photos/52'
            />

    </ul>
    );
}


export default Social;