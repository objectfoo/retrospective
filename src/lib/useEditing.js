import { useState } from 'react';

const useEditing = () => {
	const [id, setId] = useState(null);
	const [value, setValue] = useState('');

	const setEditing = (id, value) => {
		let newValue = value;
		if (id === null) {
			newValue = id;
		}
		setId(id);
		setValue(newValue);
	};

	const toggleEditing = el => {
		if (id === el.id) {
			setEditing(null);
		} else {
			setEditing(el.id, el.text);
		}
	};

	return { id, value, setEditing, toggleEditing, setValue };
};

export default useEditing;
