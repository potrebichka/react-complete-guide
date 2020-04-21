import React, {Component} from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';
import styles from './Person.module.css';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person] rendering');
        return (
            <React.Fragment>
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                </AuthContext.Consumer> */}
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    defaultValue={this.props.name}
                />
            </React.Fragment>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    click: PropTypes.func
};

export default withClass(Person, classes.Person);