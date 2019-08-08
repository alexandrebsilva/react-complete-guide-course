import React , {useState} from 'react';
import './App.css';
import Person from './persons/Person';



const App = props => {
 const [ personsState , setPersonsState ] = useState(
    {
      persons:[
        {name:"Alexandre", age:24},
        {name:"Alex", age:19},
        {name:"Monico", age:14}
      ],
    }
  );

    const switchNameHandler = ()=>{
      setPersonsState({ 
        persons:[
          {name:"Alexandre Borges", age:24},
          {name:"Alex in canada", age:19},
          {name:"Monico sta ines", age:14}
        ]
      })
    }
    
    
  

    return(
      <div className="App">
        <h1>Hello react</h1>
        <br />
        <div >
          <p>this box has a button</p>
          <br/>
          <button onClick={switchNameHandler}>Switch name!</button>
        </div>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
    )
}




export default App;

//useState is the method fro react that allows function components to have state



/*
class App extends React.Component{

  //state must always bring a object into it
state = {
  persons:[
    {name:"Alexandre", age:24},
    {name:"Alex", age:19},
    {name:"Monico", age:14}
  ],
  otherValue:"some other value"
}

switchNameHandler = () => {
  //setState will merge the state, and not just overwrite it
  this.setState(
    {
      persons:[
        {name:"Alexandre Borges", age:24},
        {name:"Alex in canada", age:19},
        {name:"Monico sta ines", age:14}
      ]
    }
    //this will only change persons, not "othervalue"
  );

  console.log('clicked!');
}

  render(){
    return(
      <div className="App">
      <h1>Hello react</h1>
      <br />
      <div >
        <p>this box has a button</p>
        <br/>
        <button onClick={this.switchNameHandler}>Switch name!</button>
      </div>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    </div>
    );
  }
}
/*
function App(props) {
  return (
    <div className="App">
      <h1>Hello react</h1>
      <br />
      <div >
        <p>this box has a button</p>
        <br/>
        <button onClick="">This is gonna trigger a thing</button>
      </div>
      <Person name="Alexandre" age="24" />
      <Person name="Alex" age="20" />
      <Person name="Jairo" age="54" >Eu tenho um filho</Person>
    </div>
  );
}

export default App;
*/