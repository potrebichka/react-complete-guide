import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons] should ComponentUpdate');
    //     if (nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //     //return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons] getSnapshotBeforeUpdate');
        return {message: 'Snapshot'}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons] willUnmount');
    }

    render() {
        console.log('[Persons] rendering');
        return this.props.persons.map((person, index) => {
            return <Person 
                key={person.id}
                name={person.name} 
                age ={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                click={() => this.props.clicked(index)}/>
            });
        }
}

export default Persons;