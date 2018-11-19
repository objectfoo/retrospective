import { useState } from 'react';

const useInput = (initialState = '') => {
	const [value, setValue] = useState(initialState);
	const reset = () => setValue(initialState);

	return {
		value,
		setValue,
		reset
	};
};

export default useInput;
