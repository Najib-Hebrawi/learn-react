import React from "react";
import TeamMember from "./TeamMember";





function Team(){




    return(

        <div className="row">
       <TeamMember 
       info ={
           {
               img:"/images/najibs.jpg",
               name:'Najib',
               position:'kbh',
               phone:'71550702',
               email:'najiphebrawi@hotmail.com',
               website:'tatomato.com',


           }
       }


       />
       

       </div>
    )
}

export default Team