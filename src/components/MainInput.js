import React from 'react';
import useInput from '../lib/useInput';
import { actions } from '../lib/useAppReducer';

const MainInput = props => {
	const { dispatch, type } = props;
	const { value, reset, setValue } = useInput(props.text || '');
	const id = `main-input-${type}`;

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
		<form onSubmit={onSubmit} className='form-container'>
			<input
				id={id}
				type='text'
				className='item-content'
				name={id}
				value={value}
				onKeyDown={onKeyDown}
				onChange={e => setValue(e.target.value)}
			/>
		</form>
	);
};

export default MainInput;
