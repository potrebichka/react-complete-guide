import React, {useEffect, useRef, useContext} from 'react';

import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  // after render cycle
  // [] - first time only
  useEffect(() => {
    console.log('[Cockpit] useEffect');
    // const timer = setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);
    toggleButtonRef.current.click();
    return () => {
      //clearTimeout(timer); 
      console.log('[Cockpit] clean up work')
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit] 2 useEffect');
    return () => {
      console.log('[Cockpit] clean up work 2')
    }
  });

  //useEffect can you multiple times

    let assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass= classes.Red;
    }
    
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    } 
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
                <button onClick={authContext.login}>Log in</button>
        </div>

    );
}

export default React.memo(Cockpit);