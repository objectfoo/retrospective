import { useState } from 'react';
import uuidv4 from 'uuid/v4';

const useList = (initialState = []) => {
	const [elements, setList] = useState(initialState);

	const updateTextFor = (id, newText) => {
		setList(elements.map(el => (el.id !== id ? el : { ...el, text: newText })));
	};

	const addItem = (type, text) => {
		const newItem = { id: uuidv4(), type, text };
		setList(elements.concat(newItem));
	};

	const elementsOfType = type => elements.filter(el => el.type === type);

	const deleteById = id => setList(elements.filter(el => el.id !== id));

	return {
		deleteById,
		updateTextFor,
		addItem,
		elementsOfType,
		elements,
		setList
	};
};

export default useList;
