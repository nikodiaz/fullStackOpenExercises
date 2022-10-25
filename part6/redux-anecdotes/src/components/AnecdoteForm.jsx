import React from 'react';
//import PropTypes from 'prop-types';

const AnecdoteForm = ({ onSubmit }) => {
	return (
		<>
			<h2>create new</h2>
			<form onSubmit={onSubmit}>
				<div>
					<input name='anecdote' />
				</div>
				<button type='submit'>create</button>
			</form>
		</>
	);
};

//AnecdoteForm.propTypes = {};

export default AnecdoteForm;
