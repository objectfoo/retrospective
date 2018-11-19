import React from 'react';
import { actions } from '../lib/useAppReducer';
import useInput from '../lib/useInput';

const EditView = props => {
	const { dispatch, ...rest } = props;
	const { reset, ...editInput } = useInput(rest.text);

	return (
		<form
			id={`edit-form-${rest.id}`}
			onSubmit={e => {
				e.preventDefault();
				const newText = editInput.value;
				reset();
				dispatch(actions.updateItem(rest.id, newText));
			}}
		>
			<input
				type='text'
				autoFocus
				className='form-entry'
				name={rest.name}
				{...editInput}
				onKeyDown={e => {
					if (e.key === 'Enter' && rest.text.length === 0) {
						e.preventDefault();
					} else if (e.key === 'Escape') {
						reset();
						dispatch(actions.setEditing(null));
					}
				}}
			/>
		</form>
	);
};

export default EditView;
