import React from 'react';
import useInput from '../lib/useInput';
import { actions } from '../lib/useAppReducer';

const internalOnKeyDown = cb => e => {
	if (e.key === 'Enter' && e.target.value.length === 0) {
		e.preventDefault();
	} else if (e.key === 'Escape') {
		cb();
	}
};

const FormInput = props => {
	const { dispatch, type } = props;
	const { value, reset, setValue } = useInput(props.text || '');

	const onSubmit = e => {
		e.preventDefault();
		dispatch(actions.addItem(type, value));
		reset();
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				className='form-entry'
				name={`${type}-entry`}
				id={`${type}-entry`}
				onKeyDown={internalOnKeyDown(() => {
					reset();
				})}
				onChange={e => {
					setValue(e.target.value);
				}}
				value={value}
			/>
		</form>
	);
};

export default FormInput;
