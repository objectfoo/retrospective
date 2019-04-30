import { useState } from 'react';
import { v4 } from 'uuid';
import { isNotId } from './helpers';

const useAppState = () => {
	const [concerns, setConcerns] = useState([]);
	const [editing, setEditing] = useState(null);
	const [isPrintable, setIsPrintable] = useState(false);

	const resetConcerns = (newConcerns = []) => setConcerns(newConcerns);
	const addConcern = (type, data) => setConcerns([...concerns, { id: v4(), type, ...data }]);
	const removeConcern = data => setConcerns(concerns.filter(isNotId(data.id)));
	const setPrintable = data => setIsPrintable(data.value);

	return {
		concerns,
		editing,
		isPrintable,
		actions: {
			addConcern,
			removeConcern,
			resetConcerns,
			setEditing,
			setPrintable
		}
	};
};

export default useAppState;
