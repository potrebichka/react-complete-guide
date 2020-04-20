import React, {useEffect} from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit] useEffect');
    const timer = setTimeout(() => {
      //alert("Saved data to cloud!");
    }, 1000);
    return () => {
      clearTimeout(timer); 
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
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>

    );
}

export default React.memo(Cockpit);