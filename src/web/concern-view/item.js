import React from 'react';
import Field from './field';
import './item.css';

const Item = props => {
	const { addConcern, editing, id, removeConcern, setEditing, text, type } = props;
	const isEditing = editing === id;

	return (
		<div className='item-wrapper'>
			<div className='item-body'>
				{type === 'bad' && !isEditing && <div>Vote</div>}
				<Field
					hidden={!isEditing}
					inputProps={{ 'aria-label': `edit entry in ${type} list`, id: id }}
					addConcern={addConcern}
					type={type}
					initialValue={text}
				/>
				{!isEditing && <div className='item-text-wrapper'>{text}</div>}
			</div>
			<div className='item-footer'>
				<div className='item-footer-item'>
					<button
						aria-haspopup='true'
						aria-controls={id}
						aria-expanded={isEditing}
						className='btn ripple item-btn--edit'
						onClick={() => {
							setEditing(isEditing ? null : id);
						}}
					>
						edit
					</button>
				</div>
				<div className='item-footer-item'>
					<button
						aria-label={`delete "${text}"`}
						className='btn ripple item-btn--delete'
						onClick={() => removeConcern({ id })}
					>
						&times;
					</button>
				</div>
			</div>
		</div>
	);
};

export default Item;
