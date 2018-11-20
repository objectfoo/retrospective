import React from 'react';
import useInput from '../lib/useInput';
import { actions } from '../lib/useAppReducer';

const EditView = props => {
	const { dispatch, id, text } = props;
	const { reset, value, setValue } = useInput(text);
	const onSubmit = e => {
		e.preventDefault();
		reset();
		dispatch(actions.updateItem(id, value));
	};

	const onChange = e => {
		e.preventDefault();
		setValue(e.target.value);
	};

	const onKeyDown = e => {
		if (e.key === 'Enter' && value.length === 0) {
			e.preventDefault();
		} else if (e.key === 'Escape') {
			reset();
			dispatch(actions.setEditing(null));
		}
	};

	return (
		<form id={`edit-form-${id}`} onSubmit={onSubmit}>
			<input
				id={`edit-input-${id}`}
				type='text'
				autoFocus
				className='form-entry'
				name={`edit-input-${id}`}
				value={value}
				onKeyDown={onKeyDown}
				onChange={onChange}
			/>
		</form>
	);
};

export default EditView;
