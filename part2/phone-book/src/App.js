import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Person from './components/Person';
import personService from './services/persons';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		personService.getAll().then((initialPersons) => {
			setLoading(false);
			setPersons(initialPersons);
		});
	}, []);

	const personsToShow = persons.filter((person) =>
		person.name.toLowerCase().includes(search.toLowerCase()),
	);

	const updatePerson = (person, newPerson) => {
		const updatedPerson = { ...person, number: newPerson.number };
		personService.update(person.id, updatedPerson).then((res) => {
			return setPersons(
				persons.map((p) => (p.name !== newPerson.name ? p : res)),
			);
		});
	};

	const addPerson = (e) => {
		e.preventDefault();
		const personObject = {
			name: newName,
			number: newNumber,
		};
		const person = persons.find((p) => p.name === personObject.name);

		if (person) {
			if (
				window.confirm(
					`${person.name} already is added with a phone number, replace the old number with the new onw?`,
				)
			) {
				updatePerson(person, personObject);
				setNewName('');
				setNewNumber('');
			}
		} else {
			personService.create(personObject).then((res) => {
				setPersons((prevPersons) => prevPersons.concat(res));
				setLoading(false);
				setNewName('');
				setNewNumber('');
			});
		}
	};

	const removePerson = ({ name, id }) => {
		if (window.confirm(`Delete ${name}`)) {
			personService.remove(id);
			setPersons(persons.filter((person) => person.id !== id));
		}
	};

	const handleChangeName = (e) => {
		setNewName(e.target.value);
	};

	const handleChangeNumber = (e) => {
		setNewNumber(e.target.value);
	};

	const handleChangeSearch = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				<Filter value={search} filter={handleChangeSearch} />
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
				{!loading
					? personsToShow.map((person) => {
							return (
								<Person
									key={person.name}
									person={person}
									remove={removePerson}
								/>
							);
					  })
					: null}
			</div>
		</div>
	);
};

export default App;
