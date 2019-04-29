import { useState } from 'react';
import { v4 } from 'uuid';
import { notId } from './helpers';

const useAppState = () => {
	const [concerns, setConcerns] = useState([]);
	const [editing, setEditing] = useState(null);

	const resetConcerns = (newConcerns = []) => setConcerns(newConcerns);
	const addConcern = (type, data) => setConcerns([...concerns, { id: v4(), type, ...data }]);
	const removeConcern = data => setConcerns(concerns.filter(notId(data.id)));

	return {
		concerns,
		editing,
		actions: {
			resetConcerns,
			addConcern,
			removeConcern,
			setEditing
		}
	};
};

export default useAppState;
