import React from 'react';
import Field from './field';
import './item.css';

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
const Item = props => {
	const { addConcern, editing, id, removeConcern, setEditing, text, type } = props;
	const isEditing = editing === id;

	return (
		<div className='item-wrapper'>
			<div className='item-body'>
				<Field
					hidden={!isEditing}
					inputProps={{ 'aria-label': `edit entry in ${type} list`, id: id }}
					addConcern={addConcern}
					type={type}
					initialValue={text}
				/>
				{!isEditing && <TextWrapper>{text}</TextWrapper>}
			</div>
			<div className='item-footer'>
				<button
					aria-haspopup='true'
					aria-controls={id}
					aria-expanded={isEditing}
					className='btn item-edit'
					onClick={() => {
						setEditing(isEditing ? null : id);
					}}
				>
					edit
				</button>
				<button
					aria-label={`delete "${text}"`}
					className='btn item-delete'
					onClick={() => removeConcern({ id })}
				>
					&times;
				</button>
			</div>
		</div>
	);
};

export default Item;
