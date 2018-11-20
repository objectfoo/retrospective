import React from 'react';
import useInput from '../lib/useInput';
import { actions } from '../lib/useAppReducer';

const FormInput = props => {
	const { dispatch, type } = props;
	const { value, reset, setValue } = useInput(props.text || '');

	const onSubmit = e => {
		e.preventDefault();
		dispatch(actions.addItem(type, value));
		reset();
	};

	const onKeyDown = e => {
		if (e.key === 'Enter' && e.target.value.length === 0) {
			e.preventDefault();
		} else if (e.key === 'Escape') {
			reset();
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				id={`${type}-entry`}
				type='text'
				className='form-entry'
				name={`${type}-entry`}
				value={value}
				onKeyDown={onKeyDown}
				onChange={e => setValue(e.target.value)}
			/>
		</form>
	);
};

export default FormInput;
