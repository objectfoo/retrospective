import { useState } from 'react';

const useInput = (initialState = '') => {
	const [value, setValue] = useState(initialState);
	const onChange = e => {
		setValue(e.target.value);
	};
	const reset = () => setValue(initialState);
	const onKeyDown = e => {
		if (e.key === 'Enter' && value.length === 0) {
			e.preventDefault();
		} else if (e.key === 'Escape') {
			reset();
		}
	};

	return {
		value,
		onKeyDown,
		onChange,
		reset
	};
};

export default useInput;
