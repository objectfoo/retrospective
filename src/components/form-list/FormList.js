import React from 'react';
import EditView from '../EditView';
import useInput from '../../lib/useInput';
import { actions } from '../../lib/useAppReducer';
import './form-list.css';

const textView = (dispatch, id, text) => (
	<div
		id={id}
		onDoubleClick={() => {
			dispatch(actions.setEditing(id));
		}}
	>
		<div className='form-entry'>{text}</div>
	</div>
);

const editView = (dispatch, el) => {
	return <EditView {...el} dispatch={dispatch} />;
};

const deleteButton = (dispatch, id) => {
	return (
		<button
			className='cancel'
			onClick={() => {
				dispatch(actions.delItem(id));
			}}
			type='button'
		>
			<span>&times;</span>
		</button>
	);
};

const editButton = (dispatch, id, isEditing) => {
	return (
		<button
			className='edit'
			onClick={e => {
				e.preventDefault();
				dispatch(actions.setEditing(id));
			}}
		>
			{`${isEditing ? 'Cancel' : 'Edit'}`}
		</button>
	);
};

const FormList = props => {
	const { type, title = 'section', list, editing, dispatch } = props;
	const { reset, ...userInput } = useInput('');

	return (
		<div className='form-list'>
			<h2>{title}</h2>
			<div className='form-container'>
				<form
					onSubmit={e => {
						e.preventDefault();
						dispatch(actions.addItem(type, userInput.value));
						reset();
					}}
				>
					<input
						type='text'
						className='form-entry'
						name={`${type}-entry`}
						id={`${type}-entry`}
						{...userInput}
					/>
				</form>
			</div>
			<div className='list-container'>
				{list.length === 0 ? null : (
					<ul className='items'>
						{list.map(el => {
							const isEditing = el.id === editing;

							return (
								<li key={el.id} className='item'>
									{editButton(dispatch, el.id, isEditing)}
									<div className='item-body'>
										{isEditing
											? editView(dispatch, el)
											: textView(dispatch, el.id, el.text)}
									</div>
									{deleteButton(dispatch, el.id)}
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
