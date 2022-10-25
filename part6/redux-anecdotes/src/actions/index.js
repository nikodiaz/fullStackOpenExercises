import { NEW_ANECDOTE, VOTE } from './types';

export const voteAnecdote = (id) => ({
	type: VOTE,
	payload: { id },
});

export const createAnecdote = (content) => ({
	type: NEW_ANECDOTE,
	payload: { content },
});
