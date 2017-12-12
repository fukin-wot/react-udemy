import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';
//npm install --save radium

class App extends Component {
  state = {
    persons: [
      { id: 'adfw3e', name: 'sacros', age: 22 },
      { id: '98eqf2', name: 'sncht', age: 23 },
      { id: 'c2m8re', name: 'chndn', age: 24 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    //const persons = this.state.persons.splice();
    const p = [...this.state.persons];
    p.splice(personIndex, 1);
    this.setState({ persons: p })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    //const doesShow = this.state.showPersons;
    //this.setState({showPersons: !doesShow});
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '6px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      //For transforming selector, wrap the component with <StyleRoot>
      <StyleRoot>
        <div className="App">
          <h1>Hello World!</h1>
          <p className={classes.join(' ')}>This is a demo App</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
          {/* or do this ->
          {this.state.showPersons ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'sacros')}
                changed={this.nameChangedHandler}>I'm learning hybrid development</Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
            </div> : null
          }
          */}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hell\'o mah niggas!!!'));
  }
}
//wrapped the export with Radium function for pseudo selector (:hover) 
export default Radium(App);
