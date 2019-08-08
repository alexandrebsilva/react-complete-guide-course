import React,{Component} from 'react';

const person = (props)=>{
    return(
        <div>
            <h1>Hello, I'm a person and my name is {props.name}</h1>
            <br/>
            <h2>I am {props.age} years old</h2>
            <p>{props.children}</p>
            <hr />
        </div>
    )
}
//to access the content between the tags where thecomponent is called, we must call "children", this refers to the the content between the opening and closing tag
//To use props in class base components , we should use "this.props.#"
/*class Person extends Component{
    render(){
        return(
            <div>
                <h1>Hello, I'm a person and my name is {Math.random()}</h1>
            </div>
        );
    }
}
*/
export default person;