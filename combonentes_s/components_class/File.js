import React,{Component} from "react";





class File extends Component{
    
    render(){

        return( 

            <h1>{this.props.firstName} {this.props.lastName}</h1>
        )
    }
}

export default File