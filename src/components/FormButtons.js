import React from 'react';
import { actions } from '../lib/useAppReducer';

export const renderDelete = (dispatch, id) => {
	return (
		<button
			className='delete'
			onClick={() => {
				dispatch(actions.delItem(id));
			}}
			type='button'
			aria-label='delete item'
		>
			<span aria-hidden>&times;</span>
		</button>
	);
};
