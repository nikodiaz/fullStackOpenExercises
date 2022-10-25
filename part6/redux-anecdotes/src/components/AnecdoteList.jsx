import React from 'react';
import { useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
//import PropTypes from 'prop-types'

const AnecdoteList = (props) => {
	const dispatch = useDispatch();
	const vote = (id) => {
		console.log('vote', id);
		dispatch(voteAnecdote(id));
	};
	return (
		<>
			{props.anecdotes.sort((a, b) => (a.votes < b.votes ? 1 : -1)) &&
				props.anecdotes.map((anecdote) => (
					<div key={anecdote.id}>
						<div>{anecdote.content}</div>
						<div>
							has {anecdote.votes}
							<button onClick={() => vote(anecdote.id)}>
								vote
							</button>
						</div>
					</div>
				))}
		</>
	);
};

//AnecdoteList.propTypes = {};

export default AnecdoteList;
