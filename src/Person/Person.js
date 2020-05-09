import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="person">
            <h1 onClick={props.deletePerson}>Hi my name is {props.name} and my age is {props.age}</h1>
            <input type="text" value={props.name} onChange={props.changeName} />
            
        </div>
    )
}

export default Person