import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
	const request = axios.get(baseUrl);
	const { data } = await request;
	return data;
};

const create = async ({ name, number }) => {
	const request = axios.post(baseUrl, { name, number });
	const { data } = await request;
	return data;
};

const remove = async (id) => {
	const request = axios.delete(`${baseUrl}/${id}`);
	const { data } = await request;
	return data;
};

const update = async (id, personObject) => {
	const request = axios.put(`${baseUrl}/${id}`, personObject);
	const { data } = await request;
	return data;
};

export default {
	getAll,
	create,
	remove,
	update,
};
