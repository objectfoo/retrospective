import React, { useState } from 'react';

const buildOnNewItem = ({ setNewConcern }) => e => setNewConcern(e.target.value);
const buildOnSubmit = ({ setNewConcern, addConcern, text, type }) => e => {
	e.preventDefault();
	addConcern(type, { text, type });
	setNewConcern('');
};

/**
 *
 * @param {object} props
 * @param {string} props.type
 * @param {string} props.initialValue
 * @param {(id: string, data: object) => void} props.addConcern
 */
const Field = props => {
	const { type, addConcern, initialValue = '' } = props;
	const [newConcern, setNewConcern] = useState(initialValue);
	const onSubmit = buildOnSubmit({
		setNewConcern,
		addConcern,
		text: newConcern,
		type
	});

	return (
		<form autoComplete='off' {...{ onSubmit }}>
			<label>
				<span className='sr-only'>{`New concern for section ${type}`}</span>
				<input
					type='text'
					name='new-concern'
					value={newConcern}
					onChange={buildOnNewItem({ setNewConcern })}
				/>
			</label>
		</form>
	);
};

export default Field;
