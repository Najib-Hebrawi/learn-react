import React from "react";
import TeamMember from "./TeamMember";





function Team(){


    const info =[
            {
                id:1,
                img:"/images/najibs.jpg",
                name:'Najib',
                position:'kbh',
                phone:'71550702222',
                email:'najiphebrawi@hotmail.commmm',
                website:'tatomato.com',
            },
            {
                id:2,
                img:"/images/najibs.jpg",
                name:'Najib',
                position:'skole',
                phone:'71550702',
                email:'najiphebrawi@hotmail.com',
            }
    ]

    
    const members = info.map(member => <TeamMember

                            key={member.id}
                            img ={member.img}
                                name={member.name}
                                position={member.position}
                                phone={member.phone}
                                email={member.email}
                                website={member.website}
                            />
    );


    return(


        <div className="row">
        {members}
       </div>
    )
}

export default Team