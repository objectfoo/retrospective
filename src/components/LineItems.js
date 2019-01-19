import React from 'react';
import useInput from '../lib/useInput';
import { actions } from '../lib/useAppReducer';
import { MAX_VOTES } from '../constants';

const EditControl = props => {
	const { dispatch, id, text } = props;
	const { reset, value, setValue } = useInput(text);
	const onSubmit = e => {
		e.preventDefault();
		reset();
		dispatch(actions.updateItem(id, value));
	};

	const onChange = e => {
		e.preventDefault();
		setValue(e.target.value);
	};

	const onBlur = e => {
		console.log('blur', e);
	};

	const onKeyDown = e => {
		if (e.key === 'Enter' && value.length === 0) {
			e.preventDefault();
		} else if (e.key === 'Escape') {
			reset();
			dispatch(actions.setEditing(null));
		}
	};

	return (
		<form
			style={{ display: 'block', paddingRight: '10px', width: '100%' }}
			onSubmit={onSubmit}
		>
			<input
				id={`edit-input-${id}`}
				type='text'
				autoFocus
				className='item-content'
				name={`edit-input-${id}`}
				value={value}
				onKeyDown={onKeyDown}
				onChange={onChange}
				onBlur={onBlur}
			/>
		</form>
	);
};

export const renderEdit = (dispatch, el) => (
	<EditControl {...el} dispatch={dispatch} />
);

export const renderDisplay = (dispatch, el) => {
	const onDoubleClick = () => dispatch(actions.setEditing(el.id));

	return (
		<div className='item-content' {...{ onDoubleClick }}>
			{el.text}
		</div>
	);
};

export const VoteControl = props => {
	const { dispatch, id, text, vote } = props;
	const { value, setValue } = useInput(vote || 0);

	return (
		<input
			alt-label='vote input'
			className='item-vote hide-spinner'
			type='number'
			max={MAX_VOTES}
			value={value}
			onChange={e => {
				const { target } = e;
				setValue(Math.min(MAX_VOTES, target.value));
				dispatch(actions.updateItem(id, text, target.value));
			}}
		/>
	);
};

export const renderVote = (dispatch, el) => {
	return <VoteControl dispatch={dispatch} {...el} />;
};
