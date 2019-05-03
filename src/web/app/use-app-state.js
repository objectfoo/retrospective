import { useState } from 'react';
import { isNotId } from '../helpers';
import { makeConcern } from '../../core/entities/index';

const useAppState = () => {
	const [concerns, setConcerns] = useState([]);
	const [editing, setEditing] = useState(null);
	const [isPrintable, setIsPrintable] = useState(false);

	const resetConcerns = (newConcerns = []) => {
		setEditing(null);
		setConcerns(newConcerns);
	};

	const addConcern = data => {
		setEditing(null);
		setConcerns([makeConcern({ ...data }), ...concerns]);
	};

	const removeConcern = data => {
		setEditing(null);
		setConcerns(concerns.filter(isNotId(data.id)));
	};

	const setPrintable = data => {
		setEditing(null);
		setIsPrintable(data.value);
	};

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
