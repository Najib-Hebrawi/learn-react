import React from "react";



function Header(){

    
    const client = 'Designer';
    const title={
        designer:'Design',
        programmer:'programming'
    }

    /*
    if(client === 'Designer' ){
        title = 'Design is my life';
    }else{
        title = 'Programming is my life';
    }
    */

    const info= {
        name:'Najib',
        nick:'Hebrawi'

    }

        return(
        <div className="navbar bg-dark rounded text-white">
            Hello {`${info.name} ${info.nick}`}
             <h2>
                 { 
                client == 'Designer' ?
                 title.designer 
                 : 
                 title.programmer
               
                }  is my life
            </h2>
            
        </div>

    );
}


export default Header;