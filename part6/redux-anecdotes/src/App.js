import { useSelector, useDispatch } from 'react-redux';
import { createAnecdote, voteAnecdote } from './actions';
import AnecdoteForm from './components/AnecdoteForm';

const App = () => {
	const anecdotes = useSelector((state) => state);
	const dispatch = useDispatch();

	const vote = (id) => {
		console.log('vote', id);
		dispatch(voteAnecdote(id));
	};
	const addAnecdote = (e) => {
		e.preventDefault();
		const content = e.target.anecdote.value;
		dispatch(createAnecdote(content));
		e.target.anecdote.value = '';
	};

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes.sort((a, b) => (a.votes < b.votes ? 1 : -1)) &&
				anecdotes.map((anecdote) => (
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
			<AnecdoteForm onSubmit={addAnecdote} />
		</div>
	);
};

export default App;
