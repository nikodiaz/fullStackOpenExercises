import React from 'react';

const Person = ({ person, remove }) => {
	return (
		<>
			<div>
				{person.name} - {person.number}
				<button onClick={() => remove(person)}>Delete</button>
			</div>
		</>
	);
};

export default Person;
