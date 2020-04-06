import React, { Component } from 'react';
import styles from './App.module.css';
//import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
import Person from './Person/Person';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      {id: 'asfa1', name: 'Max', age: 28},
      {id: 'vasdf1', name: 'Manu', age: 29},
      {id: 'asdf1', name: "Stephanie", age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    //const person = Object.assign({}, this.state.persons[personIndex]);
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    let btnClass = [styles.button];
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              name={person.name} 
              age ={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)}/>
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      btnClass.push(styles.red);
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    } 
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      //<StyleRoot>
        <div className={styles.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          {/* <StyledButton alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton> */}
            <button className={btnClass.join(' ')}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      //</StyleRoot>
    );
  }
}

export default App;
