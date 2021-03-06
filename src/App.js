import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "ARK", age: 23 },
      { id: 2, name: "BRK", age: 26 },
      { id: 3, name: "SRK", age: 28 }],
    showPersons: false,
    textLength : 0,
    textView : ''
  }

  render() {

    const handleDeletePerson = (index) => {
      console.log(...this.state.persons)
      const person = [...this.state.persons];
      person.splice(index, 1);
      this.setState({ persons: person })
    }

    const handleShowPersons = () => {
      const showPersonBox = this.state.showPersons
      this.setState({
        showPersons: !showPersonBox
      })
    }

    const handleChangeName = (event, personId) => {

     const personIndex = this.state.persons.findIndex(p => {
       return p.id === personId
     })

     const person = {
       ...this.state.persons[personIndex]
     }

     person.name = event.target.value;

     const persons = [...this.state.persons];
     persons[personIndex] = person;

     this.setState({
       persons : persons
     })
}

   const handleTextLength = (event) => {   
         this.setState({
           textView : event.target.value,
           textLength: this.state.textView.length
         })
  }

  const handleDeleteTextBox = (index) => {
    console.log(index)
    const myArray = [...this.state.textView.split('')];
    console.log(myArray)
    const newArray = myArray.splice(index,1);
    console.log(newArray)
    console.log(myArray)

    this.setState({
      textView : myArray.join('')
    })

  }

    let persons = null;

    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return (
            <Person
              key={index}
              name={person.name}
              age={person.age}
              deletePerson={() => handleDeletePerson(index)}
              changeName={(event) => handleChangeName(event, person.id)}
            />)
        })}

      </div>
      );
    }
    const textArray = this.state.textView.split('');
    const charComponent = (
      textArray.map((text, index) => {
        return (<CharComponent 
        key={index}
        textView={text}
        onDelete={() => handleDeleteTextBox(index)}
        />
      )})
    );
    return (
      <div className="App">
        {/* <button onClick={handleShowPersons}>
          Show Persons
        </button>
        {persons}
        <div>
        </div> */}
        <input type='text' value={this.state.textView} onChange={(event) => handleTextLength(event)} />
        <ValidationComponent textLength={this.state.textView.length}/>
        <br/>
        <br/>

       {charComponent}
      </div>
    );
  }
}

export default App;
