import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Person from './components/Persons';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	])
 	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ search, setSearch ] = useState('');

	const personsToShow =  persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));

	const addPerson = (e) => {
		e.preventDefault();
		const personObject = {
			name: newName,
			number: newNumber
		}
		persons.forEach(person => {
			if (person.name === newName) {
				alert(`${newName} is already added in the phonebook`)
			}else {
				setPersons(persons.concat(personObject));
				setNewName('');
			}
		})
	}

	const handleChangeName = (e) => {
		setNewName(e.target.value)
	}

	const handleChangeNumber = (e) => {
		setNewNumber(e.target.value)
	}

	const handleChangeSearch = (e) => {
		setSearch(e.target.value)
	}

  	return (
    	<div>
      		<h2>Phonebook</h2>
        	<div>
				<Filter value={search} filter={handleChangeSearch}/>
				<h3>Add a new:</h3>
				<PersonForm
					submit={addPerson}
					name={newName}
					addName={handleChangeName}
					number={newNumber}
					addNumber={handleChangeNumber}
				/>
        	</div>
      		<h2>Numbers</h2>
      		<div>
				{personsToShow.map((person) => {
					return(
						<Person
							key={person.name}
							person={person}
						/>
					)
				})}
			</div>
    	</div>
  	)
}

export default App