import React from 'react';

const TextWrapper = props => <div>{props.children}</div>;

/**
 * @type {React.SFC}
 * @param {object} props
 * @param	{string} props.id
 * @param {string} props.type
 * @param {string} props.text
 * @param {null|object} props.editing
 * @param {(id:string) => void} props.removeConcern
 * @param {(record: object) => void} props.setEditing
 * @return {React.ReactNode}
 */
const ConcernItem = props => {
	const { id, editing, text, removeConcern, setEditing } = props;
	const isEditing = editing === id;

	return (
		<div>
			<div>
				{isEditing ? 'editing' : <TextWrapper>{text}</TextWrapper>}
				<button onClick={() => setEditing(isEditing ? null : id)}>edit</button>
				<button onClick={() => removeConcern({ id })}>&times;</button>
			</div>
		</div>
	);
};

export default ConcernItem;
