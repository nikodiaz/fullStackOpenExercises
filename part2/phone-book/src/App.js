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
	const [message, setMessage] = useState({
		notification: '',
		error: '',
	});

	useEffect(() => {
		personService
			.getAll()
			.then((initialPersons) => {
				setLoading(false);
				setPersons(initialPersons);
			})
			.catch((e) => setMessage(e));
	}, []);

	const errorStyle = {
		padding: '0.5rem 2rem',
		color: 'red',
		border: '2px solid red',
	};

	const messageStyle = {
		padding: '0.5rem 2rem',
		color: 'green',
		border: '2px solid green',
	};

	const personsToShow = persons.filter((person) =>
		person.name.toLowerCase().includes(search.toLowerCase()),
	);

	const updatePerson = (person, newPerson) => {
		const updatedPerson = { ...person, number: newPerson.number };
		personService
			.update(person.id, updatedPerson)
			.then((res) => {
				return setPersons(
					persons.map((p) => (p.name !== newPerson.name ? p : res)),
				);
			})
			.catch((error) => {
				setMessage({
					notification: '',
					error: `Information of ${person.name} has already been removed from server`,
				});
				setTimeout(() => {
					setMessage({ notification: '', error: '' });
				}, 5000);
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
				setMessage({
					error: '',
					notification: `Updated ${person.name}`,
				});
				setTimeout(() => {
					setMessage({ notification: '', error: '' });
				}, 5000);
			}
		} else {
			personService
				.create(personObject)
				.then((res) => {
					setPersons((prevPersons) => prevPersons.concat(res));
					setLoading(false);
					setNewName('');
					setNewNumber('');
					setMessage({
						error: '',
						notification: `Added ${personObject.name} in phone book`,
					});
					setTimeout(() => {
						setMessage({ notification: '', error: '' });
					}, 5000);
				})
				.catch((error) => {
					setMessage({
						notification: '',
						error: `Information of ${person.name} has already been removed from server`,
					});
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
				{message.notification ? (
					<h3 style={messageStyle}>{message.notification}</h3>
				) : null}
				{message.error ? (
					<h3 style={errorStyle}>{message.error}</h3>
				) : null}
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
