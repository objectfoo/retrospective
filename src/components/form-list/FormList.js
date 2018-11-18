import React from 'react';
import EditView from '../EditView';
import TextView from '../TextView';
import useInput from '../../lib/useInput';
import './form-list.css';

const FormList = props => {
	const { id, list, editing, title = 'section' } = props;
	const { addItem, updateTextFor, elementsOfType, deleteById } = list;
	const elements = elementsOfType(id);
	const { reset, ...userInput } = useInput({ id, value: '' });

	return (
		<div className='form-list'>
			<h2>{title}</h2>
			<div className='form-container'>
				<form
					onSubmit={e => {
						e.preventDefault();
						addItem(id, userInput.value);
						reset();
					}}
				>
					<input
						type='text'
						className='form-entry'
						name={`${id}-entry`}
						id={`${id}-entry`}
						{...userInput}
					/>
				</form>
			</div>
			<div className='list-container'>
				{elements.length === 0 ? null : (
					<ul className='items'>
						{elements.map(el => {
							const isEditing = el.id === editing.id;

							return (
								<li key={el.id} className='item'>
									<button
										className='edit'
										onClick={e => {
											e.preventDefault();
											editing.toggleEditing(el);
										}}
									>
										{`${isEditing ? 'Cancel' : 'Edit'}`}
									</button>
									<div className='item-body'>
										{isEditing ? (
											<EditView {...editing} updateTextFor={updateTextFor} />
										) : (
											<TextView
												id={el.id}
												deleteById={deleteById}
												onDoubleClick={() => editing.toggleEditing(el)}
											>
												{el.text}
											</TextView>
										)}
									</div>
									<button
										className='cancel'
										onClick={() => {
											deleteById(el.id);
										}}
										type='button'
									>
										<span>&times;</span>
									</button>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};

export default FormList;
