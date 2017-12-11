import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'sacros', age: 22},
      {name: 'sncht', age: 23},
      {name: 'chndn', age: 24}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "SacrosAnct";
    this.setState({
      persons: [
        {name: newName, age: 21},
        {name: 'sncht', age: 23},
        {name: 'chndn', age: 24}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'sacros', age: 22},
        {name: event.target.value, age: 23},
        {name: 'chndn', age: 24}
      ] 
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '6px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is a demo App</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('SacrosAnct')}>Switch Name</button>
          {//or, click={this.switchHandler.bind(this, 'sacros')}}
          }
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'sacros')}
          //or, click={() => this.switchHandler('sacros')
          changed={this.nameChangedHandler}>I'm learning hybrid development</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hell\'o mah niggas!!!'));
  }
}

export default App;
