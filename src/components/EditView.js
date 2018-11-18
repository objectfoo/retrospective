import React from 'react';

const EditView = props => {
	const { setEditing, toggleEditing, setValue, updateTextFor, ...rest } = props;

	return (
		<form
			id={`edit-form-${rest.id}`}
			onSubmit={e => {
				e.preventDefault();
				updateTextFor(rest.id, rest.value);
				setEditing(null);
			}}
		>
			<input
				type='text'
				autoFocus
				className='form-entry'
				name={rest.name}
				onChange={e => {
					setValue(e.target.value);
				}}
				onKeyDown={e => {
					if (e.key === 'Escape') {
						setEditing(null);
					}
				}}
				{...rest}
			/>
		</form>
	);
};

export default EditView;
