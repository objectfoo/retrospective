import React from 'react';
import { actions } from '../lib/useAppReducer';

const Header = props => {
	const { dispatch } = props;

	return (
		<header>
			<h1 className='header-title'>Retrospective</h1>
			<button className='reset' onClick={() => {
				dispatch(actions.reset());
			}}>reset</button>
		</header>
	);
};

export default Header;
