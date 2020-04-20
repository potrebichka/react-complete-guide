import React, { Component } from 'react';
import styles from './App.module.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App] constructor');
    this.state = {
      persons: [
        {id: 'asfa1', name: 'Max', age: 28},
        {id: 'vasdf1', name: 'Manu', age: 29},
        {id: 'asdf1', name: "Stephanie", age: 26}
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App] getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount() {
    console.log('[App] ComponentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App] shouldCompoenntUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons, 
        changeCounter: this.changeCounter + 1
      };
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App], render');

    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
    }

    return (
        <div className={styles.App}>
          <button onClick={() => this.setState({showCockpit: false})}>Remove Cockpit</button>
          {this.state.showCockpit ? 
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons} 
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}/>
          : null}
          {persons}
        </div>
    );
  }
}

export default App;
