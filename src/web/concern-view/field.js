import React, { useState } from 'react';

const onSubmit = callback => e => {
	e.preventDefault();
	callback(e);
};

const onChange = callback => e => callback(e.target.value);

const Field = props => {
	const { addConcern, hidden, initialValue = '', inputProps = {}, type } = props;
	const [fieldValue, setNewValue] = useState(initialValue);

	return (
		<form
			hidden={hidden}
			noValidate
			autoComplete='off'
			onSubmit={onSubmit(() => {
				if (fieldValue.length > 0) {
					addConcern({ type, text: fieldValue });
					setNewValue('');
				}
			})}
		>
			<input
				className='item-input'
				{...inputProps}
				type='text'
				value={fieldValue}
				onChange={onChange(text => {
					setNewValue(text);
				})}
			/>
		</form>
	);
};

export default Field;
