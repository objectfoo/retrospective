import React, { useState } from 'react';

const onSubmit = fn => e => {
	e.preventDefault();
	fn(e);
};

const onChange = fn => e => fn(e.target.value);

/**
 * @param {object} props
 * @param {(id: string, data: object) => void} props.addConcern
 * @param {boolean} hidden
 * @param {string} props.initialValue
 * @param {object} props.inputProps
 * @param {string} props.type
 */
const Field = props => {
	const { addConcern, hidden, initialValue = '', inputProps = {}, type } = props;
	const [newConcern, setNewConcern] = useState(initialValue);

	return (
		<form
			hidden={hidden}
			noValidate
			autoComplete='off'
			onSubmit={onSubmit(() => {
				addConcern(type, { text: newConcern, type });
				setNewConcern('');
			})}
		>
			<input
				className='item-input'
				{...inputProps}
				type='text'
				value={newConcern}
				onChange={onChange(text => {
					setNewConcern(text);
				})}
			/>
		</form>
	);
};

export default Field;
