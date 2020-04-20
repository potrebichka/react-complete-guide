import React, {Component} from 'react';
import withClass from '../../../hoc/withClass';
import styles from './Person.module.css';
import classes from './Person.module.css';

class Person extends Component {
    render() {
        console.log('[Person] rendering');
        return (
            <React.Fragment>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
            </React.Fragment>
        );
    }
}

export default withClass(Person, classes.Person);