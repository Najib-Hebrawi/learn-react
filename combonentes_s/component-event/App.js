import React, { Component } from 'react';





class App extends Component {
    constructor(){
        super();
        this.state = {number: 0}
        // den her for at bimder method clickHandler med constructor
        this.clickHandler = this.clickHandler.bind(this);
    };


    
    clickHandler(){
        this.setState(function(prevState){
            return{
                number: prevState.number +1 
            }
        })
  
    }


    render(){

        return(

            <div className="container">

            <h1>{this.state.number}</h1>

            <button 
            onClick={this.clickHandler}
            className='btn btn-primary'
            > Click Me!</button>

            </div>


        )
    }
}


export default App;





/*
this.setState((prevState) => ({
                number: prevState.number + 1
            }))
*/