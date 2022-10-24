import { VOTE } from './types';

export const Vote = (payload) => ({
	type: VOTE,
	payload,
});
