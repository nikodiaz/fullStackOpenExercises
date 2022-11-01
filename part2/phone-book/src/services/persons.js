import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
	try {
		const request = axios.get(baseUrl);
		const { data } = await request;
		return data;
	} catch (error) {
		console.log(error);
	}
};

const create = async ({ name, number }) => {
	try {
		const request = axios.post(baseUrl, { name, number });
		const { data } = await request;
		return data;
	} catch (error) {
		console.log(error);
	}
};

const remove = async (id) => {
	try {
		const request = axios.delete(`${baseUrl}/${id}`);
		const { data } = await request;
		return data;
	} catch (error) {
		console.log(error);
	}
};

const update = async (id, personObject) => {
	try {
		const request = axios.put(`${baseUrl}/${id}`, personObject);
		const { data } = await request;
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default {
	getAll,
	create,
	remove,
	update,
};
