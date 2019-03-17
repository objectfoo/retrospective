import React from 'react';
import MainInput from './MainInput';
import * as LineItems from './LineItems';
import * as FormButtons from './FormButtons';

const renderItem = config => {
	const { el, variant, editing, dispatch } = config;

	return (
		<li key={el.id} className='item'>
			{variant === 'vote' && LineItems.renderVote(dispatch, el)}
			{el.id === editing
				? LineItems.renderEdit(dispatch, el)
				: LineItems.renderDisplay(dispatch, el)}
			{FormButtons.renderDelete(dispatch, el.id)}
		</li>
	);
};

const FormSection = props => {
	const { dispatch, editing, list, title, type, variant } = props;

	return (
		<div className='form-list'>
			<h2 className='title-section'>{title}</h2>
			<MainInput dispatch={dispatch} type={type} />
			{list.length === 0 ? null : (
				<ul className='items'>
					{list.map(el => renderItem({ dispatch, el, variant, editing }))}
				</ul>
			)}
		</div>
	);
};

export default FormSection;
