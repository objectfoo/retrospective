import React, { Fragment } from 'react';
import Header from './Header';
import FormSection from './FormSection';

const Layout = props => {
	const { good, bad, next, editing, dispatch } = props;

	return (
		<Fragment>
			<div id='app'>
				<Header dispatch={dispatch} />
				<FormSection
					type='good'
					title='What went well?'
					list={good}
					editing={editing}
					dispatch={dispatch}
				/>
				<FormSection
					type='bad'
					variant='vote'
					title='What needs improvement?'
					list={bad}
					editing={editing}
					dispatch={dispatch}
				/>
				<FormSection
					type='next'
					title='What to try next time'
					list={next}
					editing={editing}
					dispatch={dispatch}
				/>
			</div>
			<footer>
				<p>footer</p>
			</footer>
		</Fragment>
	);
};

export default Layout;
