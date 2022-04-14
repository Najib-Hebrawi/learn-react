import React,{Component} from "react";




class App extends Component{

    constructor(){
        super();
        this.state={answer:""}
        this.clickHanlder = this.clickHanlder.bind(this);
         
    };

    clickHanlder(){

        this.setState((prevState) => ({
                answer: prevState.answer = "yes i do"
            }))

    }


    render(){
        return(
            <div>
            <h1>Do you love me? {this.state.answer}</h1>
            <button 
            className="btn btn-primary"
            onClick= {this.clickHanlder}
            > Click to see if i love you ?</button>
            </div>

        )
    }



}


export default App;